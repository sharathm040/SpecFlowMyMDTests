using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTalk.SpecFlow;
using OpenQA.Selenium;
using System.Configuration;
using OpenQA.Selenium.Support.UI;
using NUnit.Framework;
using TechTalk.SpecFlow.Assist;
using MyMDAutomation.utils;
using System.Threading;
using System.Data;

namespace MyMDAutomation.StepsDefinition
{
    [Binding]
    public class CommonSteps
    {
        MyMDconnector MD;

        public CommonSteps(MyMDconnector MD)
        {
            this.MD = MD;
        }

        public static readonly Random random = new Random();

        /* [Given(@"I navigate to")]
         public void GivenINavigateToOn()
         {
             string browser = Environment.GetEnvironmentVariable("brower", EnvironmentVariableTarget.Process);
             string url = Environment.GetEnvironmentVariable("url", EnvironmentVariableTarget.Process);
             Console.WriteLine("Navigating to " + url + " on - " + browser);
             MD.openBrowser(browser);
             MD.navigate(url);
         }*/

        [Given(@"I navigate to \""(.*)"" on \""(.*)""")]
        public void INavigateToOn(string url, string browser)
        {
            Console.WriteLine("Navigating to " + url + " on - " + browser);
            MD.openBrowser(browser);
            MD.navigate(url);
        }


        [Then(@"I click on \""(.*)""")]
        [When(@"I click on \""(.*)""")]
        public void IClickOn(string locator)
        {
            Console.WriteLine("Clicking on the " + locator);
            Thread.Sleep(3000);
            MD.click(locator);
        }


        [Then(@"I enter \""(.*)"" as \""(.*)""")]
        [When(@"I enter \""(.*)"" as \""(.*)""")]
        public void IEnterAs(string locator, string data)
        {
            Console.WriteLine("Typying on the " + locator + " with value " + data);
            MD.input(locator, data);
        }


        [Then(@"I verify the text present in \""(.*)"" as \""(.*)""")]
        [When(@"I verify the text present in \""(.*)"" as \""(.*)""")]
        public void IVerifyText(string locator, string text)
        {
            Console.WriteLine("Verifying the text present in " + locator + " as " + text);
            MD.verifyText(locator, text);
        }


        [Then(@"I enter random text in \""(.*)"" as \""(.*)""")]
        [When(@"I enter random text in \""(.*)"" as \""(.*)""")]
        public void RandomData(string locator, string data)
        {
            Console.WriteLine("Typying on the " + locator + " with value " + data);
            MD.keyinput(locator, data + random.Next(1, 10000));
        }


        [Then(@"I enter random email \""(.*)"" as \""(.*)""")]
        [When(@"I enter random email \""(.*)"" as \""(.*)""")]
        public void RandomEmail(string locator, string data)
        {
            Console.WriteLine("Typying on the " + locator + " with value " + data);
            MD.keyinput(locator, data + random.Next(1, 10000) + "@md.ca");
        }


        [When(@"I verify the element \""(.*)"" is present")]
        [Then(@"I verify the element \""(.*)"" is present")]
        public void ElementPresent(string locator)
        {
            Console.WriteLine("Verifying if the element  " + locator + "  is visible");
            MD.waitForElement(locator);
            MD.scroll(locator);
            Assert.IsTrue(MD.MDlocator(locator).Displayed.Equals(true));
        }


        [When(@"I verify that \""(.*)"" elements are present in \""(.*)""")]
        [Then(@"I verify that \""(.*)"" elements are present in \""(.*)""")]
        public void ElementVisible(int x, string locator)
        {
            Console.WriteLine("Verifying all the elements in  " + locator + "  are visible");
            int y = MD.MDlistlocators(locator).Count;
            Assert.IsTrue(y.Equals(x));
        }


        [Then(@"I click \""(.*)"" from list of \""(.*)"" elements")]
        [When(@"I click \""(.*)"" from list of \""(.*)"" elements")]
        public void ClickListElement(string text, string locator)
        {
            IList<IWebElement> element = MD.MDlistlocators(locator);
            foreach (IWebElement MDelement in element)
            {
                if (MDelement.Text.ToString().Contains(text))
                {
                    MDelement.Click();
                    break;
                }
            }
        }


        [Given(@"I login to MyMD app with provided Credentials")]
        public void GivenILoginToMyMDAppWithProvidedCredentials(Table table)
        {
            var dictionary = TableExtensions.ToDictionary(table);
            var test = dictionary["Username"];
            MD.MDlogin(dictionary["Username"], dictionary["Password"]);
        }


        [Then(@"I switch to \""(.*)"" Tab or Window")]
        [When(@"I switch to \""(.*)"" Tab or Window")]
        public void switchWindow(string TabNo)
        {
            MD.switchTab(TabNo);
        }

        [Then(@"I login to MD1 app with provided Credentials")]
        [Given(@"I login to MD1 app with provided Credentials")]
        public void GivenILoginToMD1(Table table)
        {
            var dataTable = TableExtensions.ToDataTable(table);
            foreach (DataRow row in dataTable.Rows)
            {
                MD.MD1login(row.ItemArray[0].ToString(), row.ItemArray[1].ToString());
            }
        }

        [Given(@"I navigate to MD1 app with provided environment")]
        public void GivenINavToMD1()
        {
            MD.NavToMD1();
        }

        [Then(@"I click VALUE \""(.*)"" from list of \""(.*)"" elements")]
        [When(@"I click VALUE \""(.*)"" from list of \""(.*)"" elements")]
        public void MD1ClickListElement(string text, string locator)
        {
            IList<IWebElement> element = MD.MDlistlocators(locator);
            foreach (IWebElement MDelement in element)
            {
                if (MDelement.GetAttribute("value").ToString().Equals((text)))
                {
                    Thread.Sleep(5000);
                    ((IJavaScriptExecutor)MD.MDdriver).ExecuteScript("arguments[0].click();", MDelement);
                    //MDelement.Click();
                    break;
                }
            }
        }

    }
}
