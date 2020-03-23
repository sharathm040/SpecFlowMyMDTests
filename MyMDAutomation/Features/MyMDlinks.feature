@MyMD
Feature: MyMD links
	As a user
	I want to be logged in to the MyMD App
	So that I can verify all the links present on the MyMD app works

Background: Initially I will be logging in to the MyMD
		Given I login to MyMD app with provided Credentials
		| Key      | Value            |
		| Username | mdpic99397@md.ca |
		| Password | password99       |

		Then login should be successful

@smokeTest
#-----------------------------------------------------------------------------------
Scenario: MyMD Menu Links overview page 
		As a user I want to click on MyMD button from the menu 
		So that I can view all the links and verify them

		When I click on "mymdbtn_id"

			And I click "ALL ACCOUNTS" from list of "mymdlist_xpath" elements

		Then I verify the text present in "pagetitle_classname" as "All Accounts"

		When I click on "mymdbtn_id"

			And I click "DOCUMENTS" from list of "mymdlist_xpath" elements

		Then I verify the text present in "statement_id" as "Statements and Documents"

		When I click on "mymdbtn_id"

			And I click "GOALS" from list of "mymdlist_xpath" elements

		Then I verify the text present in "pagetitle_classname" as "My MD Financial Plan"

		When I click on "mymdbtn_id"

			And I click "RESEARCH" from list of "mymdlist_xpath" elements

		Then I verify the text present in "brdcrumb3_id" as "Quotes and Research – Search equities / funds"

		When I click on "mymdbtn_id"

			And I click "OVERVIEW" from list of "mymdlist_xpath" elements

		Then I verify the text present in "pagetitle_classname" as "Overview"

		When I click on "mymdbtn_id"

			And I click "RETURN TO MDM.CA" from list of "mymdlist_xpath" elements

			And I click on "mymdp_id"

		Then I verify the text present in "pagetitle_classname" as "Overview"


@link
#-----------------------------------------------------------------------------------
Scenario: Preferences Menu Links overview page 
		As a user I want to click on Initials from the menu 
		So that I can view all the preferences links and verify them

		When I click on "profile_id"

			And I click "MY TEAM" from list of "preflist_xpath" elements

		#Then I verify the text present in "pagetitle_classname" as "All Accounts"

		When I click on "profile_id"

			And I click "MY PROFILE" from list of "preflist_xpath" elements

		Then I verify the text present in "ProfSet_id" as "Profile and Settings"

		When I click on "profile_id"

			And I click "SECURITY SETTINGS" from list of "preflist_xpath" elements

		Then I verify the text present in "ProfSet_id" as "Profile and Settings"

		When I click on "profile_id"

			And I click "NOTIFICATION PREFERENCES" from list of "preflist_xpath" elements

		Then I verify the text present in "ProfSet_id" as "Profile and Settings"

		When I click on "profile_id"

			And I click "SECURE MESSAGING" from list of "preflist_xpath" elements

		Then I verify the text present in "brdcrumb3_id" as "Message Centre"

		When I click on "profile_id"

			And I click "HELP & SUPPORT" from list of "preflist_xpath" elements

		Then I verify the element "mymdp_id" is present


@smokeTest
#-----------------------------------------------------------------------------------
Scenario: FC Menu Links 
		As a user I want to click on FC from the menu 
		So that I can view all the FC related links and verify them

		When I click on "advisor_id"

			And I click "Team" from list of "advislist_xpath" elements

		#Then I verify the text present in "pagetitle_classname" as "All Accounts"

		When I click on "advisor_id"

			And I click "Send Message" from list of "advislist_xpath" elements

		Then I verify the text present in "brdcrumb3_id" as "Message Centre"


@smokeTest
#-----------------------------------------------------------------------------------
Scenario: Activity Centre Menu Links 
		As a user I want to click on Activity Centre from the menu 
		So that I can view all my AC notifications and verify them

		When I click on "activityc_xpath"

			And I click on "acsm_id"

		Then I verify the text present in "brdcrumb3_id" as "Message Centre"

		When I click on "activityc_xpath"

			And I click on "acmc_id"

		Then I verify the text present in "brdcrumb3_id" as "Message Centre"



		