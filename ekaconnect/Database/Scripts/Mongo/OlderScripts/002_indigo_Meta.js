db.getCollection('indigo_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('indigo_Meta').remove({"type": "object","name": "order"});//
db.getCollection('indigo_Meta').remove({"type":"policy","name": "oms"});//
db.getCollection('indigo_Meta').remove({"type":"message"});//

db.getCollection('indigo_Meta').insert({
  
   "title" : "Order Management",
    "name" : "oms",
    "tenantID" : "indigo",
    "version" : "1",
    "createdOn" : "Test",
    "createdBy" : "admin",
    "lastModifiedOn" : "Test",
    "lastModifiedBy" : "admin",
    "type" : "app",
    "config" : {
        "header" : {
            "brand" : {
                "src" : "assets/img/brand/eka-login-logo.png",
                "width" : 60,
                "height" : 20,
                "alt" : "Eka"
            },
            "clientLogo" : {
                "src" : "assets/img/brand/indigo-logo.jpg",
                "width" : 60,
                "height" : 20,
                "alt" : "Indigo"
            },
            "sidebarToggler" : true,
            "asideMenuToggler" : false
        },
        "sidebar" : {
            "fixed" : true,
            "display" : false
        },
        "navbar" : [ 
            {
                "title" : true,
                "name" : "Order Management"
            }, 
            {
                "name" : "Order App Home",
                "url" : "/workflow/oms/home",
                "icon" : "icon-speedometer",
                "badge" : {
                    "variant" : "info",
                    "text" : "NEW"
                }
            }, 
            {
                "name" : "List Of Order",
                "url" : "/workflow/oms/_UT_LIST_VIEW_DERIVATIVE_ORDER",
                "icon" : "icon-drop"
            }, 
            {
                "name" : "New Order",
                "url" : "/workflow/oms/_UT_CREATE_DERIVATIVE_ORDER",
                "icon" : "icon-drop"
            }, 
            {
                "divider" : true
            }
        ],
        "aside" : {
            "fixed" : true,
            "display" : false
        }
    }
});//

db.getCollection('indigo_Meta').insert({
  
  "name" : "order",
    "label" : "ORDER MANAGEMENT SYSTEM",
    "type" : "object",
    "version" : "1",
    "tenantID" : "indigo",
    "createdOn" : "Test",
    "createdBy" : "Test",
    "lastModifiedOn" : "Test",
    "lastModifiedBy" : "Test",
    "objectAction" : {
        "CREATE" : "POST",
        "UPDATE" : "PUT",
        "READ" : "GET",
        "LISTVIEW" : "GET",
        "DELETE" : "DELETE",
        "APPROVE" : "PUT",
        "REJECT" : "PUT"
    },
    "versionHistory" : [ 
        {
            "version" : "2",
            "fields" : "[{}]",
            "additionalProperties" : {}
        }
    ],
    "translatableKeys" : [ 
        "account", 
        "broker", 
        "instrumentType", 
        "instrument", 
        "timeInForce", 
        "counterParty", 
        "tradeDate", 
        "promptMonth", 
        "strikePrice", 
        "orderType", 
        "limitPrice", 
        "tradeType", 
        "triggerPrice", 
        "orderQuantity", 
        "expirtyDate", 
        "orderNo", 
        "source", 
        "instrumentDetails", 
        "filledQuantity", 
        "orderStatus", 
        "orderNo"
    ],
    "fields" : {
        "account" : {
            "account" : "Account",
            "labelKey" : "account",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "broker" : {
            "broker" : "Broker",
            "labelKey" : "broker",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "broker"
        },
        "instrumentType" : {
            "instrumentType" : "Instrument Type",
            "labelKey" : "instrumentType",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "instrumentType"
        },
        "instrument" : {
            "instrument" : "Instrument",
            "labelKey" : "instrument",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "instrument"
        },
        "timeInForce" : {
            "timeInForce" : "Time In Force",
            "labelKey" : "timeInForce",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "timeInForce"
        },
        "counterParty" : {
            "counterParty" : "Counter Party",
            "labelKey" : "counterParty",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "counterParty"
        },
        "tradeDate" : {
            "tradeDate" : "Trade Date",
            "labelKey" : "tradeDate",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "tradeId" : {
            "tradeId" : "Trade ID",
            "labelKey" : "tradeId",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "counterParty"
        },
        "promptMonth" : {
            "promptMonth" : "Prompt Month",
            "labelKey" : "promptMonth",
            "type" : "datepicker",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "promptMonth"
        },
        "strikePrice" : {
            "strikePrice" : "Strike Price",
            "labelKey" : "strikePrice",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "orderType" : {
            "orderType" : "Order Type",
            "labelKey" : "orderType",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "orderType"
        },
        "limitPrice" : {
            "limitPrice" : "Limit Price",
            "labelKey" : "limitPrice",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "tradeType" : {
            "tradeType" : "Trade Type",
            "labelKey" : "tradeType",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String",
            "serviceKey" : "tradeType"
        },
        "triggerPrice" : {
            "triggerPrice" : "Trigger Price",
            "labelKey" : "triggerPrice",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "orderQuantity" : {
            "orderQuantity" : "Order Quantity",
            "labelKey" : "orderQuantity",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "number"
        },
        "expirtyDate" : {
            "expirtyDate" : "Expiry Date",
            "labelKey" : "expirtyDate",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "orderNo" : {
            "orderNo" : "Order No",
            "labelKey" : "orderNo",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "source" : {
            "source" : "Source",
            "labelKey" : "source",
            "type" : "dropdown",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "instrumentDetails" : {
            "instrumentDetails" : "Instrument Details",
            "labelKey" : "instrumentDetails",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "filledQuantity" : {
            "filledQuantity" : "Filled Quantity",
            "labelKey" : "filledQuantity",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "orderStatus" : {
            "orderStatus" : "Order Status",
            "labelKey" : "orderStatus",
            "type" : "textbox",
            "isRequired" : "false",
            "dataType" : "String"
        },
        "appName" : {
            "appName" : "Type",
            "labelKey" : "appName",
            "type" : "textbox",
            "dataType" : "String",
            "length" : "20"
        },
        "objectName" : {
            "objectName" : "Type",
            "labelKey" : "objectName",
            "type" : "textbox",
            "dataType" : "String",
            "length" : "10"
        }
    },
    "layout" : {
        "fields" : [ 
            [ 
                "account", 
                "broker", 
                "orderNo", 
                "source", 
                "instrumentType", 
                "tradeDate", 
                "filledQuantity", 
                "instrumentDetails", 
                "orderStatus", 
                "timeInForce", 
                "instrument"
            ], 
            [ 
                "tradeType", 
                "promptMonth", 
                "strikePrice", 
                "triggerPrice", 
                "counterParty", 
                "orderQuantity", 
                "orderType", 
                "limitPrice", 
                "expirtyDate"
            ]
        ]
    },
    "additionalProperties" : {},
    "sys__createdOn" : ISODate("2019-02-07T19:21:17.926Z"),
    "sys__createdBy" : "admin"
});//

db.getCollection('indigo_Meta').insert({
  
  "type" : "message",
    "name" : "en_US",
    "locale" : "en_US",
    "HttpMessageNotReadable" : "MALFORMED JSON REQUEST",
    "TokenValidationException" : "YOUR PROVIDED TOKEN INFORMATION EXPIRED OR NOT EXISTS",
    "TenantException" : "INVALID TENANT OR TENANT NOT FOUND.PLEASE CHECK TENANT INFO",
    "INVALID DATA" : "ENG INVALID",
    "orderNo" : "orderNo",
    "account" : "accout",
    "306" : "invalide tenant name",
    "400" : "data is invalid",
    "501" : "Validation Error Occured",
    "401" : "Access denied!!!",
    "instrumentType" : "InstrumentType",
    "instrument" : "Instrument",
    "broker" : "Broker",
    "tradeType" : "TradeType",
    "orderType" : "OrderType",
    "promptMonth" : "PromptMonth",
    "strikePrice" : "StrikePrice",
    "orderQuantity" : "OrderQuantity",
    "account" : "Account",
    "timeInForce" : "TimeInForce",
    "counterParty" : "Counter Party",
    "tradeDate" : "Trade Date",
    "limitPrice" : "Limit Price",
    "triggerPrice" : "Trigger Price",
    "expirtyDate" : "Expiry Date",
    "orderNo" : "Order No",
    "source" : "Source",
    "instrumentDetails" : "Instrument Details",
    "filledQuantity" : "Filled Quantity",
    "orderStatus" : "Order Status"
});//

db.getCollection('indigo_Meta').insert({
   "type" : "policy",
    "name" : "oms",
    "roles" : [ 
        {
            "roleId" : "132",
            "grants" : [ 
                {
                    "target" : "order/*",
                    "action" : "READ"
                }, 
                {
                    "target" : "order/*",
                    "action" : "CREATE"
                }, 
                {
                    "target" : "order/*",
                    "action" : "UPDATE"
                }, 
                {
                    "target" : "order/*",
                    "action" : "DELETE"
                }
            ]
        }, 
        {
            "roleId" : "945",
            "grants" : [ 
                {
                    "target" : "order/*",
                    "action" : "READ"
                }, 
                {
                    "target" : "order/*",
                    "action" : "CREATE"
                }, 
                {
                    "target" : "order/*",
                    "action" : "UPDATE"
                }, 
                {
                    "target" : "order/*",
                    "action" : "DELETE"
                }
            ]
        }
    ],
    "users" : [ 
        {
            "userId" : "admin",
            "grants" : [ 
                {
                    "target" : "order/*",
                    "action" : "READ"
                }, 
                {
                    "target" : "order/*",
                    "action" : "CREATE"
                }
            ]
        }, 
        {
            "userId" : "Joseph@mail.com",
            "grants" : [ 
                {
                    "target" : "order/5c480589b60e683e483a7756",
                    "action" : "READ"
                }, 
                {
                    "target" : "order/5c480589b60e683e483a7756",
                    "action" : "MANAGE"
                }
            ]
        }
    ],
    "tenantID" : "",
    "sys__createdOn" : ISODate("2019-02-07T18:34:12.305Z"),
    "sys__createdBy" : "admin"
}
);//

db.getCollection('indigo_Meta').insert({
  
     "type" : "Workflow",
    "name" : "Order_Workflow",
    "title" : "Order Workflow",
    "app" : "oms",
    "flow" : {
        "_UT_CREATE_DERIVATIVE_ORDER" : {
            "componentType" : "UserTask",
            "labelKey" : "CREATE_DERIVATIVE_ORDER",
            "label" : "New Order",
            "object" : "order",
            "objectAction" : "CREATE",
            "layout" : {
                "name" : "create",
                "type" : "row",
                "formStyle" : {
                    "margin" : "auto",
                    "margin-bottom" : "20px"
                },
                "defaultFormItemStyle" : {
                    "justify-content" : "flex-start",
                    "flex-wrap" : "wrap",
                    "margin-right" : "10px"
                },
                "defaultFormLabelStyle" : {},
                "defaultFormValueStyle" : {}
            },
            "fields" : [ 
                [ 
                    {
                        "key" : "account",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "broker",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "instrumentType",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "instrument",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "timeInForce",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "counterParty",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "tradeDate",
                        "suffix" : "",
                        "type" : "readOnly",
                        "disabled" : true,
                        "value" : "currentDate",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "tradeType",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "promptMonth",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "strikePrice",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "orderType",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "limitPrice",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "triggerPrice",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "orderQuantity",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "expirtyDate",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }
                ]
            ],
            "decisions" : [ 
                {
                    "objectAction" : "CREATE",
                    "label" : "Send for Order",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-success",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_DERIVATIVE_ORDER",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Order got created successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in external task"
                                },
                                "successWithWarning" : {
                                    "message" : "Order got created with some errors"
                                }
                            },
                            "data" : "output._UT_CREATE_DERIVATIVE_ORDER"
                        }, 
                        {
                            "name" : "_EXT_CREATE_COLLECTION",
                            "appendMsg" : false,
                            "appendDataValues" : [ 
                                {
                                    "outputTask" : "output._ST_CREATE_DERIVATIVE_ORDER",
                                    "field" : "id",
                                    "value" : "id"
                                }
                            ],
                            "result" : {},
                            "data" : "output._UT_CREATE_DERIVATIVE_ORDER"
                        }, 
                        {
                            "name" : "_UT_LIST_VIEW_DERIVATIVE_ORDER",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "CANCEL",
                    "label" : "Cancel",
                    "labelkey" : "CANCEL",
                    "btnClass" : "btn-outline-dark",
                    "outcomes" : [ 
                        {
                            "name" : "_UT_LIST_VIEW_DERIVATIVE_ORDER"
                        }
                    ]
                }
            ]
        },
        "_EXT_CREATE_COLLECTION" : {
            "componentType" : "ExtSystemTask",
            "object" : "order",
            "objectAction" : "CREATE",
            "apiInfo" : {
                "host" : "http://172.16.1.55:8080",
                "path" : "/collection/oms/order/push",
                "method" : "POST",
                "body" : {},
                "useInputMapping" : false,
                "useOutputMapping" : false,
                "inputMapping" : {},
                "headers" : {}
            }
        },
        "_ST_CREATE_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "CREATE"
        },
        "_UT_LIST_VIEW_DERIVATIVE_ORDER" : {
            "componentType" : "UserTask",
            "labelKey" : "DERIVATIVE_ORDER_LISTING",
            "label" : "Derivative Order Listing",
            "object" : "order",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view",
                "selection" : "row"
            },
            "rowAction" : [ 
                {
                    "name" : "_UT_LIFECYCLE_DERIVATIVE_ORDER",
                    "displayType" : "popup",
                    "data" : "selected._UT_LIST_VIEW_DERIVATIVE_ORDER"
                }
            ],
            "fields" : {
                "account" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "orderNo" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "source" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "instrumentDetails" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "tradeType" : {
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                },
                "orderType" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "triggerPrice" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "limitPrice" : {
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                },
                "orderQuantity" : {
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                },
                "filledQuantity" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "orderStatus" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }
            },
            "getDataFromExternalAPI" : false,
            "decisions" : [ 
                {
                    "objectAction" : "CREATE",
                    "label" : "Create Order",
                    "labelkey" : "CREATE_DERIVATIVE_ORDER",
                    "btnClass" : "btn-success",
                    "iconClass" : "fa fa-plus",
                    "selection" : "default",
                    "outcomes" : [ 
                        {
                            "name" : "_UT_CREATE_DERIVATIVE_ORDER",
                            "displayType" : "popup",
                            "data" : "selected._UT_LIST_VIEW_DERIVATIVE_ORDER"
                        }
                    ]
                }, 
                {
                    "objectAction" : "UPDATE",
                    "label" : "Update Order",
                    "labelkey" : "EDIT_DERIVATIVE_ORDER",
                    "btnClass" : "btn-success",
                    "iconClass" : "fa fa-edit",
                    "selection" : "row",
                    "outcomes" : [ 
                        {
                            "name" : "_UT_EDIT_DERIVATIVE_ORDER",
                            "displayType" : "popup",
                            "data" : "selected._UT_LIST_VIEW_DERIVATIVE_ORDER"
                        }
                    ]
                }
            ]
        },
        "_UT_LIFECYCLE_DERIVATIVE_ORDER" : {
            "componentType" : "UserTask",
            "labelKey" : "DERIVATIVE_ORDER_VIEW",
            "label" : "Order Lifecycle",
            "object" : "order",
            "objectAction" : "READ",
            "layout" : {
                "name" : "lifecycle",
                "config" : {
                    "header" : [ 
                        "tradeType", 
                        "instrumentType", 
                        "instrumentDetails", 
                        "source", 
                        "tradeDate"
                    ],
                    "lifecycleDetails" : {
                        "row1" : "transactionTime",
                        "row2" : "status",
                        "row3" : [ 
                            "tradeId", 
                            "orderType", 
                            "limitPrice", 
                            "triggerPrice", 
                            "orderQuantity", 
                            "fillQuantity"
                        ]
                    }
                }
            },
            "decisions" : []
        },
        "_UT_VIEW_DERIVATIVE_ORDER" : {
            "componentType" : "UserTask",
            "labelKey" : "DERIVATIVE_ORDER_VIEW",
            "label" : "Derivative Order View",
            "object" : "order",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "rowAction" : [ 
                "_UT_VIEW_DERIVATIVE_ORDER"
            ],
            "fields" : [ 
                [ 
                    {
                        "key" : "orderNo",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "source",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "instrumentType"
                    }, 
                    {
                        "key" : "tradeDate",
                        "suffix" : ""
                    }
                ], 
                [ 
                    {
                        "key" : "tradeType",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "promptMonth",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "triggerPrice",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "counterParty",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "orderQuantity",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "orderType",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "limitPrice",
                        "suffix" : ""
                    }
                ]
            ],
            "decisions" : [ 
                {
                    "objectAction" : "UPDATE",
                    "label" : "Edit",
                    "labelkey" : "EDIT",
                    "btnClass" : "btn-success",
                    "outcomes" : [ 
                        {
                            "name" : "_UT_EDIT_DERIVATIVE_ORDER"
                        }
                    ]
                }, 
                {
                    "objectAction" : "DELETE",
                    "label" : "Delete",
                    "labelkey" : "DELETE",
                    "btnClass" : "btn-danger",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_DELETE_DERIVATIVE_ORDER"
                        }, 
                        {
                            "name" : "_UT_LIST_VIEW_DERIVATIVE_ORDER"
                        }
                    ]
                }, 
                {
                    "objectAction" : "APPROVE",
                    "label" : "Approve",
                    "labelkey" : "APPROVE",
                    "btnClass" : "btn-primary",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_APPROVE_DERIVATIVE_ORDER"
                        }, 
                        {
                            "name" : "_UT_LIST_VIEW_DERIVATIVE_ORDER"
                        }
                    ]
                }, 
                {
                    "objectAction" : "REJECT",
                    "label" : "Reject",
                    "labelkey" : "REJECT",
                    "btnClass" : "btn-warning",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_REJECT_DERIVATIVE_ORDER"
                        }, 
                        {
                            "name" : "_UT_LIST_VIEW_DERIVATIVE_ORDER"
                        }
                    ]
                }
            ]
        },
        "_ST_DELETE_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "DELETE"
        },
        "_ST_EDIT_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "UPDATE"
        },
        "_ST_APPROVE_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "APPROVE",
            "implicitActions" : [ 
                {
                    "type" : "fieldUpdate",
                    "field" : "Status",
                    "value" : "Approve"
                }
            ]
        },
        "_ST_REJECT_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "REJECT",
            "implicitActions" : [ 
                {
                    "type" : "fieldUpdate",
                    "field" : "Status",
                    "value" : "Reject"
                }
            ]
        },
        "_UT_EDIT_DERIVATIVE_ORDER" : {
            "componentType" : "UserTask",
            "labelKey" : "ORDER_EDIT",
            "label" : "OMS Order Update",
            "object" : "order",
            "objectAction" : "UPDATE",
            "layout" : {
                "name" : "edit",
                "type" : "row",
                "formStyle" : {
                    "max-width" : "100%",
                    "margin" : "auto"
                },
                "defaultFormItemStyle" : {
                    "justify-content" : "flex-start",
                    "margin-right" : "10px"
                },
                "defaultFormLabelStyle" : {},
                "defaultFormValueStyle" : {}
            },
            "fields" : [ 
                [ 
                    {
                        "key" : "tradeType",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px"
                        },
                        "style" : {
                            "display" : "flex"
                        }
                    }, 
                    {
                        "key" : "source",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px"
                        },
                        "style" : {
                            "display" : "flex"
                        }
                    }, 
                    {
                        "key" : "instrumentType",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px"
                        },
                        "style" : {
                            "display" : "flex"
                        }
                    }, 
                    {
                        "key" : "filledQuantity",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px"
                        },
                        "style" : {
                            "display" : "flex"
                        }
                    }, 
                    {
                        "key" : "instrumentDetails",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px"
                        },
                        "style" : {
                            "display" : "flex"
                        }
                    }, 
                    {
                        "key" : "orderStatus",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px"
                        },
                        "style" : {
                            "display" : "flex"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "orderType",
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "limitPrice",
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "triggerPrice",
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }, 
                    {
                        "key" : "orderQuantity",
                        "formItemStyle" : {
                            "margin-right" : "10px"
                        }
                    }
                ]
            ],
            "decisions" : [ 
                {
                    "objectAction" : "UPDATE",
                    "label" : "Update",
                    "labelkey" : "UPDATE",
                    "btnClass" : "btn-success",
                    "outcomes" : [ 
                        {
                            "data" : "output._UT_EDIT_DERIVATIVE_ORDER",
                            "name" : "_ST_EDIT_DERIVATIVE_ORDER",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Order got updated successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors "
                                },
                                "successWithWarning" : {
                                    "message" : "Order got created with some errors"
                                }
                            }
                        }, 
                        {
                            "name" : "_UT_LIST_VIEW_DERIVATIVE_ORDER",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "CANCEL",
                    "label" : "Cancel",
                    "labelkey" : "CANCEL",
                    "btnClass" : "btn-outline-dark",
                    "outcomes" : [ 
                        {
                            "name" : "_UT_LIST_VIEW_DERIVATIVE_ORDER"
                        }
                    ]
                }
            ]
        },
        "home" : {
            "componentType" : "UserTask",
            "labelKey" : "ORDER_LISTING",
            "label" : "Order Listing",
            "object" : "order",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "rowAction" : [ 
                "_UT_VIEW_DERIVATIVE_ORDER"
            ],
            "decisions" : [ 
                {
                    "objectAction" : "CREATE",
                    "label" : "Create Order",
                    "labelkey" : "CREATE_ORDER",
                    "btnClass" : "btn-success",
                    "outcomes" : [ 
                        {
                            "name" : "_UT_CREATE_DERIVATIVE_ORDER"
                        }
                    ]
                }
            ]
        }
    }
});//

--//@UNDO

db.getCollection('indigo_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('indigo_Meta').remove({"type": "object","name": "order"});//
db.getCollection('indigo_Meta').remove({"type":"policy","name": "oms"});//
db.getCollection('indigo_Meta').remove({"type":"message"});//
db.getCollection('indigo_Meta').remove({"type":"Workflow","app": "oms"});//