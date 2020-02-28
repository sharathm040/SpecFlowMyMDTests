using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTalk.SpecFlow;

namespace MyMDAutomation.StepsDefinition
{
    [Binding]
    public class MyMDappSteps
    {
        MyMDconnector MD;

        public MyMDappSteps(MyMDconnector MD)
        {
            this.MD = MD;
        }

        [Then(@"I logout from MyMD app")]
        [When(@"I logout from MyMD app")]
        public void logoutMD()
        {
            string strUrl = MD.MDdriver.Url.ToLower();
            if (strUrl.Contains("mymd") || strUrl.Contains("externalweb"))
            {
                try
                {
                    MD.click("signout_id"); 
                }
                catch
                {
                    MD.click("signoute_classname");
                }
            }
            else
            {
                MD.click("signoutp_id");
            }
            MD.verifyText("successmsg_xpath", "Thank you for using My MD. You have successfully logged out.");
        }
    }
}
