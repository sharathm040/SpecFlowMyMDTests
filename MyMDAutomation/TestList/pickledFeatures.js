jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "MD1FC.feature",
      "Feature": {
        "Name": "MD1 FC",
        "Description": "As a FC\r\nI want to be logged in to MD1\r\nSo that I can send messages to clients",
        "FeatureElements": [
          {
            "Name": "MD1 FC Search By SHID",
            "Slug": "md1-fc-search-by-shid",
            "Description": "As a FC when I enter the SHID and click Find\r\nI should be navigated to Client Profile Page",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter \"md1shid_id\" as \"100784\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1findbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I try for element \"md19871_id\" and will click if available",
                "StepComments": [
                  {
                    "Text": "#And I wait for either \"md19871_id\" or \"md1mdpc_id\" element to be visible"
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1clientp_id\" or \"md1quicklinks_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1clientp_id\" as \"Client\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 FC Search By USERNAME",
            "Slug": "md1-fc-search-by-username",
            "Description": "As a FC user when I enter the UserName and click Find\r\nI should be navigated to UserManagement Page but shouldn't have the access",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter \"md1unfind_id\" as \"istusermdmpic\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1findbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1alert_classname\" or \"md1navmenulist_xpath\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1alert_xpath\" as \"You are not authorized to access this page\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 FC find in Progress",
            "Slug": "md1-fc-find-in-progress",
            "Description": "As a FC user when I click 'Work to do' \r\nI should be navigated to work in progress page",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"md1worktd_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1todo_id\" or \"md1inprogress_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on \"md1todo_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1todo_id\" or \"md1inprogress_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1pagetitle_classname\" as \"Find to-do items\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1inprogress_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1todo_id\" or \"md1inprogress_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1pagetitle_classname\" as \"Find in progress documents\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 FC access Messaging",
            "Slug": "md1-fc-access-messaging",
            "Description": "As a FC user when I click on 'Messages' \r\nI should be able access Messages",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"md1msg_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1securemsg_id\" or \"md1msglist_xpath\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"Compose\" from list of \"md1msglist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I wait for either \"md1msgto_id\" or \"md1msglist_xpath\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"md1msglist_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 FC_MSG_Search by SHID",
            "Slug": "md1-fcmsgsearch-by-shid",
            "Description": "As a FC user when I click on 'Messages' \r\nI should be able search client with SHID",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"md1msg_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1securemsg_id\" or \"md1msglist_xpath\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"Compose\" from list of \"md1msglist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I wait for either \"md1msgto_id\" or \"md1msglist_xpath\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1msgto_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1msgshid_id\" or \"md1msglastname_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I enter \"md1msgshid_id\" as \"100784\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click VALUE \"Find\" from list of \"md1buttonsfw_classname\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1msgshid_id\" or \"md1msglastname_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"md1msgnamefound_id\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 FC_MSG_Search by Wrong SHID",
            "Slug": "md1-fcmsgsearch-by-wrong-shid",
            "Description": "As a FC user when I click on 'Messages' \r\nI should be able to find any client with wrong SHID",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"md1msg_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1securemsg_id\" or \"md1msglist_xpath\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"Compose\" from list of \"md1msglist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I wait for either \"md1msgto_id\" or \"md1msglist_xpath\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1msgto_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1msgshid_id\" or \"md1msglastname_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I enter \"md1msgshid_id\" as \"5\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click VALUE \"Find\" from list of \"md1buttonsfw_classname\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1msgshid_id\" or \"md1msglastname_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1noresult_id\" as \"No more clients found.\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Background": {
          "Name": "Initially I will be logging in to the MD1",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I navigate to MD1 app with provided environment",
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "Then",
              "NativeKeyword": "Then ",
              "Name": "I login to MD1 app with provided Credentials",
              "TableArgument": {
                "HeaderRow": [
                  "Username",
                  "Password"
                ],
                "DataRows": [
                  [
                    "daymic",
                    "password99"
                  ]
                ]
              },
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false,
            "WasProvided": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@smokeTest",
          "@MD1"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "MD1TC.feature",
      "Feature": {
        "Name": "MD1 TC",
        "Description": "As a TC\r\nI want to be logged in to MD1\r\nSo that I can search for clients",
        "FeatureElements": [
          {
            "Name": "MD1 TC Search By SHID",
            "Slug": "md1-tc-search-by-shid",
            "Description": "As a TC user when I enter the SHID and click Find\r\nI should be navigated to Client Profile Page",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter \"md1shid_id\" as \"100784\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1findbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I try for element \"md19871_id\" and will click if available",
                "StepComments": [
                  {
                    "Text": "#And I wait for either \"md19871_id\" or \"md1mdpc_id\" element to be visible"
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1clientp_id\" or \"md1quicklinks_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1clientp_id\" as \"Client\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 TC Search By USERNAME",
            "Slug": "md1-tc-search-by-username",
            "Description": "As a TC user when I enter the UserName and click Find\r\nI should be navigated to UserManagement Page",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I enter \"md1unfind_id\" as \"istusermdmpic\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1findbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1lev2_id\" or \"md1umtitle_classname\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1umtitle_classname\" as \"User Management\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 TC find online Trades",
            "Slug": "md1-tc-find-online-trades",
            "Description": "As a TC user when I click 'Work to do' \r\nI should be navigated to work in progress page\r\nSo that I can click on 'Online Trades'",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"md1worktd_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1todo_id\" or \"md1inprogress_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on \"md1onlinetrades_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1orderTitle_id\" or \"md1orderNo_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1orderNo_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I try for element \"md1popupX_id\" and will click if available",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"md1pagetitle_classname\" is present",
                "StepComments": [
                  {
                    "Text": "#Then I wait for either \"md1TradeButtons_xpath\" or \"md1TradeButtons_xpath\" element to be visible"
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click VALUE \"Exit trade\" from list of \"md1buttonsvw_classname\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1orderTitle_id\" as \"Order #\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 TC Reject any online Trade",
            "Slug": "md1-tc-reject-any-online-trade",
            "Description": "As a TC user when I navigate to 'Online Trades' \r\nI should be able to approve the pending Trade",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"md1worktd_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1todo_id\" or \"md1inprogress_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I click on \"md1onlinetrades_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1orderTitle_id\" or \"md1orderNo_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"md1orderNo_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I try for element \"md1popupX_id\" and will click if available",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"md1pagetitle_classname\" is present",
                "StepComments": [
                  {
                    "Text": "#Then I wait for either \"md1buttonsvw_classname\" or \"md1buttonsvw_classname\" element to be visible"
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click VALUE \"Reject\" from list of \"md1buttonsvw_classname\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click VALUE \"Yes\" from list of \"md1buttonsfw_classname\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"md1orderTitle_id\" as \"Order #\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "MD1 TC Cannot access Messages",
            "Slug": "md1-tc-cannot-access-messages",
            "Description": "As a TC user when I click on 'Messages' \r\nI should not have access Messages",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"md1msg_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"md1securemsg_id\" or \"md1emailnotsync_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"md1emailnotsync_id\" is present",
                "StepComments": [
                  {
                    "Text": "#Then I verify the text present in \"md1emailnotsync_id\" as \"User account email address not synchronized with RPM Agent email address.  Contact Helpdesk to rectify.\""
                  }
                ],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Background": {
          "Name": "Initially I will be logging in to the MD1",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I navigate to MD1 app with provided environment",
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "Then",
              "NativeKeyword": "Then ",
              "Name": "I login to MD1 app with provided Credentials",
              "TableArgument": {
                "HeaderRow": [
                  "Username",
                  "Password"
                ],
                "DataRows": [
                  [
                    "ittci",
                    "password99"
                  ]
                ]
              },
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false,
            "WasProvided": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@smokeTest",
          "@MD1"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "MyMDlinks.feature",
      "Feature": {
        "Name": "MyMD links",
        "Description": "As a user\r\nI want to be logged in to the MyMD App\r\nSo that I can verify all the links present on the MyMD app works",
        "FeatureElements": [
          {
            "Name": "MyMD Menu Links overview page",
            "Slug": "mymd-menu-links-overview-page",
            "Description": "As a user I want to click on MyMD button from the menu \r\nSo that I can view all the links and verify them",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"mymdbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"ALL ACCOUNTS\" from list of \"mymdlist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"pagetitle_classname\" as \"All Accounts\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"mymdbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"DOCUMENTS\" from list of \"mymdlist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"statement_id\" as \"Statements and Documents\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"mymdbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"GOALS\" from list of \"mymdlist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"pagetitle_classname\" as \"My MD Financial Plan\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"mymdbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"RESEARCH\" from list of \"mymdlist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"brdcrumb3_id\" as \"Quotes and Research – Search equities / funds\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"mymdbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"OVERVIEW\" from list of \"mymdlist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"pagetitle_classname\" as \"Overview\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"mymdbtn_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"RETURN TO MDM.CA\" from list of \"mymdlist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"mymdp_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"pagetitle_classname\" as \"Overview\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [
              "@smokeTest"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Preferences Menu Links overview page",
            "Slug": "preferences-menu-links-overview-page",
            "Description": "As a user I want to click on Initials from the menu \r\nSo that I can view all the preferences links and verify them",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"profile_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"MY TEAM\" from list of \"preflist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"profile_id\"",
                "StepComments": [
                  {
                    "Text": "#Then I verify the text present in \"pagetitle_classname\" as \"All Accounts\""
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"MY PROFILE\" from list of \"preflist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"ProfSet_id\" as \"Profile and Settings\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"profile_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"SECURITY SETTINGS\" from list of \"preflist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"ProfSet_id\" as \"Profile and Settings\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"profile_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"NOTIFICATION PREFERENCES\" from list of \"preflist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"ProfSet_id\" as \"Profile and Settings\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"profile_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"SECURE MESSAGING\" from list of \"preflist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"brdcrumb3_id\" as \"Message Centre\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"profile_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"HELP & SUPPORT\" from list of \"preflist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"mymdp_id\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [
              "@link"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "FC Menu Links",
            "Slug": "fc-menu-links",
            "Description": "As a user I want to click on FC from the menu \r\nSo that I can view all the FC related links and verify them",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"advisor_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"Team\" from list of \"advislist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"advisor_id\"",
                "StepComments": [
                  {
                    "Text": "#Then I verify the text present in \"pagetitle_classname\" as \"All Accounts\""
                  }
                ],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"Send Message\" from list of \"advislist_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"brdcrumb3_id\" as \"Message Centre\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [
              "@smokeTest"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Activity Centre Menu Links",
            "Slug": "activity-centre-menu-links",
            "Description": "As a user I want to click on Activity Centre from the menu \r\nSo that I can view all my AC notifications and verify them",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"activityc_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"acsm_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"brdcrumb3_id\" as \"Message Centre\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"activityc_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"acmc_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"brdcrumb3_id\" as \"Message Centre\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@smokeTest"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Background": {
          "Name": "Initially I will be logging in to the MyMD",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I login to MyMD app with provided Credentials",
              "TableArgument": {
                "HeaderRow": [
                  "Key",
                  "Value"
                ],
                "DataRows": [
                  [
                    "Username",
                    "mdpic99397@md.ca"
                  ],
                  [
                    "Password",
                    "password99"
                  ]
                ]
              },
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "Then",
              "NativeKeyword": "Then ",
              "Name": "login should be successful",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false,
            "WasProvided": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@MyMD"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "MyMDlogin.feature",
      "Feature": {
        "Name": "MyMD Login",
        "Description": "In order to verify MyMD application\r\nAs a user\r\nI want to login to the app",
        "FeatureElements": [
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "Browser",
                    "url",
                    "Username",
                    "Password"
                  ],
                  "DataRows": [
                    [
                      "bType",
                      "urlKey",
                      "mdpic99397@md.ca",
                      "password99",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Log into MyMD",
            "Slug": "log-into-mymd",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I navigate to \"<url>\" on \"<Browser>\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"SignInheader_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter \"username_name\" as \"<Username>\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter \"password_name\" as \"<Password>\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"signinbtn_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I check if pvq's are available \"remindlater_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I wait for either \"LastloginMymd_xpath\" or \"Lastlogin_id\" element to be visible",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "login should be successful",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I logout from MyMD app",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#@source:Data.xlsx:LoginTest"
                  }
                ]
              }
            ],
            "Tags": [
              "@Login"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@MyMD"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "OverviewPage.feature",
      "Feature": {
        "Name": "Overview page",
        "Description": "As a user\r\nI want to be logged in to the App\r\nSo that I can verify all the elements on the dashboard",
        "FeatureElements": [
          {
            "Name": "MDM & PIC overview page",
            "Slug": "mdm-pic-overview-page",
            "Description": "As a user I want to click on my LOB's\r\nSo that I can view my accounts",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click \"MD Management Limited\" from list of \"lob_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"accList_classname\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"MD Private Investment Counsel\" from list of \"lob_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"accList_classname\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I logout from MyMD app",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#@source:Data.xlsx:DashboardTest"
                  },
                  {
                    "Text": "#Examples:"
                  },
                  {
                    "Text": "#| Username         | Password   |"
                  },
                  {
                    "Text": "#| mdpic99397@md.ca | password99 |"
                  },
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "ExoDirect & MD Direct promo",
            "Slug": "exodirect-md-direct-promo",
            "Description": "As a user I want to click on my LOB's\r\nSo that I can view Promo flyouts for ExO & DT",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click \"MD ExO Direct\" from list of \"lob_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"promolearn_classname\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click \"MD Direct Trade\" from list of \"lob_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"promolearn_classname\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I logout from MyMD app",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Graphs & Charts Visible",
            "Slug": "graphs-charts-visible",
            "Description": "As a user I want to click on my LOB's\r\nSo that I can view my accounts",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "login should be successful",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"marketchart_classname\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"netwchart_classname\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify that \"3\" elements are present in \"charts_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I logout from MyMD app",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "View All Accounts Button",
            "Slug": "view-all-accounts-button",
            "Description": "As a user I want to click on view all accounts\r\nSo that I can view my all accounts in one page",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click \"VIEW ALL ACCOUNTS\" from list of \"matbutton_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the text present in \"pagetitle_classname\" as \"All Accounts\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I logout from MyMD app",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Peer Comparsion View/Update Details",
            "Slug": "peer-comparsion-viewupdate-details",
            "Description": "As a user I want to click View/Update Details \r\nSo that I can view full Peer Comparision Details",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click \"VIEW/UPDATE DETAILS\" from list of \"matbutton_xpath\" elements",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the text present in \"pagetitle_classname\" as \"Peer Comparison\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I logout from MyMD app",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Networth, Documents Modal on Overview page",
            "Slug": "networth-documents-modal-on-overview-page",
            "Description": "As a user when I login  \r\nI want to view My Net Worth & Documents Modal on my overview page",
            "Steps": [
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"doc_linktext\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"netw_id\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [
              "@smokeTest"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Quotes, PWC section on Overview page",
            "Slug": "quotes-pwc-section-on-overview-page",
            "Description": "As a user when I login  \r\nI want to view My PWC & Quotes section on my overview page",
            "Steps": [
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"quotesr_id\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"pwc_id\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@smokeTest"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Background": {
          "Name": "Initially I will be logging in to the MyMD",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I login to MyMD app with provided Credentials",
              "TableArgument": {
                "HeaderRow": [
                  "Key",
                  "Value"
                ],
                "DataRows": [
                  [
                    "Username",
                    "mdpic99397@md.ca"
                  ],
                  [
                    "Password",
                    "password99"
                  ]
                ]
              },
              "StepComments": [],
              "AfterLastStepComments": []
            },
            {
              "Keyword": "Then",
              "NativeKeyword": "Then ",
              "Name": "login should be successful",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false,
            "WasProvided": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@smokeTest",
          "@MyMD"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    },
    {
      "RelativeFolder": "SSO.feature",
      "Feature": {
        "Name": "SSO page",
        "Description": "As a user\r\nI want to signUp or retrive my account\r\nSo that I can login to MyMD app",
        "FeatureElements": [
          {
            "Name": "L1 SignUp positive",
            "Slug": "l1-signup-positive",
            "Description": "As a user I want to enter all correct data in all the provided field\r\nSo that I can successfully regesiter as L1 user",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"signup_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter random text in \"fName_id\" as \"Automation\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter random text in \"lName_id\" as \"automation\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter random email \"email_id\" as \"email\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter \"password_id\" as \"password99\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter \"cpassword_id\" as \"password99\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"tc_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"success_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [
              "@SSO",
              "SignUp"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "L1 SignUp negative",
            "Slug": "l1-signup-negative",
            "Description": "As a user when I click submit button with no data\r\nI should be promted with all error messages",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"signup_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify that \"6\" elements are present in \"error_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "L2 SignUp negative",
            "Slug": "l2-signup-negative",
            "Description": "As a user when I click submit button for L2 signup with no data\r\nI should be promted with all error messages with Ac.No & D.O.B",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"signup_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"yes_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify that \"8\" elements are present in \"error_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "L3 SignUp negative",
            "Slug": "l3-signup-negative",
            "Description": "As a user when I click submit button for L3 signup with no data\r\nI should be promted with all error messages with SIN",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"signup_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"yes_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"onlineAccess_id\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify that \"9\" elements are present in \"error_xpath\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Terms & Conditions",
            "Slug": "terms-conditions",
            "Description": "As a user when I click T&C link\r\nI should be navigated to T&C page",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"signup_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"tc_linktext\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I switch to \"last\" Tab or Window",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"head_classname\" as \"MD Online Access Terms and Conditions\"",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Forgot Username random data",
            "Slug": "forgot-username-random-data",
            "Description": "As a user when I click Forgot Username\r\nI should be able to enter my email\r\nSo that I don't receive an email",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"forgotUser_linktext\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter random text in \"fuemail_id\" as \"Automation\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"formError_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter random email \"fuemail_id\" as \"email\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"success_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Forgot Username",
            "Slug": "forgot-username",
            "Description": "As a user when I click Forgot Username\r\nI should be able to enter my email\r\nSo that I receive an email with my Username",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"forgotUser_linktext\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter \"fuemail_id\" as \"dontchange@cma.ca\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"success_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Forgot Password random data",
            "Slug": "forgot-password-random-data",
            "Description": "As a user when I click Forgot Password\r\nI should be able to enter my Username\r\nSo that I don't receive an email",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"forgotPass_linktext\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I verify the element \"formError_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter random text in \"fpusername_id\" as \"Automation\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"success_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Forgot Password",
            "Slug": "forgot-password",
            "Description": "As a user when I click Forgot Password\r\nI should be able to enter my Username\r\nSo that I receive an email with instructions to reset",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"forgotPass_linktext\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I enter \"fpusername_id\" as \"istusermdmpic\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"submit_classname\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the element \"success_xpath\" is present",
                "StepComments": [],
                "AfterLastStepComments": [
                  {
                    "Text": "#-----------------------------------------------------------------------------------"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          },
          {
            "Name": "Learn More",
            "Slug": "learn-more",
            "Description": "As a user when I click Learn More\r\nI should be navigated to online security\r\nSo that I can view Online security page",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I click on \"learnmore1_linktext\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I switch to \"last\" Tab or Window",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"head_classname\" as \"Online Security\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I switch to \"first\" Tab or Window",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I click on \"learnmore2_linktext\"",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "I switch to \"last\" Tab or Window",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I verify the text present in \"head_classname\" as \"Online Security\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": false
            }
          }
        ],
        "Background": {
          "Name": "Initially I will be navigating to SignIn page",
          "Description": "",
          "Steps": [
            {
              "Keyword": "Given",
              "NativeKeyword": "Given ",
              "Name": "I navigate to \"urlKey\" on \"bType\"",
              "StepComments": [],
              "AfterLastStepComments": []
            }
          ],
          "Tags": [],
          "Result": {
            "WasExecuted": false,
            "WasSuccessful": false,
            "WasProvided": false
          }
        },
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": false
        },
        "Tags": [
          "@smokeTest",
          "@MyMD"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": false
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@smokeTest",
        "Total": 31,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 31
      },
      {
        "Tag": "@MD1",
        "Total": 11,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 11
      },
      {
        "Tag": "@MyMD",
        "Total": 22,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 22
      },
      {
        "Tag": "@link",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@Login",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@SSO",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "SignUp",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "Folders": [
      {
        "Folder": "MD1FC.feature",
        "Total": 6,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 6
      },
      {
        "Folder": "MD1TC.feature",
        "Total": 5,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 5
      },
      {
        "Folder": "MyMDlinks.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "MyMDlogin.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "OverviewPage.feature",
        "Total": 7,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 7
      },
      {
        "Folder": "SSO.feature",
        "Total": 10,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 10
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "MD1FC.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "MD1TC.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "MyMDlinks.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "MyMDlogin.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "OverviewPage.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "SSO.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 33,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 33
    },
    "Features": {
      "Total": 6,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 6
    }
  },
  "Configuration": {
    "SutName": "MyMD & MD1 Test Cases",
    "GeneratedOn": "23 March 2020 13:06:37"
  }
});