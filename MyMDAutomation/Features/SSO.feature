@smokeTest @MyMD
Feature: SSO page
	As a user
	I want to signUp or retrive my account
	So that I can login to MyMD app

Background: Initially I will be navigating to SignIn page
	Given I navigate to "urlKey" on "bType"



@SSO SignUp
#-----------------------------------------------------------------------------------
Scenario: L1 SignUp positive 
		As a user I want to enter all correct data in all the provided field
		So that I can successfully regesiter as L1 user

		When I click on "signup_classname"

			And I enter random text in "fName_id" as "Automation"

			And I enter random text in "lName_id" as "automation"

			And I enter random email "email_id" as "email"

			And I enter "password_id" as "password99"

			And I enter "cpassword_id" as "password99"

			And I click on "tc_id" 

			And I click on "submit_classname"

		Then I verify the element "success_xpath" is present


#-----------------------------------------------------------------------------------
Scenario: L1 SignUp negative 
		As a user when I click submit button with no data
		I should be promted with all error messages

		When I click on "signup_classname"

			And I click on "submit_classname"

		Then I verify that "6" elements are present in "error_xpath"


#-----------------------------------------------------------------------------------
Scenario: L2 SignUp negative 
		As a user when I click submit button for L2 signup with no data
		I should be promted with all error messages with Ac.No & D.O.B

		When I click on "signup_classname"

			And I click on "yes_xpath" 

			And I click on "submit_classname"

		Then I verify that "8" elements are present in "error_xpath"


#-----------------------------------------------------------------------------------
Scenario: L3 SignUp negative 
		As a user when I click submit button for L3 signup with no data
		I should be promted with all error messages with SIN

		When I click on "signup_classname"

			And I click on "yes_xpath"

			And I click on "onlineAccess_id"

			And I click on "submit_classname"

		Then I verify that "9" elements are present in "error_xpath"


#-----------------------------------------------------------------------------------
Scenario: Terms & Conditions
		As a user when I click T&C link
		I should be navigated to T&C page

		When I click on "signup_classname"

			And I click on "tc_linktext"

			And I switch to "last" Tab or Window

		Then I verify the text present in "head_classname" as "MD Online Access Terms and Conditions"


#-----------------------------------------------------------------------------------
Scenario: Forgot Username random data
		As a user when I click Forgot Username
		I should be able to enter my email
		So that I don't receive an email

		When I click on "forgotUser_linktext"

			And I enter random text in "fuemail_id" as "Automation"

			And I click on "submit_classname"

			Then I verify the element "formError_xpath" is present

			And I enter random email "fuemail_id" as "email"

			And I click on "submit_classname"

		Then I verify the element "success_xpath" is present


#-----------------------------------------------------------------------------------
Scenario: Forgot Username
		As a user when I click Forgot Username
		I should be able to enter my email
		So that I receive an email with my Username

		When I click on "forgotUser_linktext"

			And I enter "fuemail_id" as "dontchange@cma.ca"

			And I click on "submit_classname"

		Then I verify the element "success_xpath" is present


#-----------------------------------------------------------------------------------
Scenario: Forgot Password random data
		As a user when I click Forgot Password
		I should be able to enter my Username
		So that I don't receive an email

		When I click on "forgotPass_linktext"

			And I click on "submit_classname"

			And I verify the element "formError_xpath" is present

			And I enter random text in "fpusername_id" as "Automation"

			And I click on "submit_classname"

		Then I verify the element "success_xpath" is present


#-----------------------------------------------------------------------------------
Scenario: Forgot Password
		As a user when I click Forgot Password
		I should be able to enter my Username
		So that I receive an email with instructions to reset

		When I click on "forgotPass_linktext"

			And I enter "fpusername_id" as "istusermdmpic"

			And I click on "submit_classname"

		Then I verify the element "success_xpath" is present


#-----------------------------------------------------------------------------------
Scenario: Learn More
		As a user when I click Learn More
		I should be navigated to online security
		So that I can view Online security page

		When I click on "learnmore1_linktext"

			And I switch to "last" Tab or Window

		Then I verify the text present in "head_classname" as "Online Security"

			And I switch to "first" Tab or Window

			And I click on "learnmore2_linktext"

			And I switch to "last" Tab or Window

		Then I verify the text present in "head_classname" as "Online Security"

