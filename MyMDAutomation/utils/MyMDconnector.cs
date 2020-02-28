using AventStack.ExtentReports;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.Safari;
using System;
using System.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using BoDi;
using OpenQA.Selenium.Support.UI;
using TechTalk.SpecFlow;
using OpenQA.Selenium.Interactions;
using System.Collections;
using System.IO;
using System.Reflection;

namespace MyMDAutomation
{
    [Binding]
    public class MyMDconnector
    {
        //Declaring IWebDriver as MDdriver 
        public IWebDriver MDdriver = null;
        private readonly IObjectContainer _objectContainer;
        WebDriverWait wait;

        //Creating the constructor for objectContainer
        public MyMDconnector(IObjectContainer objectContainer)
        {
            this._objectContainer = objectContainer;
        }

        //Creating the constructor for ExtentTest
        /* public MyMDconnector(ExtentTest test)
         {
             this.test = test;
         }*/

        /// <summary>
        /// Opening the desired browser we want to execute our tests
        /// </summary>
        /// <param name="bType"></param>
        public void openBrowser(string bType)
        {
            bType = Environment.GetEnvironmentVariable("browser", EnvironmentVariableTarget.Process);
            //bType = "headless";
            ChromeOptions options = new ChromeOptions();
            switch (bType)
            {
                case "chrome":
                    options.AddAdditionalCapability("useAutomationExtension", false);
                    MDdriver = new ChromeDriver(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), options);
                    MDdriver.Manage().Window.Maximize();
                    break;

                case "firefox":
                    FirefoxOptions ffoptions = new FirefoxOptions();
                    ffoptions.BrowserExecutableLocation = @"C:\Program Files\Mozilla Firefox\firefox.exe";
                    string filePath = Path.GetDirectoryName(System.AppDomain.CurrentDomain.BaseDirectory);
                    filePath = Directory.GetParent(Directory.GetParent(filePath).FullName).FullName;
                    FirefoxDriverService FFservice = FirefoxDriverService.CreateDefaultService(filePath);
                    ffoptions.AcceptInsecureCertificates = true;
                    MDdriver = new FirefoxDriver(FFservice, ffoptions);
                    MDdriver.Manage().Window.Maximize();
                    break;

                case "headless":
                    options.AddArguments("headless");
                    options.AddAdditionalCapability("useAutomationExtension", false);
                    options.AddArguments("window-size=1280,1024");
                    MDdriver = new ChromeDriver(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), options);
                    break;

                case "firefoxheadless":
                    FirefoxOptions ffoptions1 = new FirefoxOptions();
                    ffoptions1.BrowserExecutableLocation = @"C:\Program Files\Mozilla Firefox\firefox.exe";
                    string filePath1 = Path.GetDirectoryName(System.AppDomain.CurrentDomain.BaseDirectory);
                    filePath = Directory.GetParent(Directory.GetParent(filePath1).FullName).FullName;
                    FirefoxDriverService FFservice1 = FirefoxDriverService.CreateDefaultService(filePath);
                    ffoptions1.AcceptInsecureCertificates = true;
                    ffoptions1.AddArguments("-headless");
                    ffoptions1.AddArguments("--window-size=1280,1024");
                    MDdriver = new FirefoxDriver(FFservice1, ffoptions1);
                    break;

                case "safari":
                    MDdriver = new SafariDriver();
                    MDdriver.Manage().Window.Maximize();
                    break;

                default:
                    options.AddAdditionalCapability("useAutomationExtension", false);
                    MDdriver = new ChromeDriver(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), options);
                    MDdriver.Manage().Window.Maximize();
                    break;
            }
            _objectContainer.RegisterInstanceAs<IWebDriver>(MDdriver);
            MDdriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
            wait = new WebDriverWait(MDdriver, TimeSpan.FromSeconds(30));
        }
        /// <summary>
        /// Returns the WebDriver as MDdriver
        /// </summary>
        /// <returns></returns>
        public IWebDriver getMDdriver()
        {
            return MDdriver;
        }

        /// <summary>
        /// Navigating to the specific environment URL accourding to the urlKey provided
        /// </summary>
        /// <param name="urlKey"></param>
        public void navigate(string urlKey)
        {
            try
            {
                if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("sprint"))
                {
                    MDdriver.Url = "https://sprint.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("redesign"))
                {
                    MDdriver.Url = "https://sprint.mdm.ca/mymd";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("redesign15"))
                {
                    MDdriver.Url = "https://cgsecure3.mdm.ca/mymd";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("onlinedev"))
                {
                    MDdriver.Url = "https://onlinedev.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("onlineuat"))
                {
                    MDdriver.Url = "https://onlineuat.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("staging"))
                {
                    MDdriver.Url = "https://sprint-staging.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("onlineprototype"))
                {
                    MDdriver.Url = "https://onlineprototype.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("15s"))
                {
                    MDdriver.Url = "https://cgsecure3.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("online15"))
                {
                    MDdriver.Url = "https://online15.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("12s"))
                {
                    MDdriver.Url = "https://cgexternal1.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("14s"))
                {
                    MDdriver.Url = "https://cgexternal2.mdm.ca";
                }
                else if (ConfigurationManager.AppSettings[urlKey].ToLower().Equals("menudev"))
                {
                    MDdriver.Url = "https://menu-dev.mdm.ca";
                }
            }
            catch (Exception)
            {
                Assert.Fail("This URL is not available or wrong URL is provided " + ConfigurationManager.AppSettings[urlKey].ToLower());
                //test.Log(Status.Fail, "This URL is not available or wrong URL is provided " + ConfigurationManager.AppSettings[urlKey].ToLower());
                Console.WriteLine("This URL is not available or wrong URL is provided " + ConfigurationManager.AppSettings[urlKey].ToLower());
            }
        }

        /// <summary>
        /// Extracting the MD element with all locators declared
        /// </summary>
        /// <param name="locatorKey"></param>
        /// <returns></returns>
        public IWebElement MDlocator(string locatorKey)
        {
            IWebElement MDelement = null;
            try
            {
                if (locatorKey.EndsWith("_id"))
                {
                    MDelement = MDdriver.FindElement(By.Id(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_xpath"))
                {
                    MDelement = MDdriver.FindElement(By.XPath(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_name"))
                {
                    MDelement = MDdriver.FindElement(By.Name(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_classname"))
                {
                    MDelement = MDdriver.FindElement(By.ClassName(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_linktext"))
                {
                    MDelement = MDdriver.FindElement(By.LinkText(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_css"))
                {
                    MDelement = MDdriver.FindElement(By.CssSelector(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_plinktext"))
                {
                    MDelement = MDdriver.FindElement(By.PartialLinkText(ConfigurationManager.AppSettings[locatorKey]));
                }

            }
            catch (Exception)
            {
                Assert.Fail("Failed in extracting the element " + ConfigurationManager.AppSettings[locatorKey]);
                //test.Log(Status.Fail, "Failed in locating the element " + ConfigurationManager.AppSettings[locatorKey]);
                Console.WriteLine("Failed in locating the element " + ConfigurationManager.AppSettings[locatorKey]);
            }
            return MDelement;
        }

        /// <summary>
        /// Sending the data to input field
        /// </summary>
        /// <param name="locatorKey"></param>
        /// <param name="testdata"></param>
        public void input(string locatorKey, string testdata)
        {
            Console.WriteLine("Typing in " + ConfigurationManager.AppSettings[locatorKey]);
            //test.Log(Status.Info, "Typing in " + ConfigurationManager.AppSettings[locatorKey]);
            IWebElement MDelement = MDlocator(locatorKey);
            waitForElement(locatorKey);
            MDelement.Click();
            MDelement.Clear();
            MDelement.SendKeys(testdata);
        }

        /// <summary>
        /// Clicking on the element
        /// </summary>
        /// <param name="locatorKey"></param>
        public void click(string locatorKey)
        {
            Console.WriteLine("Clicking the " + ConfigurationManager.AppSettings[locatorKey]);
            //test.Log(Status.Info, "Clicking the " + ConfigurationManager.AppSettings[locatorKey]);
            IWebElement MDelement = MDlocator(locatorKey);
            waitForElement(locatorKey);
            MDelement.Click();
        }

        /// <summary>
        /// Verifying the text present in an element
        /// </summary>
        /// <param name="locatorKey"></param>
        /// <param name="expectedText"></param>
        public void verifyText(string locatorKey, string expectedText)
        {
            Console.WriteLine("Verifying the text present in the element " + ConfigurationManager.AppSettings[locatorKey]);
            //test.Log(Status.Info, "Verifying the text of the element " + ConfigurationManager.AppSettings[locatorKey]);
            IWebElement MDelement = MDlocator(locatorKey);
            waitForElement(locatorKey);
            string actualText = MDelement.Text;
            Assert.IsTrue(actualText.ToString().Equals(expectedText));
        }

        /// <summary>
        /// waiting for element to be visible
        /// </summary>
        /// <param name="locatorKey"></param>
        public void waitForElement(string locatorKey)
        {
            wait = new WebDriverWait(MDdriver, TimeSpan.FromSeconds(30));
            if (locatorKey.EndsWith("_id"))
            {
                wait.Until(ExpectedConditions.ElementIsVisible(By.Id(ConfigurationManager.AppSettings[locatorKey])));
            }
            else if (locatorKey.EndsWith("_xpath"))
            {
                wait.Until(ExpectedConditions.ElementIsVisible(By.XPath(ConfigurationManager.AppSettings[locatorKey])));
            }
            else if (locatorKey.EndsWith("_name"))
            {
                wait.Until(ExpectedConditions.ElementIsVisible(By.Name(ConfigurationManager.AppSettings[locatorKey])));
            }
            else if (locatorKey.EndsWith("_classname"))
            {
                wait.Until(ExpectedConditions.ElementIsVisible(By.ClassName(ConfigurationManager.AppSettings[locatorKey])));
            }
            else if (locatorKey.EndsWith("_linktext"))
            {
                wait.Until(ExpectedConditions.ElementIsVisible(By.LinkText(ConfigurationManager.AppSettings[locatorKey])));
            }
            else if (locatorKey.EndsWith("_css"))
            {
                wait.Until(ExpectedConditions.ElementIsVisible(By.CssSelector(ConfigurationManager.AppSettings[locatorKey])));
            }
            else if (locatorKey.EndsWith("_plink"))
            {
                wait.Until(ExpectedConditions.ElementIsVisible(By.PartialLinkText(ConfigurationManager.AppSettings[locatorKey])));
            }
        }

        public void sleep(string time)
        {
            Thread.Sleep(Convert.ToInt32(time));
        }

        /// <summary>
        /// General Login function that will go to Dashboard page
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        public void MDlogin(string username, string password)
        {
            Console.WriteLine("Login to MyMD app with provided credentials on " + ConfigurationManager.AppSettings["urlKey"] + " on " + ConfigurationManager.AppSettings["bType"]);
            openBrowser("bType");
            navigate("urlKey");
            Console.WriteLine("Clicking on SignIn button from either Redesign Menu or old Mega Menu");
            try
            {
                click("SignInheader_classname"); 
            }
            catch
            {
                click("SignInpublic_id");
            }
            input("username_name", username);
            input("password_name", password);
            click("signinbtn_classname");
            Console.WriteLine("If PVQ's are available will click on Remind me Later");
            try
            {
                click("remindlater_xpath");
            }
            catch
            {
                Console.WriteLine("PVQ's are not available for this user ");
            }
            Console.WriteLine("Waiting till the ExternalWeb or MyMD overview page is loaded ");
            try
            {
                waitForElement("pagetitle_classname");
                if (MDdriver.Url.EndsWith("error"))
                {
                    navigate("urlKey");
                    waitForElement("pagetitle_classname");
                }
            }
            catch
            {
                waitForElement("externalweb_classname");
            }
        }

        /// <summary>
        /// This function can be used to type the input using keyboard
        /// </summary>
        /// <param name="locatorKey"></param>
        /// <param name="testdata"></param>
        public void keyinput(string locatorKey, string testdata)
        {
            Console.WriteLine("Typing in " + ConfigurationManager.AppSettings[locatorKey]);
            //test.Log(Status.Info, "Typing in " + ConfigurationManager.AppSettings[locatorKey]);
            IWebDriver MDdriver = getMDdriver();
            IWebElement MDelement = MDlocator(locatorKey);
            waitForElement(locatorKey);
            Actions builder = new Actions(MDdriver);
            Actions typeIn = builder.SendKeys(MDelement, testdata);
            typeIn.Perform();
        }

        /// <summary>
        /// Finding all the MD elements with all types of locator
        /// </summary>
        /// <param name="locatorKey"></param>
        /// <returns></returns>
        public IList<IWebElement> MDlistlocators(string locatorKey)
        {
            IList<IWebElement> MDelement = null;
            try
            {
                if (locatorKey.EndsWith("_id"))
                {
                     MDelement = MDdriver.FindElements(By.Id(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_xpath"))
                {
                    MDelement = MDdriver.FindElements(By.XPath(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_name"))
                {
                    MDelement = MDdriver.FindElements(By.Name(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_classname"))
                {
                    MDelement = MDdriver.FindElements(By.ClassName(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_linktext"))
                {
                    MDelement = MDdriver.FindElements(By.LinkText(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_css"))
                {
                    MDelement = MDdriver.FindElements(By.CssSelector(ConfigurationManager.AppSettings[locatorKey]));
                }
                else if (locatorKey.EndsWith("_plinktext"))
                {
                    MDelement = MDdriver.FindElements(By.PartialLinkText(ConfigurationManager.AppSettings[locatorKey]));
                }

            }
            catch (Exception)
            {
                Assert.Fail("Failed in locating the elements with provided " + ConfigurationManager.AppSettings[locatorKey]);
                //test.Log(Status.Fail, "Failed in locating the element " + ConfigurationManager.AppSettings[locatorKey]);
                Console.WriteLine("Failed in locating the elements with provided " + ConfigurationManager.AppSettings[locatorKey]);
            }
            return MDelement;
        }

        /// <summary>
        /// This function handles the pop up Browser Tab or window
        /// </summary>
        /// <param name="Tab"> is the first or last</param>
        public void switchTab(string TabNo)
        {
              if (TabNo.ToLower().Equals("first"))
               {
                  MDdriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(20);
                  MDdriver.SwitchTo().Window(MDdriver.WindowHandles.First());
               }
               else if (TabNo.ToLower().Equals("last"))
               {
                  MDdriver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(20);
                  MDdriver.SwitchTo().Window(MDdriver.WindowHandles.Last());
               }
               else if (TabNo.ToLower() != "first" || TabNo.ToLower() != "last")
               {
                  Assert.Fail("Failed in swithcing the Tab/Window with provided Window Name " + TabNo);
               }
        }
    }
}
