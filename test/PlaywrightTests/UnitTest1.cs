using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.Playwright;
using Microsoft.Playwright.NUnit;
using NUnit.Framework;

namespace PlaywrightTests;

[Parallelizable(ParallelScope.Self)]
[TestFixture]
public class ExampleTest : PageTest
{

    private string url = "http://localhost:5000";


    [Test]
    public async Task HasTitle()
    {
        await Page.GotoAsync(url);

        // Expect a title "to contain" a substring.
        await Expect(Page).ToHaveTitleAsync(new Regex("test"));
    }

    [Test]
    public async Task GetStartedLink()
    {
        await Page.GotoAsync(url);

        // Click the get started link.
        await Page.GetByRole(AriaRole.Link, new() { Name = "Home" }).ClickAsync();


    }
}


