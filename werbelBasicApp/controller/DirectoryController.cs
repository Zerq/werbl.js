using System.Collections;
using System.Data;
using System.Diagnostics.CodeAnalysis;
using System.Dynamic;
using System.Text.Encodings.Web;
using System.Web;
using INIParser;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.AspNetCore.StaticAssets;
using Microsoft.AspNetCore.StaticFiles;





public class DirectoryController : Controller
{


    private string? homePath
    {
        get
        {
            if (Environment.OSVersion.Platform == PlatformID.Unix || Environment.OSVersion.Platform == PlatformID.MacOSX)
            {
                return Environment.GetEnvironmentVariable("HOME");
            }

            if (Environment.OSVersion.Platform == PlatformID.Win32NT)
            {
                return Environment.ExpandEnvironmentVariables("%HOMEDRIVE%%HOMEPATH%");
            }

            return null;
        }

    }



    [HttpGet("/icons")]
    public JsonResult index()
    {
        if (homePath != null)
        {
            var dirs = new DirectoryInfo($"{homePath}/.icons").GetDirectories().Select(n => n.FullName);
            return new JsonResult(dirs);
        }
        return new JsonResult(new List<string>());
    }

    private const string iconThemeSection = "Icon Theme";

    private IEnumerable<int> parseIntArray(string? str)
    {
        if (str == null)
        {
            return [];
        }

        return str.Split(",").Select(n => int.Parse(n));
    }

    private int? parseInt(string? str)
    {
        if (str == null)
        {
            return null;
        }

        return int.Parse(str);
    }



    private dynamic makeSection(string str, IniFile ini)
    {
        return new
        {
            Path = str,
            Context = ini[str, "Context"],
            Size = parseInt(ini[str, "Size"]),
            MinSize = parseInt(ini[str, "MinSize"]),
            MaxSize = parseInt(ini[str, "MaxSize"]),
            Type = ini[str, "Type"],
            Scale = parseInt(ini[str, "Scale"]),
        };
    }
    private Dictionary<string, IEnumerable<IIcon>> makeDirectories(IniFile ini, string theme)
    {
        var dirs = ini[iconThemeSection, "Directories"]?.Split(",").Select(n => makeSection(n, ini));

        Dictionary<string, IEnumerable<IIcon>> result = new Dictionary<string, IEnumerable<IIcon>>();




        if (dirs != null)
        {

            foreach (var context in dirs.Where(n => n.Context != null).Select(n => n.Context as string).Distinct())
            {
                var icons = new List<IIcon>();
                var iconsPath = $"{homePath}/.icons/{theme}/{dirs.First(n => n.Context == context).Path}";
                var fileNames = new DirectoryInfo(iconsPath).GetFiles().Select(n => n.Name);

                IDictionary<string, IEnumerable<string>> files = new Dictionary<string, IEnumerable<string>>();
                result.Add(context, icons);

                foreach (var fileName in fileNames)
                {
                    IIcon icon = new Icon(fileName);
                
                    foreach (var dir in dirs.Where(n => n.Context == context))
                    {


                        var dirIconsPath = $"{homePath}/.icons/{theme}/{dir.Path}/{fileName}";
                        if (System.IO.File.Exists(dirIconsPath))
                        {
                            switch (dir.Size)
                            {
                                case 8: icon.Icon8 = dirIconsPath; break;
                                case 16: icon.Icon16 = dirIconsPath; break;
                                case 22: icon.Icon22 = dirIconsPath; break;
                                case 24: icon.Icon24 = dirIconsPath; break;
                                case 32: icon.Icon32 = dirIconsPath; break;
                                case 48: icon.Icon48 = dirIconsPath; break;
                                case 64: icon.Icon64 = dirIconsPath; break;
                                case 128: icon.Icon128 = dirIconsPath; break;
                                case 256: icon.Icon256 = dirIconsPath; break;
                            }
                        }
                    }
                    icons.Add(icon);
                }

            }






            // foreach (var dir in dirs)
            // {

            //     if (dir.Context != null && !files.ContainsKey(dir.Context))
            //     {
            //         var iconsPath = $"{homePath}/.icons/{theme}/{dir.Path}";
            //         var fileNames = new DirectoryInfo(iconsPath).GetFiles().Select(n => n.FullName);
            //         files.Add(dir.Context, fileNames);
            //     }


            //     if (dir.Context != null)
            //     {
            //         if (!obj.ContainsKey(dir.Context))
            //         {
            //             obj.Add(dir.Context, new List<dynamic>());
            //         }

            //         obj[dir.Context]?.Add(dir);

            //     }
            // }
        }


        return result;

    }





    private Dictionary<string, string> lookup = new Dictionary<string, string>
    {
        {".svg","text/svg"},
        {".png","image/png"},
        {".jpeg","image/jpeg"},
        {".jpg","image/jpeg"},
        {".gif","image/gif"}
    };
    private static readonly string iconFolder = ".icons";


    private string? defaultTheme;
    public string DefaultTheme
    {
        get
        {
            if (defaultTheme != null)
            {
                return defaultTheme;
            }

            defaultTheme = BashRunner.RunCommand("gsettings get org.cinnamon.desktop.interface icon-theme").Replace("\n", "").Replace("'", "");

            return defaultTheme;
        }
    }


    [HttpGet("/default-icons/default")]
    public string getDefaultIcon()
    {
        return DefaultTheme;
    }

    [HttpGet("/icons/{theme}/{path}")]
    public FileResult GetIcon(string theme, string path)
    {
        if (homePath == null)
        {
            throw new ApplicationException("could not retrive hompath");
        }

        path = HttpUtility.UrlDecode(path);


        var validationPath = Path.Combine(homePath, iconFolder);
        var resultingPath = Path.Combine(homePath, iconFolder, theme, String.Join("/", path));
        var file = new FileInfo(resultingPath);

        if (!file.FullName.StartsWith(validationPath))
        {
            throw new UnauthorizedAccessException("");
        }

        var bytes = System.IO.File.ReadAllBytes(resultingPath);
        return File(bytes, lookup[file.Extension]);
    }

    [HttpGet("/icons/{theme}")]
    public JsonResult index(string theme)
    {
        if (homePath != null)
        {

            var verificationParent = Path.Combine(homePath, iconFolder);

            var resultingPath = Path.Combine(homePath, iconFolder, theme, "index.theme");
            var file = new FileInfo(resultingPath);


            if (file == null || file.Directory?.Parent?.FullName != verificationParent)
            {
                throw new UnauthorizedAccessException("");
            }

            var ini = new IniFile(resultingPath);


            var res = new IconMetaData(
                Name:  ini[iconThemeSection, "name"],
                Comment: ini[iconThemeSection, "Comment"],
                Inherits:  ini[iconThemeSection, "Inherits"],
                FollowsColorScheme: Boolean.Parse(ini[iconThemeSection, "FollowsColorScheme"]),
                KdeExtensions: ini[iconThemeSection, "KDE-Extensions"],
                DisplayDepth: parseInt(ini[iconThemeSection, "DisplayDepth"]),
                DesktopDefault: parseInt(ini[iconThemeSection, "DisplayDepth"]),
                DesktopSizes: parseIntArray(ini[iconThemeSection, "DesktopSizes"]),
                ToolbarDefault: parseInt(ini[iconThemeSection, "ToolbarDefault"]),
                ToolbarSizes: parseIntArray(ini[iconThemeSection, "ToolbarSizes"]),
                MainToolbarDefault: parseInt(ini[iconThemeSection, "MainToolbarDefault"]),
                MainToolbarSizes: parseIntArray(ini[iconThemeSection, "MainToolbarSizes"]),
                SmallDefault: parseInt(ini[iconThemeSection, "SmallDefault"]),
                SmallSizes: parseIntArray(ini[iconThemeSection, "SmallSizes"]),
                PanelDefault: parseInt(ini[iconThemeSection, "PanelDefault"]),
                PanelSizes: parseIntArray(ini[iconThemeSection, "PanelSizes"]),
                DialogDefault: parseInt(ini[iconThemeSection, "DialogDefault"]),
                DialogSizes: parseIntArray(ini[iconThemeSection, "DialogSizes"]),
                Directory: makeDirectories(ini, theme)
            );











            return new JsonResult(res);

        }



        return new JsonResult(new List<string>());
    }

    private FileExtensionContentTypeProvider fileExtProvider = new FileExtensionContentTypeProvider();

    private string getMime(FileInfo file)
    {
        string? mime = null;

        if (fileExtProvider.TryGetContentType(file.FullName, out mime))
        {
            return mime;
        }


        return "";
    }


    [HttpGet("/files/{path}")]
    public JsonResult GetDirectory(string path)
    {

        path = HttpUtility.UrlDecode(path);
        var dir = new DirectoryInfo(path);

        dynamic obj = new
        {
            dir.Name,
            dir.FullName,
            Directories = dir.GetDirectories().Select(n => new
            {
                n.Name,
                n.FullName,
            }),
            Parent = dir.Parent != null ? new
            {
                dir.Parent.Name,
                dir.Parent.FullName
            } : null,
            Files = dir.GetFiles().Select(n => new
            {
                n.Name,
                n.FullName,
                n.Length,
                n.Extension,
                Mime = getMime(n),
                n.CreationTime,
                n.LastAccessTime,
                n.LastWriteTime
            })
        };


        return new JsonResult(obj);
    }


}
