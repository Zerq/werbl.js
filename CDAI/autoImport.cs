using System.Collections.ObjectModel;
using System.IO.Pipelines;
using System.Runtime;
using System.Text.RegularExpressions;

public class program
{


    public static void Main(params string[] args)
    {
        args = new string[] { "/home/arch/squid/backoffice/backoffice/raportDraft/src/locals", "speechImports.ts" };

        if (args.Count() != 2){
            Console.WriteLine(@"usage: ""CDAI <targetDirectory> <outputfile>""
example CDAI ~/Documents/GitHub/werbl.js/werbelBasicApp/local localImport.ts
            ");
        }

        if (args.Length != 2)
        {
            Console.WriteLine("no targetDirSpecified");
        }

        var targetPath = args[0];
        var outputFileName = args[1];
        
        if (targetPath.EndsWith("/"))
        {
            targetPath = targetPath.Substring(0, targetPath.Length - 1); //should not end with /
        }

        var targetDir = new DirectoryInfo(targetPath);



        var result = ParseDir(targetDir, new List<string>(), targetPath);

        var outFile = $@"/*class decorator auto-import-generated do not manually edit*/
";

        result.ForEach(n =>
        {
            var x = "";
            if (n.EndsWith(".tsx"))
            {
                x = n.Substring(0, n.Length - 3) + "js";

            }
            else if (n.EndsWith(".ts"))
            {
                x = n.Substring(0, n.Length - 2) + "js";

            }

            outFile += $@"import ""{x}"";
";
        });

        File.WriteAllText($"{targetPath}/{outputFileName}", outFile);

    }
    private static Regex rex = new Regex("@[^@}]*(class)[^{]", RegexOptions.Multiline);
    public static List<string> ParseDir(DirectoryInfo dir, List<string> readResult, string targetPath)
    {
        foreach (var file in dir.GetFiles("*.ts*"))
        {
            var content = File.ReadAllText(file.FullName);
            if (rex.IsMatch(content))
            {
                var path = file.FullName.Replace(targetPath, ".");
                if (!readResult.Contains(path) && !path.EndsWith("entry.tsx"))
                {
                    readResult.Add(path);
                }
            }
        }

        foreach (var dir2 in dir.GetDirectories())
        {
            ParseDir(dir2, readResult, targetPath);
        }

        return readResult;
    }
}