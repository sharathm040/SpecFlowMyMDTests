@MyMD
Feature: MyMD Login
	In order to verify MyMD application
	As a user
	I want to login to the app

@Login
#-----------------------------------------------------------------------------------
Scenario Outline: Log into MyMD
	Given I navigate to "<url>" on "<Browser>"

	When I click on "SignInheader_classname"

		And I enter "username_name" as "<Username>"

		And I enter "password_name" as "<Password>"

		And I click on "signinbtn_classname" 

		And I check if pvq's are available "remindlater_xpath"

		And I wait for either "LastloginMymd_xpath" or "Lastlogin_id" element to be visible

	Then login should be successful

		And I logout from MyMD app

#@source:Data.xlsx:LoginTest
Examples: 
| Browser | url    | Username         | Password   |
| bType   | urlKey | mdpic99397@md.ca | password99 |



