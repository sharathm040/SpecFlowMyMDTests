@smokeTest @MD1
Feature: MD1 FC 
	As a FC
	I want to be logged in to MD1
	So that I can send messages to clients

Background: Initially I will be logging in to the MD1
		Given I navigate to MD1 app with provided environment

		Then I login to MD1 app with provided Credentials
		| Username | Password   |
		| daymic   | password99 |


#-----------------------------------------------------------------------------------
Scenario: MD1 FC Search By SHID
		As a FC when I enter the SHID and click Find
		I should be navigated to Client Profile Page

		When I enter "md1shid_id" as "100784"

			And I click on "md1findbtn_id"

			#And I wait for either "md19871_id" or "md1mdpc_id" element to be visible

		Then I try for element "md19871_id" and will click if available

			And I wait for either "md1clientp_id" or "md1quicklinks_id" element to be visible

		Then I verify the text present in "md1clientp_id" as "Client"


#-----------------------------------------------------------------------------------
Scenario: MD1 FC Search By USERNAME
		As a FC user when I enter the UserName and click Find
		I should be navigated to UserManagement Page but shouldn't have the access

		When I enter "md1unfind_id" as "istusermdmpic"

			And I click on "md1findbtn_id"

			And I wait for either "md1alert_classname" or "md1navmenulist_xpath" element to be visible

		Then I verify the text present in "md1alert_xpath" as "You are not authorized to access this page"


#-----------------------------------------------------------------------------------
Scenario: MD1 FC find in Progress
		As a FC user when I click 'Work to do' 
		I should be navigated to work in progress page

		When I click on "md1worktd_id"

			And I wait for either "md1todo_id" or "md1inprogress_id" element to be visible

		Then I click on "md1todo_id"

			And I wait for either "md1todo_id" or "md1inprogress_id" element to be visible

		Then I verify the text present in "md1pagetitle_classname" as "Find to-do items"

			And I click on "md1inprogress_id"

			And I wait for either "md1todo_id" or "md1inprogress_id" element to be visible

		Then I verify the text present in "md1pagetitle_classname" as "Find in progress documents"


#-----------------------------------------------------------------------------------
Scenario: MD1 FC access Messaging
		As a FC user when I click on 'Messages' 
		I should be able access Messages

		When I click on "md1msg_id"

			And I wait for either "md1securemsg_id" or "md1msglist_xpath" element to be visible

			And I click "Compose" from list of "md1msglist_xpath" elements

		Then I wait for either "md1msgto_id" or "md1msglist_xpath" element to be visible

			And I verify the element "md1msglist_xpath" is present


#-----------------------------------------------------------------------------------
Scenario: MD1 FC_MSG_Search by SHID
		As a FC user when I click on 'Messages' 
		I should be able search client with SHID

		When I click on "md1msg_id"

			And I wait for either "md1securemsg_id" or "md1msglist_xpath" element to be visible

			And I click "Compose" from list of "md1msglist_xpath" elements

		Then I wait for either "md1msgto_id" or "md1msglist_xpath" element to be visible

			And I click on "md1msgto_id"

			And I wait for either "md1msgshid_id" or "md1msglastname_id" element to be visible

		Then I enter "md1msgshid_id" as "100784"

			And I click VALUE "Find" from list of "md1buttonsfw_classname" elements

			And I wait for either "md1msgshid_id" or "md1msglastname_id" element to be visible

		Then I verify the element "md1msgnamefound_id" is present


#-----------------------------------------------------------------------------------
Scenario: MD1 FC_MSG_Search by Wrong SHID
		As a FC user when I click on 'Messages' 
		I should be able to find any client with wrong SHID

		When I click on "md1msg_id"

			And I wait for either "md1securemsg_id" or "md1msglist_xpath" element to be visible

			And I click "Compose" from list of "md1msglist_xpath" elements

		Then I wait for either "md1msgto_id" or "md1msglist_xpath" element to be visible

			And I click on "md1msgto_id"

			And I wait for either "md1msgshid_id" or "md1msglastname_id" element to be visible

		Then I enter "md1msgshid_id" as "5"

			And I click VALUE "Find" from list of "md1buttonsfw_classname" elements

			And I wait for either "md1msgshid_id" or "md1msglastname_id" element to be visible

		Then I verify the text present in "md1noresult_id" as "No more clients found."

