using System;
using System.Diagnostics;

public static class BashRunner
{
    public static string RunCommand(string command)
    {
        var process = new Process
        {
            StartInfo = new ProcessStartInfo
            {
                FileName = "/bin/bash",
                Arguments = $"-c \"{command}\"",
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                UseShellExecute = false,
                CreateNoWindow = true
            }
        };

        process.Start();

        string output = process.StandardOutput.ReadToEnd();
            

        process.WaitForExitAsync();

        return output;
    }
}