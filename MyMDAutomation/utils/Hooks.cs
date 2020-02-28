using AventStack.ExtentReports;
using AventStack.ExtentReports.Gherkin.Model;
using AventStack.ExtentReports.Reporter;
using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using TechTalk.SpecFlow;

namespace MyMDAutomation.utils
{
    [Binding]
    public class Hooks
    {
        MyMDconnector MD;

        public Hooks(MyMDconnector MD)
        {
            this.MD = MD;
        }

        //Global Variable for Extend report
        private static ExtentTest featureName;
        private static ExtentTest scenarioName;
        //private static AventStack.ExtentReports.ExtentReports extentReport;
        private static ExtentReports extentReport;

        [BeforeTestRun]
        public static void InitializeReport()
        {
            testReport();
        }


        //Generate the Test Report
        public static void testReport()
        {
            string rName = "Report_" + DateTime.Now.ToString().Replace("/", "_").Replace(":", "_").Replace(" ", "_") + ".html";
            string filePath = Path.GetDirectoryName(System.AppDomain.CurrentDomain.BaseDirectory);
            filePath = Directory.GetParent(Directory.GetParent(filePath).FullName).FullName;
            var htmlReporter = new ExtentV3HtmlReporter(filePath + "\\Reports\\" + rName);
            /*var htmlReporter = new ExtentHtmlReporter(filePath + "\\Reports\\" + rName);
            htmlReporter.Configuration().Theme = AventStack.ExtentReports.Reporter.Configuration.Theme.Dark;
            extentReport = new ExtentReports();*/
            extentReport = new AventStack.ExtentReports.ExtentReports();
            extentReport.AttachReporter(htmlReporter);
            extentReport.AddSystemInfo("OS", "Windows10");
            extentReport.AddSystemInfo("Environment", "15's");
            extentReport.AddSystemInfo("Browser Mode", "Desktop");
        }


        //Takes the Screenshot and includes it in the report
        public void screenShot()
        {
            //ScreenShot name
            string ssName = "SS_" + DateTime.Now.ToString().Replace("/", "_").Replace(":", "_").Replace(" ", "_") + ".png";
            // string ssPath = @"C:\Users\mannes\Desktop\MD-Redesign\Specflow\MyMDAutomation\MyMDAutomation\MyMDAutomation\TestReports\ExtentReport.png";
            ITakesScreenshot ssDriver = MD.MDdriver as ITakesScreenshot;
            Screenshot ss = ssDriver.GetScreenshot();
            string filePath = Path.GetDirectoryName(System.AppDomain.CurrentDomain.BaseDirectory);
            filePath = Directory.GetParent(Directory.GetParent(filePath).FullName).FullName;
            string sspath = filePath + "\\ScreenShots\\" + ssName;
            ss.SaveAsFile(sspath, ScreenshotImageFormat.Png);
            string x = ScenarioContext.Current.ScenarioExecutionStatus.ToString();
            if (x.Equals("TestError"))
                scenarioName.CreateNode<Scenario>(ScenarioContext.Current.ScenarioExecutionStatus.ToString()).Log(Status.Fail, "Screenshot - ", MediaEntityBuilder.CreateScreenCaptureFromPath(sspath).Build());
            else if (x.Equals("OK"))
                scenarioName.CreateNode<Scenario>(ScenarioContext.Current.ScenarioExecutionStatus.ToString()).Log(Status.Pass, "Screenshot - ", MediaEntityBuilder.CreateScreenCaptureFromPath(sspath).Build());
        }

        [AfterTestRun]
        public static void TearDownReport()
        {
            //Flush report once test completes
            extentReport.Flush();
        }


        [BeforeFeature]
        public static void BeforeFeature()
        {
            //Create dynamic feature name
            featureName = extentReport.CreateTest<Feature>(FeatureContext.Current.FeatureInfo.Title);
        }


        [AfterStep]
        public void InsertReportingSteps()
        {

            var stepType = ScenarioStepContext.Current.StepInfo.StepDefinitionType.ToString();
            if (ScenarioContext.Current.TestError == null)
            {
                if (stepType == "Given")
                    scenarioName.CreateNode<Given>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Pass, "Pass");
                else if (stepType == "When")
                    scenarioName.CreateNode<When>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Pass, "Pass");
                else if (stepType == "Then")
                    scenarioName.CreateNode<Then>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Pass, "Pass");
                else if (stepType == "And")
                    scenarioName.CreateNode<And>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Pass, "Pass");
            }
            else if (ScenarioContext.Current.TestError != null)
            {
                if (stepType == "Given")
                    scenarioName.CreateNode<Given>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Fail, "Fail").Fail(ScenarioContext.Current.TestError.Message);
                else if (stepType == "When")
                    scenarioName.CreateNode<When>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Fail, "Fail").Fail(ScenarioContext.Current.TestError.Message);
                else if (stepType == "Then")
                    scenarioName.CreateNode<Then>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Fail, "Fail").Fail(ScenarioContext.Current.TestError.Message);
                else if (stepType == "And")
                    scenarioName.CreateNode<And>(ScenarioStepContext.Current.StepInfo.Text).Log(Status.Fail, "Fail").Fail(ScenarioContext.Current.TestError.Message);
            }
        }


        [BeforeScenario]
        public void beforeScenario()
        {
            scenarioName = featureName.CreateNode<Scenario>(ScenarioContext.Current.ScenarioInfo.Title);
        }


        [AfterScenario]
        public void closeBrowser()
        {
            string bType = Environment.GetEnvironmentVariable("browser", EnvironmentVariableTarget.Process);
            if (bType != "headless")
            {
                screenShot();
            }
            if (MD.MDdriver != null)
                MD.MDdriver.Close();
                MD.MDdriver.Quit();
        }
    }
}
