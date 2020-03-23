using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Configuration;
using TechTalk.SpecFlow;

namespace MyMDAutomation.StepsDefinition
{
    [Binding]
    public class MyMDLoginSteps
    {
        MyMDconnector MD;

        public MyMDLoginSteps(MyMDconnector MD)
        {
            this.MD = MD;
        }

        [Then(@"I check if pvq's are available \""(.*)""")]
        [When(@"I check if pvq's are available \""(.*)""")]
        public void ifPvqS(string locator)
        {
            Console.WriteLine("If PVQ's are available will click on " + locator);
            try
            {
                MD.waitForElement(locator);
                MD.click(locator);
            }
            catch
            {
                Console.WriteLine("PVQ's are not available for this user ");
            }
        }

        [Then(@"I wait for either \""(.*)"" or \""(.*)"" element to be visible")]
        [When(@"I wait for either \""(.*)"" or \""(.*)"" element to be visible")]
        public void IWaitFor(string externalweb, string mymdoverview)
        {
            Console.WriteLine("Waiting till the ExternalWeb or MyMD overview page is loaded ");
            try
            {
                MD.waitForElement(mymdoverview);
            }
            catch
            {
                MD.waitForElement(externalweb);
            }
        }


        [Given(@"I login to MyMD app with provided \""(.*)"" & \""(.*)""")]
        public void ILoginToMyMD(string username, string password)
        {
            MD.MDlogin(username, password);
        }


        [When(@"login should be successful")]
        [Then(@"login should be successful")]
        public void LoginSuccess()
        {
            try
            {
                Assert.IsTrue(MD.MDlocator("LastloginMymd_xpath").Displayed.Equals(true));
            }
            catch
            {
                Assert.IsTrue(MD.MDlocator("Lastlogin_id").Displayed.Equals(true));
            }
            Console.WriteLine("Login is Successful as LastLogin is displayed.");
        }

    }
}
