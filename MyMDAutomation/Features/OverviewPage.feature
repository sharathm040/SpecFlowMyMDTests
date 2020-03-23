@smokeTest @MyMD
Feature: Overview page
	As a user
	I want to be logged in to the App
	So that I can verify all the elements on the dashboard

Background: Initially I will be logging in to the MyMD
		Given I login to MyMD app with provided Credentials
		| Key      | Value            |
		| Username | mdpic99397@md.ca |
		| Password | password99       |

		Then login should be successful



#-----------------------------------------------------------------------------------
Scenario: MDM & PIC overview page 
		As a user I want to click on my LOB's
		So that I can view my accounts

		When I click "MD Management Limited" from list of "lob_xpath" elements

			And I verify the element "accList_classname" is present

			And I click "MD Private Investment Counsel" from list of "lob_xpath" elements

		Then I verify the element "accList_classname" is present
		        
			And I logout from MyMD app


#@source:Data.xlsx:DashboardTest
#Examples: 
#| Username         | Password   |
#| mdpic99397@md.ca | password99 |


#-----------------------------------------------------------------------------------
Scenario: ExoDirect & MD Direct promo  
		As a user I want to click on my LOB's
		So that I can view Promo flyouts for ExO & DT

		When I click "MD ExO Direct" from list of "lob_xpath" elements

			And I verify the element "promolearn_classname" is present

			And I click "MD Direct Trade" from list of "lob_xpath" elements

		Then I verify the element "promolearn_classname" is present
		        
			And I logout from MyMD app


#-----------------------------------------------------------------------------------
Scenario: Graphs & Charts Visible 
		As a user I want to click on my LOB's
		So that I can view my accounts

		When login should be successful

			And I verify the element "marketchart_classname" is present

			And I verify the element "netwchart_classname" is present

			And I verify that "3" elements are present in "charts_classname"
		        
		Then I logout from MyMD app


#-----------------------------------------------------------------------------------
Scenario: View All Accounts Button
		As a user I want to click on view all accounts
		So that I can view my all accounts in one page

		When I click "VIEW ALL ACCOUNTS" from list of "matbutton_xpath" elements

			And I verify the text present in "pagetitle_classname" as "All Accounts"
		        
		Then I logout from MyMD app


#-----------------------------------------------------------------------------------
Scenario: Peer Comparsion View/Update Details
		As a user I want to click View/Update Details 
		So that I can view full Peer Comparision Details

		When I click "VIEW/UPDATE DETAILS" from list of "matbutton_xpath" elements

			And I verify the text present in "pagetitle_classname" as "Peer Comparison"
		        
		Then I logout from MyMD app

@smokeTest
#-----------------------------------------------------------------------------------
Scenario: Networth, Documents Modal on Overview page
		As a user when I login  
		I want to view My Net Worth & Documents Modal on my overview page
		
		Then I verify the element "doc_linktext" is present

			And I verify the element "netw_id" is present

@smokeTest
#-----------------------------------------------------------------------------------
Scenario: Quotes, PWC section on Overview page
		As a user when I login  
		I want to view My PWC & Quotes section on my overview page
		
		Then I verify the element "quotesr_id" is present

			And I verify the element "pwc_id" is present