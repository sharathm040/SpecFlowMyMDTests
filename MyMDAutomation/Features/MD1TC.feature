@smokeTest @MD1
Feature: MD1 TC 
	As a TC
	I want to be logged in to MD1
	So that I can search for clients

Background: Initially I will be logging in to the MD1
		Given I navigate to MD1 app with provided environment

		Then I login to MD1 app with provided Credentials
		| Username | Password   |
		| ittci    | password99 |


#-----------------------------------------------------------------------------------
Scenario: MD1 TC Search By SHID
		As a TC user when I enter the SHID and click Find
		I should be navigated to Client Profile Page

		When I enter "md1shid_id" as "100784"

			And I click on "md1findbtn_id"

			#And I wait for either "md19871_id" or "md1mdpc_id" element to be visible

		Then I try for element "md19871_id" and will click if available

			And I wait for either "md1clientp_id" or "md1quicklinks_id" element to be visible

		Then I verify the text present in "md1clientp_id" as "Client"


#-----------------------------------------------------------------------------------
Scenario: MD1 TC Search By USERNAME
		As a TC user when I enter the UserName and click Find
		I should be navigated to UserManagement Page

		When I enter "md1unfind_id" as "istusermdmpic"

			And I click on "md1findbtn_id"

			And I wait for either "md1lev2_id" or "md1umtitle_classname" element to be visible

		Then I verify the text present in "md1umtitle_classname" as "User Management"


#-----------------------------------------------------------------------------------
Scenario: MD1 TC find online Trades
		As a TC user when I click 'Work to do' 
		I should be navigated to work in progress page
		So that I can click on 'Online Trades'

		When I click on "md1worktd_id"

			And I wait for either "md1todo_id" or "md1inprogress_id" element to be visible

		Then I click on "md1onlinetrades_id"

			And I wait for either "md1orderTitle_id" or "md1orderNo_id" element to be visible

			And I click on "md1orderNo_id"

			And I try for element "md1popupX_id" and will click if available

		#Then I wait for either "md1TradeButtons_xpath" or "md1TradeButtons_xpath" element to be visible

		Then I verify the element "md1pagetitle_classname" is present

			And I click VALUE "Exit trade" from list of "md1buttonsvw_classname" elements

		Then I verify the text present in "md1orderTitle_id" as "Order #"


#-----------------------------------------------------------------------------------
Scenario: MD1 TC Reject any online Trade
		As a TC user when I navigate to 'Online Trades' 
		I should be able to approve the pending Trade

		When I click on "md1worktd_id"

			And I wait for either "md1todo_id" or "md1inprogress_id" element to be visible

		Then I click on "md1onlinetrades_id"

			And I wait for either "md1orderTitle_id" or "md1orderNo_id" element to be visible

			And I click on "md1orderNo_id"

			And I try for element "md1popupX_id" and will click if available

		#Then I wait for either "md1buttonsvw_classname" or "md1buttonsvw_classname" element to be visible
			And I verify the element "md1pagetitle_classname" is present

			And I click VALUE "Reject" from list of "md1buttonsvw_classname" elements

			And I click VALUE "Yes" from list of "md1buttonsfw_classname" elements

		Then I verify the text present in "md1orderTitle_id" as "Order #"


#-----------------------------------------------------------------------------------
Scenario: MD1 TC Cannot access Messages
		As a TC user when I click on 'Messages' 
		I should not have access Messages

		When I click on "md1msg_id"

			And I wait for either "md1securemsg_id" or "md1emailnotsync_id" element to be visible

		#Then I verify the text present in "md1emailnotsync_id" as "User account email address not synchronized with RPM Agent email address.  Contact Helpdesk to rectify."

		And I verify the element "md1emailnotsync_id" is present