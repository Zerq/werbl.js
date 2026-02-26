using System.ComponentModel;
using System.Dynamic;
using System.Runtime;
using System.Security.Permissions;
using System.Text.RegularExpressions;

public class App
{



    public void parseFolder(string command, string folder, string targetFolder)
    {

        var rex = new System.Text.RegularExpressions.Regex(@"([^\[]*from)\s\""([^""]*)\""\;\s*\/\/\[\[([^\]]*)\]\]");



        var dir = new DirectoryInfo(folder);
        foreach (FileInfo file in dir.GetFiles())
        {
            if (file.Name.EndsWith(".ts") || file.Name.EndsWith(".tsx"))
            {
                var code = File.ReadAllText(file.FullName);

                var newCode = rex.Replace(code, x =>
                 {
                     var firstPart = x.Groups[1].Value;
                     var old = x.Groups[2].Value;

                     var newExt = x.Groups[3].Value;


                     var all = x.Value;


                     switch (command)
                     {
                         case "--replace":
                             if (old.EndsWith(".jsx"))
                             {
                                 return $@"{firstPart} ""{old.Replace(".jsx", "." + newExt)}"";";
                             }

                             if (old.EndsWith(".js"))
                             {
                                 return $@"{firstPart} ""{old.Replace(".js", "." + newExt)}"";";
                             }
                             break;

                         case "--purge":
                             if (old.EndsWith(".jsx"))
                             {
                                 return $@"{firstPart} ""{old.Replace(".jsx", "")}"";";
                             }

                             if (old.EndsWith(".js"))
                             {
                                 return $@"{firstPart} ""{old.Replace(".js", "")}"";";
                             }
                             break;


                         case "--cleanse":
                             if (old.EndsWith(".jsx"))
                             {
                                 return $@"{firstPart} ""{old}"";";
                             }

                             if (old.EndsWith(".js"))
                             {
                                 return $@"{firstPart} ""{old}"";";
                             }
                             break;


                     }



                     return "";
                 });

                var newPath = Path.Combine(targetFolder, file.Name);


                if (!Directory.Exists(targetFolder))
                {
                    Directory.CreateDirectory(targetFolder);
                }


                File.WriteAllText(newPath, newCode);



            }
        }

        foreach (var d in dir.GetDirectories())
        {
            parseFolder(command, d.FullName, Path.Combine(targetFolder, d.Name));
        }
    }

    private void ShowHelp()
    {
        Console.WriteLine(@"<command> <src folder> <dest>
Commands avalible:
--replace     Replace replaces js/jsx with ts/tsx where properly annotated for example import { IOC } from ""./IOC.js"";//[[ts]
        this will replace the ""./IOC.js"" with ""./IOC.ts""
--purge     Purge will blank out the extension in import statments etc,
--cleanse     Clean ESM removes the annotation.
--help     Show Help");


    }

    public void Run(string[] args)
    {




        if (args.Length > 0 && args[0] == "--help")
        {
            ShowHelp();
            return;
        }


        if (args.Length == 3)
        {
            parseFolder(args[0], args[1], args[2]);
        }
        else
        {
            ShowHelp();

        }



    }
}

public class Program
{
    static void Main(params string[] args)
    {
        new App().Run(args);


    }
}

