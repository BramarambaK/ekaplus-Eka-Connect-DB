db.getCollection('platform_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('platform_Meta').remove({"type": "object","name": "order"});//
db.getCollection('platform_Meta').remove({"type":"policy","name": "oms"});//
db.getCollection('platform_Meta').remove({"type":"message"});//
db.getCollection('platform_Meta').remove({"type":"Workflow"});//


db.getCollection('platform_Meta').insert({

    "_id" : "111111",
    "title" : "Derivative OMS",
    "name" : "oms",
    "tenantID" : "platform",
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
                "name" : "Derivative OMS"
            }, 
            {
                "name" : "Order App Home",
                "url" : "/app/oms/order/listderivative/view",
                "icon" : "icon-speedometer",
                "badge" : {
                    "variant" : "info",
                    "text" : "NEW"
                }
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

}
);//;

db.getCollection('platform_Meta').insert({
 "_id" : "222222",
    "name" : "order",
    "label" : "ORDER MANAGEMENT SYSTEM",
    "type" : "object",
    "version" : "1",
    "tenantID" : "reference",
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
        "orderNo", 
        "lastPx", 
        "symbol"
    ],
    "fields" : {
        "sourceId" : {
            "sourceId" : "Source Id",
            "labelKey" : "sourceId",
            "type" : "hidden",
            "isRequired" : false,
            "dataType" : "String"
        },
        "account" : {
            "account" : "Account",
            "labelKey" : "account",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "orderNo" : {
            "orderNo" : "Order No",
            "labelKey" : "orderNo",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "source" : {
            "source" : "Source",
            "labelKey" : "source",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String"
        },
        "instrumentDetails" : {
            "instrumentDetails" : "Instrument Details",
            "labelKey" : "instrumentDetails",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "instrument" : {
            "instrument" : "Instrument",
            "labelKey" : "instrument",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "instrument"
        },
        "promptMonth" : {
            "promptMonth" : "Prompt Month",
            "labelKey" : "promptMonth",
            "type" : "monthpicker",
            "isRequired" : true,
            "dataType" : "String"
        },
        "tradeType" : {
            "tradeType" : "Trade Type",
            "labelKey" : "tradeType",
            "type" : "radio",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "tradeType"
        },
        "orderType" : {
            "orderType" : "Order Type",
            "labelKey" : "orderType",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "orderType"
        },
        "triggerPrice" : {
            "triggerPrice" : "Trigger Price",
            "labelKey" : "triggerPrice",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "limitPrice" : {
            "limitPrice" : "Limit Price",
            "labelKey" : "limitPrice",
            "type" : "textbox",
            "isRequired" : true,
            "dataType" : "String"
        },
        "orderQuantity" : {
            "orderQuantity" : "Order Quantity",
            "labelKey" : "orderQuantity",
            "type" : "textbox",
            "isRequired" : true,
            "dataType" : "number"
        },
        "filledQuantity" : {
            "filledQuantity" : "Filled Quantity",
            "labelKey" : "filledQuantity",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "lastPx" : {
            "lastPx" : "Last Price",
            "labelKey" : "lastPx",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "symbol" : {
            "symbol" : "Symbol",
            "labelKey" : "symbol",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "orderStatus" : {
            "orderStatus" : "Order Status",
            "labelKey" : "orderStatus",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "broker" : {
            "broker" : "Broker",
            "labelKey" : "broker",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "broker"
        },
        "instrumentType" : {
            "instrumentType" : "Instrument Type",
            "labelKey" : "instrumentType",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "instrumentType"
        },
        "timeInForce" : {
            "timeInForce" : "Time In Force",
            "labelKey" : "timeInForce",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "timeInForce"
        },
        "counterParty" : {
            "counterParty" : "Counter Party",
            "labelKey" : "counterParty",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String"
        },
        "tradeDate" : {
            "tradeDate" : "Order Date",
            "labelKey" : "tradeDate",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "tradeId" : {
            "tradeId" : "Trade ID",
            "labelKey" : "tradeId",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String",
            "serviceKey" : "counterParty"
        },
        "strikePrice" : {
            "strikePrice" : "Strike Price",
            "labelKey" : "strikePrice",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "expirtyDate" : {
            "expirtyDate" : "Expiry Date",
            "labelKey" : "expirtyDate",
            "type" : "datepicker",
            "isRequired" : false,
            "dataType" : "String"
        },
        "appName" : {
            "appName" : "Type",
            "labelKey" : "appName",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "20"
        },
        "objectName" : {
            "objectName" : "Type",
            "labelKey" : "objectName",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "10"
        },
        "sourceId" : {
            "sourceId " : "Source Id ",
            "labelKey" : "sourceId",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "sendingTime" : {
            "sendingTime" : "Sending Time",
            "labelKey" : "sendingTime",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "optionType" : {
            "optionType" : "Option Type",
            "labelKey" : "optionType",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "price" : {
            "price" : "Price",
            "labelKey" : "price",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "id" : {
            "id" : "Id",
            "labelKey" : "id",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "transactTime" : {
            "transactTime" : "Transact Time",
            "labelKey" : "transactTime",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "Status" : {
            "Status" : "Status",
            "labelKey" : "Status",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
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
                "sourceId", 
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
    "sys__createdBy" : "admin"
}
);//;

db.getCollection('platform_Meta').insert({ 
"_id" : "333333",
"306" : "invalide tenant name",
    "400" : "data is invalid",
    "401" : "User is not Authorized.",
    "404" : "No Handler Found",
    "405" : "method is not supported for this request. Supported methods are ",
    "415" : "media type is not supported. Supported media types are ",
    "501" : "Validation Error Occured",
    "type" : "message",
    "name" : "en_US",
    "locale" : "en_US",
    "HttpMessageNotReadable" : "MALFORMED JSON REQUEST",
    "TokenValidationException" : "YOUR PROVIDED TOKEN INFORMATION EXPIRED OR NOT EXISTS",
    "TenantException" : "INVALID TENANT OR TENANT NOT FOUND.PLEASE CHECK TENANT INFO",
    "INVALID DATA" : "ENG INVALID",
    "orderNo" : "Order No",
    "account" : "Account",
    "instrumentType" : "Instrument Type",
    "instrument" : "Instrument",
    "broker" : "Broker",
    "tradeType" : "Trade Type",
    "orderType" : "Order Type",
    "promptMonth" : "Prompt Month",
    "strikePrice" : "Strike Price",
    "orderQuantity" : "Order Quantity",
    "timeInForce" : "Time In Force",
    "counterParty" : "Counter Party",
    "tradeDate" : "Order Date",
    "limitPrice" : "Limit Price",
    "triggerPrice" : "Trigger Price",
    "expirtyDate" : "Expiry Date",
    "source" : "Source",
    "instrumentDetails" : "Instrument Details",
    "filledQuantity" : "Filled Quantity",
    "orderStatus" : "Order Status",
    "lastPx" : "Last Price",
    "symbol" : "Symbol",
    "priceRequestProduct" : "Product",
    "priceRequestQuantity" : "Quantity",
    "001" : "Malformed JSON request",
    "002" : "Your provided token information expired or not exists.",
    "003" : "Invalid Tenant or Tenant Not Found.Please check tenant info",
    "005" : "Method Argument Not Valid",
    "priceRequestQuantityUnit" : "Quantity Unit",
    "priceRequestQuality" : "Quality",
    "priceRequestPriceType" : "Price Type",
    "priceRequestContractPrice" : "Contract Price",
    "priceRequestCurrency" : "Currency",
    "priceRequestStatus" : "Status",
    "priceRequestPhoneNumber" : "Phone Number",
    "adviceGmrRefNo" : "Gmr Ref No",
    "adviceContractRefNo" : "Contract Ref No",
    "adviceContractItemRefNo" : "Contract Item Ref No",
    "adviceActivityDate" : "Activity Date",
    "adviceBlDate" : "Bill Date",
    "adviceLoadingDate" : "Loading Date",
    "adviceExpectedArrivalDate" : "Expected Arrival Date",
    "advicePortOfLoading" : "Port Of Loading",
    "advicePortOfDischarge" : "Port Of Discharge",
    "adviceCountryOfOrigin" : "Country Of Origin",
    "adviceShipper" : "Shipper",
    "adviceNetWeight" : "Net Weight",
    "adviceGrossWeight" : "Gross Weight",
    "adviceTareWeight" : "Tare Weight",
    "adviceWeightUnit" : "Weight Unit"

}
);//;

db.getCollection('platform_Meta').insert({ 
"_id" : "444444",
"refTypeName" : "oms",
    "name" : "omsAppPolicy",
    "refType" : "app",
    "tenantId" : "reference",
    "type" : "policy",
    "order" : {
        "5ca5a1a983630f0001aa4a36" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        },
        "5ca5862383630f0001aa4a35" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        },
        "5ca6b59f83630f0001aa4a3a" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        },
        "globalGrants" : {
            "userGrants" : {},
            "roleGrants" : {
                "1105" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ],
                    "itemLevelFilters" : [ 
                        {
                            "value" : [ 
                                "##user.name"
                            ],
                            "key" : "systemCreatedBy",
                            "operator" : "equals"
                        }
                    ],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                },
                "124" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ],
                    "itemLevelFilters" : [],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                },
                "945" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ],
                    "itemLevelFilters" : [ 
                        {
                            "value" : [ 
                                "##user.name"
                            ],
                            "key" : "systemCreatedBy",
                            "operator" : "equals"
                        }
                    ],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        },
        "5ca693fe83630f0001aa4a38" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        },
        "5ca6a50583630f0001aa4a39" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        },
        "5ca6c6be83630f0001aa4a3b" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        },
        "5ca6c76f83630f0001aa4a3c" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        },
        "5ca5bbab83630f0001aa4a37" : {
            "userGrants" : {
                "23" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ]
                }
            }
        }
    }
}
);//;
db.getCollection('platform_Meta').insert({ 
"_id" : "555555",

 "type" : "Workflow",
    "name" : "Order_Workflow",
    "title" : "Order Workflow",
    "app" : "oms",
    "flow" : {
        "createderivative" : {
            "componentType" : "UserTask",
            "labelKey" : "CREATE_DERIVATIVE_ORDER",
            "label" : "New Order",
            "object" : "order",
            "objectAction" : "CREATE",
            "layout" : {
                "name" : "create",
                "type" : "row",
                "topLine" : {
                    "display" : true
                },
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
                        "type" : "readOnly",
                        "disabled" : "true",
                        "value" : "rs365561",
                        "style" : {
                            "width" : "80px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "broker",
                        "suffix" : "",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "instrumentType",
                        "suffix" : "",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "instrument",
                        "suffix" : "",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "timeInForce",
                        "suffix" : "",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "counterParty",
                        "suffix" : "",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "tradeDate",
                        "suffix" : "",
                        "type" : "readOnly",
                        "disabled" : true,
                        "value" : "currentDate",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-left" : "auto"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "tradeType",
                        "suffix" : "",
                        "style" : {
                            "width" : "80px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "promptMonth",
                        "suffix" : "",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "orderType",
                        "suffix" : "",
                        "style" : {
                            "width" : "100px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "limitPrice",
                        "suffix" : "",
                        "style" : {
                            "width" : "80px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "orderQuantity",
                        "suffix" : "",
                        "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }, 
                    {
                        "key" : "expirtyDate",
                        "suffix" : "",
                        "style" : {
                            "width" : "90px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "15px"
                        }
                    }
                ]
            ],
            "decisions" : [ 
                {
                    "objectAction" : "READ",
                    "label" : "CANCEL",
                    "btnClass" : "btn btn-outline-dark custom-btn",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }, 
                {
                    "objectAction" : "READ",
                    "label" : "RESET",
                    "btnClass" : "btn btn-outline-dark custom-btn",
                    "position" : "bottom",
                    "style" : {
                        "margin-right" : "auto"
                    },
                    "outcomes" : [ 
                        {
                            "name" : "RESETACTION",
                            "type" : "client",
                            "action" : "reset"
                        }
                    ]
                }, 
                {
                    "objectAction" : "CREATE",
                    "label" : "PLACE ORDER",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-primary custom-btn oms-blue",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_DERIVATIVE_ORDER",
                            "appendMsg" : false,
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
                            "data" : "output.createderivative"
                        }, 
                        {
                            "name" : "_EXT_CREATE_COLLECTION",
                            "appendMsg" : true,
                            "appendDataValues" : [ 
                                {
                                    "outputTask" : "output._ST_CREATE_DERIVATIVE_ORDER",
                                    "field" : "id",
                                    "value" : "_id"
                                }
                            ],
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
                            "data" : "output.createderivative"
                        }, 
                        {
                            "name" : "listderivative",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "READ",
                    "position" : "top",
                    "btnClass" : "close-icon btn",
                    "type" : "close",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
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
                "host" : "http://172.31.254.21:7070",
                "path" : "/collection/oms/order/push",
                "method" : "POST",
                "body" : {},
                "useInputMapping" : false,
                "inputMapping" : {},
                "headers" : {
                    "X-ObjectAction" : "CREATE"
                }
            }
        },
        "_ST_CREATE_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "CREATE"
        },
        "listderivative" : {
            "componentType" : "UserTask",
            "labelKey" : "DERIVATIVE_ORDER_LISTING",
            "label" : "Derivative Order Listing",
            "object" : "order",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view",
                "selection" : "row",
                "theme" : "theme-grid-dark",
                "refreshData" : {
                    "time" : 300000.0
                },
                "highlightChangedData" : {
                    "time" : 7000.0
                },
                "options" : {
                    "search" : true,
                    "reload" : true,
                    "reset" : false,
                    "columnFilter" : false,
                    "filter" : false,
                    "export" : false
                }
            },
            "fields" : [ 
                {
                    "key" : "orderNo",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "tradeDate",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "source",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "instrument",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "promptMonth",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "tradeType",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "orderType",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "limitPrice",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "orderQuantity",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "filledQuantity",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "lastPx",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "orderStatus",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false,
                    "highlight" : {
                        "default" : "bg-transparent",
                        "Rejected" : "danger-bg",
                        "Order Sent" : "success-bg",
                        "New" : "warning-bg",
                        "Partially filled" : "warning-bg",
                        "Pending cancel" : "warning-bg",
                        "Pending replaced" : "warning-bg",
                        "Pending new" : "warning-bg",
                        "Done for day" : "success-bg",
                        "Filled" : "success-bg",
                        "Replaced" : "warning-bg",
                        "Cancelled" : "danger-bg",
                        "Suspended" : "danger-bg",
                        "Expired" : "danger-bg"
                    }
                }
            ],
            "getDataFromExternalAPI" : true,
            "refreshData" : true,
            "apiInfo" : {
                "host" : "http://172.31.254.21:8282",
                "path" : "/app/oms/orderlist",
                "method" : "GET",
                "body" : {},
                "useInputMapping" : false,
                "inputMapping" : {},
                "headers" : {}
            },
            "decisions" : [ 
                {
                    "objectAction" : "CREATE",
                    "label" : "CREATE",
                    "labelkey" : "CREATE_DERIVATIVE_ORDER",
                    "btnClass" : "btn-success",
                    "iconClass" : "fa fa-plus",
                    "selection" : "default",
                    "outcomes" : [ 
                        {
                            "name" : "createderivative",
                            "displayType" : "popup",
                            "data" : "selected.listderivative"
                        }
                    ]
                }, 
                {
                    "objectAction" : "CREATE",
                    "label" : "CREATE",
                    "labelkey" : "CREATE_DERIVATIVE_ORDER",
                    "btnClass" : "btn-success",
                    "iconClass" : "info-icon",
                    "selection" : "row",
                    "outcomes" : [ 
                        {
                            "name" : "lifecyclederivative",
                            "displayType" : "popup",
                            "data" : "selected.listderivative"
                        }
                    ]
                }, 
                {
                    "objectAction" : "UPDATE",
                    "label" : "CREATE",
                    "labelkey" : "CREATE_DERIVATIVE_ORDER",
                    "btnClass" : "btn-success",
                    "iconClass" : "edit-icon",
                    "disabled" : "field.orderStatus === 'Rejected' || field.orderStatus === 'Order Sent' || field.orderStatus === 'Order Cancelled' || field.orderStatus === 'Order Replaced' || field.orderStatus === 'Filled' || field.orderStatus === 'Done for Day' || field.orderStatus === 'Rejected' || field.orderStatus === 'Suspended' || field.orderStatus === 'Expired' || field.orderStatus === 'Cancelled'",
                    "selection" : "row",
                    "outcomes" : [ 
                        {
                            "name" : "editderivative",
                            "displayType" : "popup",
                            "popupClass" : "edit-modal",
                            "data" : "selected.listderivative"
                        }
                    ]
                }, 
                {
                    "objectAction" : "CREATE",
                    "label" : "CREATE",
                    "labelkey" : "CREATE_DERIVATIVE_ORDER",
                    "btnClass" : "btn-success",
                    "iconClass" : "delete-icon",
                    "disabled" : "field.orderStatus === 'Rejected' || field.orderStatus === 'Order Sent' || field.orderStatus === 'Order Cancelled' || field.orderStatus === 'Order Replaced' || field.orderStatus === 'Filled' || field.orderStatus === 'Done for Day' || field.orderStatus === 'Rejected' || field.orderStatus === 'Suspended' || field.orderStatus === 'Expired' || field.orderStatus === 'Cancelled'",
                    "selection" : "row",
                    "outcomes" : [ 
                        {
                            "name" : "cancelderivative",
                            "displayType" : "popup",
                            "data" : "selected.listderivative"
                        }
                    ]
                }
            ]
        },
        "lifecyclederivative" : {
            "componentType" : "UserTask",
            "labelKey" : "DERIVATIVE_ORDER_VIEW",
            "label" : "Order Lifecycle",
            "object" : "order",
            "objectAction" : "READ",
            "getDataFromExternalAPI" : true,
            "apiInfo" : {
                "host" : "http://172.31.254.21:8282",
                "path" : "/app/oms/orderdetails",
                "method" : "POST",
                "body" : {},
                "useInputMapping" : false,
                "inputMapping" : {},
                "headers" : {}
            },
            "layout" : {
                "name" : "lifecycle"
            },
            "fields" : [ 
                {
                    "key" : "Order Status Log",
                    "placement" : "topHeading"
                }, 
                {
                    "key" : "orderNo",
                    "placement" : "topHeading"
                }, 
                {
                    "key" : "tradeType",
                    "placement" : "header"
                }, 
                {
                    "key" : "instrumentType",
                    "placement" : "header"
                }, 
                {
                    "key" : "instrument",
                    "placement" : "header"
                }, 
                {
                    "key" : "source",
                    "placement" : "header"
                }, 
                {
                    "key" : "symbol",
                    "placement" : "header"
                }, 
                {
                    "key" : "tradeDate",
                    "placement" : "header"
                }, 
                {
                    "key" : "transactTime",
                    "placement" : "row1"
                }, 
                {
                    "key" : "orderStatus",
                    "placement" : "row2"
                }, 
                {
                    "key" : "tradeId",
                    "placement" : "row3"
                }, 
                {
                    "key" : "orderType",
                    "placement" : "row3"
                }, 
                {
                    "key" : "limitPrice",
                    "placement" : "row3"
                }, 
                {
                    "key" : "orderQuantity",
                    "placement" : "row3"
                }, 
                {
                    "key" : "filledQuantity",
                    "placement" : "row3"
                }, 
                {
                    "key" : "lastPx",
                    "placement" : "row3"
                }
            ],
            "decisions" : [ 
                {
                    "objectAction" : "CANCEL",
                    "btnClass" : "close-icon btn",
                    "position" : "top",
                    "type" : "close",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }
            ]
        },
        "cancelderivative" : {
            "componentType" : "UserTask",
            "labelKey" : "CANCEL_DERIVATIVE_ORDER",
            "label" : "Cancel",
            "object" : "order",
            "objectAction" : "UPDATE",
            "getDataFromExternalAPI" : true,
            "layout" : {
                "name" : "cancelpopup",
                "topLine" : {
                    "display" : true
                }
            },
            "decisions" : [ 
                {
                    "objectAction" : "READ",
                    "label" : "CANCEL",
                    "btnClass" : "btn btn-outline-dark custom-btn",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }, 
                {
                    "objectAction" : "UPDATE",
                    "label" : "YES",
                    "btnClass" : "btn-primary custom-btn oms-blue",
                    "position" : "bottom",
                    "style" : {
                        "margin-left" : "auto"
                    },
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CANCEL_ORDER_DERIVATIVE_ORDER",
                            "appendMsg" : false,
                            "result" : {
                                "success" : {
                                    "message" : "Order got cancelled successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in external task"
                                },
                                "successWithWarning" : {
                                    "message" : "Order got cancelled with some errors"
                                }
                            },
                            "data" : "output.cancelderivative"
                        }, 
                        {
                            "name" : "_EXT_ORDER_CANCEL_COLLECTION",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Order got cancelled successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in external task"
                                },
                                "successWithWarning" : {
                                    "message" : "Order got created with some errors"
                                }
                            },
                            "data" : "output.cancelderivative"
                        }, 
                        {
                            "name" : "listderivative",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "READ",
                    "position" : "top",
                    "btnClass" : "close-icon btn",
                    "type" : "close",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }
            ]
        },
        "_EXT_ORDER_CANCEL_COLLECTION" : {
            "componentType" : "ExtSystemTask",
            "object" : "order",
            "objectAction" : "CREATE",
            "apiInfo" : {
                "host" : "http://172.31.254.21:7070",
                "path" : "/collection/oms/order/cancel",
                "method" : "POST",
                "body" : {},
                "useInputMapping" : false,
                "inputMapping" : {},
                "headers" : {
                    "X-ObjectAction" : "CREATE"
                }
            }
        },
        "viewderivative" : {
            "componentType" : "UserTask",
            "labelKey" : "DERIVATIVE_ORDER_VIEW",
            "label" : "Derivative Order View",
            "object" : "order",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "rowAction" : [ 
                "viewderivative"
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
                            "name" : "editderivative"
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
                            "name" : "listderivative"
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
                            "name" : "listderivative"
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
                            "name" : "listderivative"
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
        "_ST_CANCEL_ORDER_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "UPDATE",
            "implicitActions" : [ 
                {
                    "type" : "fieldUpdate",
                    "field" : "orderStatus",
                    "value" : "Cancelled"
                }
            ]
        },
        "_ST_EDIT_DERIVATIVE_ORDER" : {
            "componentType" : "SystemTask",
            "object" : "order",
            "objectAction" : "UPDATE",
            "implicitActions" : [ 
                {
                    "type" : "fieldUpdate",
                    "field" : "orderStatus",
                    "value" : "Replace"
                }
            ]
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
        "editderivative" : {
            "componentType" : "UserTask",
            "labelKey" : "ORDER_EDIT",
            "label" : "Replace",
            "object" : "order",
            "objectAction" : "UPDATE",
            "input" : [ 
                "sourceId"
            ],
            "layout" : {
                "name" : "edit",
                "topLine" : {
                    "display" : true
                },
                "type" : "row",
                "formStyle" : {
                    "max-width" : "100%",
                    "margin" : "auto",
                    "font-weight" : "600"
                },
                "defaultFormItemStyle" : {
                    "justify-content" : "flex-start"
                },
                "defaultFormLabelStyle" : {},
                "defaultFormValueStyle" : {}
            },
            "fields" : [ 
                [ 
                    {
                        "key" : "sourceId",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "tradeType",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px",
                            "max-height" : "20px"
                        },
                        "style" : {
                            "display" : "flex",
                            "justify-content" : "flex-start"
                        }
                    }, 
                    {
                        "key" : "source",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px",
                            "max-height" : "20px"
                        },
                        "style" : {
                            "display" : "flex",
                            "justify-content" : "flex-start"
                        }
                    }, 
                    {
                        "key" : "instrumentType",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px",
                            "max-height" : "20px"
                        },
                        "style" : {
                            "display" : "flex",
                            "justify-content" : "flex-start"
                        }
                    }, 
                    {
                        "key" : "filledQuantity",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px",
                            "max-height" : "20px"
                        },
                        "style" : {
                            "display" : "flex",
                            "justify-content" : "flex-start"
                        }
                    }, 
                    {
                        "key" : "instrumentDetails",
                        "disabled" : true,
                        "type" : "readOnly",
                        "suffix" : "",
                        "formItemStyle" : {
                            "width" : "50%",
                            "margin-right" : "0px",
                            "max-height" : "20px"
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
                            "margin-right" : "0px",
                            "max-height" : "20px"
                        },
                        "style" : {
                            "display" : "flex",
                            "justify-content" : "flex-start"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "orderType",
                        "style" : {
                            "width" : "100px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "limitPrice",
                        "style" : {
                            "width" : "100px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "triggerPrice",
                        "style" : {
                            "width" : "100px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "orderQuantity",
                        "style" : {
                            "width" : "100px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "10px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        },
                        "valueDerivedFrom" : {
                            "operand" : [ 
                                "orderQuantity", 
                                "filledQuantity"
                            ],
                            "operator" : [ 
                                "-"
                            ]
                        }
                    }
                ]
            ],
            "decisions" : [ 
                {
                    "objectAction" : "READ",
                    "label" : "CANCEL",
                    "btnClass" : "btn btn-outline-dark",
                    "position" : "bottom",
                    "style" : {
                        "margin-right" : "auto"
                    },
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }, 
                {
                    "objectAction" : "UPDATE",
                    "label" : "REPLACE ORDER",
                    "labelkey" : "UPDATE",
                    "btnClass" : "btn-primary",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "data" : "output.editderivative",
                            "name" : "_ST_EDIT_DERIVATIVE_ORDER",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Order got replaced successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors "
                                },
                                "successWithWarning" : {
                                    "message" : "Order got replaced with some errors"
                                }
                            }
                        }, 
                        {
                            "name" : "_EXT_ORDER_EDIT_COLLECTION",
                            "appendMsg" : false,
                            "result" : {
                                "success" : {
                                    "message" : "Order got cancelled successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in external task"
                                },
                                "successWithWarning" : {
                                    "message" : "Order got created with some errors"
                                }
                            },
                            "data" : "output.editderivative"
                        }, 
                        {
                            "name" : "listderivative",
                            "showPopUp" : "true"
                        }
                    ]
                }, 
                {
                    "objectAction" : "READ",
                    "position" : "top",
                    "btnClass" : "close-icon btn",
                    "type" : "close",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }
            ]
        },
        "_EXT_ORDER_EDIT_COLLECTION" : {
            "componentType" : "ExtSystemTask",
            "object" : "order",
            "objectAction" : "CREATE",
            "apiInfo" : {
                "host" : "http://172.31.254.21:7070",
                "path" : "/collection/oms/order/replace",
                "method" : "POST",
                "body" : {},
                "useInputMapping" : false,
                "inputMapping" : {},
                "headers" : {
                    "X-ObjectAction" : "CREATE"
                }
            }
        },
        "RESETACTION" : {
            "type" : "client",
            "object" : "order",
            "objectAction" : "READ",
            "action" : "reset"
        },
        "home" : {
            "componentType" : "UserTask",
            "object" : "order",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "workflow" : "listderivative",
            "decisions" : []
        }
    }
}
);//;

--//@UNDO

db.getCollection('platform_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('platform_Meta').remove({"type": "object","name": "order"});//
db.getCollection('platform_Meta').remove({"type":"policy","name": "oms"});//
db.getCollection('platform_Meta').remove({"type":"message"});//
db.getCollection('platform_Meta').remove({"type":"Workflow","app": "oms"});//