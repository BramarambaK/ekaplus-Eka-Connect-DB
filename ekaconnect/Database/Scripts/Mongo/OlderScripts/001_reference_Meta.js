db.getCollection('reference_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "PR"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "order"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "supplier"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "User_Info"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "Price_Request"});//
db.getCollection('reference_Meta').remove({"type":"policy","name": "omsAppPolicy"});//
db.getCollection('reference_Meta').remove({"type":"policy","name": "priceRequestAppPolicy"});//
db.getCollection('reference_Meta').remove({"type":"appPolicy","refTypeName": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"message"});//
db.getCollection('reference_Meta').remove({"type":"workflow"});//


db.getCollection('reference_Meta').insert({

    
    "title" : "Derivative OMS",
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
);//

db.getCollection('reference_Meta').insert({

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
    "sys__createdOn" : ISODate("2019-02-07T19:21:17.926Z"),
    "sys__createdBy" : "admin"
}
);//

db.getCollection('reference_Meta').insert({ 

"type" : "message",
    "name" : "en_US",
    "locale" : "en_US",
    "HttpMessageNotReadable" : "MALFORMED JSON REQUEST",
    "TokenValidationException" : "YOUR PROVIDED TOKEN INFORMATION EXPIRED OR NOT EXISTS",
    "TenantException" : "INVALID TENANT OR TENANT NOT FOUND.PLEASE CHECK TENANT INFO",
    "INVALID DATA" : "ENG INVALID",
    "orderNo" : "Order No",
    "account" : "Account",
    "306" : "invalide tenant name",
    "400" : "data is invalid",
    "501" : "Validation Error Occured",
    "401" : "Access denied!!!",
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
    "306" : "invalide tenant name",
    "400" : "data is invalid",
    "501" : "Validation Error Occured",
    "401" : "User is not Authorized.",
    "001" : "Malformed JSON request",
    "002" : "Your provided token information expired or not exists.",
    "003" : "Invalid Tenant or Tenant Not Found.Please check tenant info",
    "005" : "Method Argument Not Valid",
    "404" : "No Handler Found",
    "405" : "method is not supported for this request. Supported methods are ",
    "415" : "media type is not supported. Supported media types are ",
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
);//

db.getCollection('reference_Meta').insert({ 

"name" : "omsAppPolicy",
    "type" : "policy",
    "refType" : "app",
    "refTypeName" : "oms",
    "tenantId" : "reference",
    "order" : {
        "globalGrants" : {
            "userGrants" : {},
            "roleGrants" : {
                "124" : {
                    "itemLevelFilters" : [],
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                },
                "945" : {
                    "itemLevelFilters" : [ 
                        {
                            "key" : "systemCreatedBy",
                            "value" : [ 
                                "##user.name"
                            ],
                            "operator" : "equals"
                        }
                    ],
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                },
                "1105" : {
                    "itemLevelFilters" : [ 
                        {
                            "key" : "systemCreatedBy",
                            "value" : [ 
                                "##user.name"
                            ],
                            "operator" : "equals"
                        }
                    ],
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW"
                    ],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        }
    }

}
);//

db.getCollection('reference_Meta').insert({ 
	  
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
                                    "value" : "id"
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
                "host" : "http://192.168.1.225:5051",
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
                "refreshData" : {
                    "time" : 30000
                },
                "highlightChangedData" : {
                    "time" : 7000
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
                "host" : "http://192.168.1.225:8282",
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
                "host" : "http://192.168.1.225:8282",
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
                "host" : "http://192.168.1.225:5051",
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
                "host" : "http://192.168.1.225:5051",
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
);//

db.getCollection('reference_Meta').insert({ 
	    "title" : "Price Request",
    "name" : "PR",
    "tenantID" : "",
    "ObjectMetaIds" : [ 
        "5be3e1a98fce6a0f9c12c220", 
        ""
    ],
    "version" : "2",
    "createdOn" : "Test",
    "createy" : "Test",
    "lastModifiedOn" : "Test",
    "lastModifiey" : "Test",
    "type" : "app",
    "appType" : "CONNECT",
    "config" : {
        "header" : {
            "brand" : {
                "src" : "assets/img/brand/eka-login-logo.png",
                "width" : 60.0,
                "height" : 20.0,
                "alt" : "Eka"
            },
            "clientLogo" : {
                "src" : "assets/img/brand/boliden-logo.svg",
                "width" : 60.0,
                "height" : 20.0,
                "alt" : "Boliden"
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
                "name" : "App Home",
                "url" : "/app/PR/Price_Request/pricerequestlisting/view",
                "icon" : "icon-speedometer",
                "badge" : {
                    "variant" : "info",
                    "text" : "NEW"
                }
            }, 
            {
                "name" : "Admin",
                "url" : "/admin",
                "icon" : "icon-speedometer",
                "badge" : {
                    "variant" : "info"
                }
            }, 
            {
                "title" : true,
                "name" : "Price Fixation"
            }, 
            {
                "name" : "List Price Request",
                "url" : "/app/PR/Price_Request/pricerequestlisting/view",
                "icon" : "icon-drop"
            }, 
            {
                "name" : "New Price Request",
                "url" : "/app/PR/Price_Request/createpricerequest/create",
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

db.getCollection('reference_Meta').insert({ 
 "type" : "object",
    "name" : "Price_Request",
    "label" : "PRICE_REQUEST",
    "label_key" : "",
    "tenantID" : "",
    "version" : "2",
    "createdOn" : "Test",
    "createy" : "Test",
    "lastModifiedOn" : "Test",
    "lastModifiey" : "Test",
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
            "version" : "1",
            "fields" : "[{}]"
        }
    ],
    "translatableKeys" : [ 
        "priceRequestProduct", 
        "priceRequestQuantity", 
        "priceRequestQuantityUnit", 
        "priceRequestPriceType", 
        "priceRequestCurrency", 
        "priceRequestStatus", 
        "priceRequestStatusApprovedDate", 
        "priceRequestEmail", 
        "priceRequestPhoneNumber", 
        "priceRequestContractPrice"
    ],
    "fields" : {
        "Product" : {
            "priceRequestProduct" : "Product",
            "labelKey" : "priceRequestProduct",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "20"
        },
        "Quantity" : {
            "priceRequestQuantity" : "Quantity",
            "labelKey" : "priceRequestQuantity",
            "type" : "textbox",
            "dataType" : "number",
            "isRequired" : false,
            "length" : "8"
        },
        "QuantityUnit" : {
            "priceRequestQuantityUnit" : "Quantity Unit",
            "labelKey" : "priceRequestQuantityUnit",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "8"
        },
        "Quality" : {
            "priceRequestQuality" : "Quality",
            "labelKey" : "priceRequestQuality",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "20"
        },
        "PriceType" : {
            "priceRequestPriceType" : "Price Type",
            "labelKey" : "priceRequestPriceType",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "20"
        },
        "ContractPrice" : {
            "priceRequestContractPrice" : "Contract Price",
            "labelKey" : "priceRequestContractPrice",
            "type" : "textbox",
            "dataType" : "number",
            "isRequired" : false,
            "length" : "8"
        },
        "Currency" : {
            "priceRequestCurrency" : "Currency",
            "labelKey" : "priceRequestCurrency",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "3"
        },
        "Status" : {
            "priceRequestStatus" : "STATUS",
            "labelKey" : "priceRequestStatus",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "20"
        },
        "phoneNumber" : {
            "priceRequestPhoneNumber" : "Phone Number",
            "labelKey" : "priceRequestPhoneNumber",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "number"
        },
        "email" : {
            "priceRequestEmail" : "Email",
            "labelKey" : "priceRequestEmail",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "number"
        }
    },
    "layout" : {
        "fields" : [ 
            [ 
                "Product", 
                "Quality", 
                "Quantity", 
                "QuantityUnit", 
                "ContractPrice", 
                "Currency"
            ], 
            [ 
                "Product", 
                "Quality", 
                "Quantity", 
                "QuantityUnit", 
                "ContractPrice", 
                "Currency"
            ]
        ]
    }

});//

db.getCollection('reference_Meta').insert({ 
 "name" : "priceRequestAppPolicy",
    "type" : "policy",
    "refType" : "app",
    "refTypeName" : "PR",
    "tenantId" : "boliden",
    "Price_Request" : {
        "globalGrants" : {
            "userGrants" : {},
            "roleGrants" : {
                "129" : {
                    "itemLevelFilters" : [],
                    "allowedItemLevelActions" : [ 
                        "CREATE", 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW", 
                        "APPROVE", 
                        "REJECT"
                    ],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        }
    }

});//

db.getCollection('reference_Meta').insert({
	 "name" : "priceRequestAppPolicy",
    "type" : "policy",
    "refType" : "app",
    "refTypeName" : "PR",
    "tenantId" : "boliden",
    "Price_Request" : {
        "globalGrants" : {
            "userGrants" : {},
            "roleGrants" : {
                "129" : {
                    "itemLevelFilters" : [],
                    "allowedItemLevelActions" : [ 
                        "CREATE", 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW", 
                        "APPROVE", 
                        "REJECT"
                    ],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        }
    }
});//

db.getCollection('reference_Meta').insert({
"type" : "Workflow",
    "name" : "Workflow_Demo",
    "title" : "Basic Workflow Demo",
    "app" : "PR",
    "flow" : {
        "createpricerequest" : {
            "componentType" : "UserTask",
            "labelKey" : "CREATE_PRICE_REQUEST",
            "label" : "Create Price Request",
            "object" : "Price_Request",
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
                        "key" : "Product",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "Quantity",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "Currency",
                        "suffix" : ""
                    }
                ], 
                [ 
                    {
                        "key" : "Quality",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "ContractPrice",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "QuantityUnit",
                        "suffix" : ""
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
                            "name" : "pricerequestlisting"
                        }
                    ]
                }, 
                {
                    "objectAction" : "CREATE",
                    "label" : "Send for Review",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-primary custom-btn oms-blue",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_PRICE_REQUEST",
                            "data" : "output.createpricerequest",
                            "appendPlaceHolderToPopUpMsg" : [ 
                                {
                                    "outputTask" : "output._ST_CREATE_PRICE_REQUEST",
                                    "value" : "id"
                                }
                            ],
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Price request got created successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in ext"
                                },
                                "successWithWarning" : {
                                    "message" : "Price request got created with some errors"
                                }
                            }
                        }, 
                        {
                            "name" : "pricerequestlisting",
                            "showPopUp" : true,
                            "data" : "output.createpricerequest"
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
                            "name" : "pricerequestlisting"
                        }
                    ]
                }
            ]
        },
        "_ST_CREATE_PRICE_REQUEST" : {
            "componentType" : "SystemTask",
            "object" : "Price_Request",
            "objectAction" : "CREATE",
            "implicitActions" : [ 
                {
                    "type" : "fieldUpdate",
                    "field" : "Status",
                    "value" : "Under Review"
                }
            ]
        },
        "pricerequestlisting" : {
            "componentType" : "UserTask",
            "labelKey" : "PRICE_REQUEST_LISTING",
            "label" : "Price Request Listing",
            "object" : "Price_Request",
            "objectAction" : "READ",
            "getDataFromExternalAPI" : false,
            "layout" : {
                "name" : "view",
                "selection" : "row",
                "refreshData" : {
                    "time" : 30000
                },
                "highlightChangedData" : {
                    "time" : 7000
                },
                "options" : {
                    "search" : true,
                    "reload" : true,
                    "reset" : true,
                    "columnFilter" : true,
                    "filter" : true,
                    "export" : true
                }
            },
            "rowAction" : [ 
                {
                    "name" : "viewpricerequest",
                    "data" : "selected.pricerequestlisting"
                }
            ],
            "decisions" : [ 
                {
                    "objectAction" : "CREATE",
                    "label" : "Create Price Request",
                    "labelkey" : "CREATE_PRICE_REQUEST",
                    "btnClass" : "btn-success",
                    "iconClass" : "fa fa-plus",
                    "selection" : "default",
                    "outcomes" : [ 
                        {
                            "name" : "createpricerequest",
                            "displayType" : "popup",
                            "data" : "selected.pricerequestlisting"
                        }
                    ]
                }, 
                {
                    "objectAction" : "UPDATE",
                    "label" : "Edit",
                    "labelkey" : "EDIT",
                    "btnClass" : "btn-success",
                    "iconClass" : "fa fa-plus",
                    "selection" : "row",
                    "outcomes" : [ 
                        {
                            "data" : "selected.pricerequestlisting",
                            "displayType" : "popup",
                            "name" : "editpricerequest"
                        }
                    ]
                }
            ],
            "fields" : [ 
                {
                    "key" : "Product",
                    "label" : "Product",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "Quality",
                    "label" : "Quality",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "Quantity",
                    "label" : "Quantity",
                    "sort" : true,
                    "filter" : false
                }, 
                {
                    "key" : "QuantityUnit",
                    "label" : "Quantity Unit",
                    "sort" : true,
                    "filter" : false
                }, 
                {
                    "key" : "ContractPrice",
                    "label" : "Contract Price",
                    "sort" : true,
                    "filter" : false
                }, 
                {
                    "key" : "Currency",
                    "label" : "Currency",
                    "sort" : true,
                    "filter" : false
                }
            ]
        },
        "viewpricerequest" : {
            "componentType" : "UserTask",
            "labelKey" : "PRICE_REQUEST_VIEW",
            "label" : "Price Request View",
            "object" : "Price_Request",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "fields" : [ 
                [ 
                    {
                        "key" : "Product",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "Quantity",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "Currency",
                        "suffix" : ""
                    }
                ], 
                [ 
                    {
                        "key" : "Quality",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "ContractPrice",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "QuantityUnit",
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
                    "position" : "top",
                    "outcomes" : [ 
                        {
                            "data" : "selected.pricerequestlisting",
                            "name" : "editpricerequest"
                        }
                    ]
                }, 
                {
                    "objectAction" : "DELETE",
                    "label" : "Delete",
                    "labelkey" : "DELETE",
                    "btnClass" : "btn-danger",
                    "position" : "top",
                    "outcomes" : [ 
                        {
                            "data" : "output.viewpricerequest",
                            "name" : "_ST_DELETE_PRICE_REQUEST",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Price request got deleted successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in ext"
                                },
                                "successWithWarning" : {
                                    "message" : "Price request got created with some errors"
                                }
                            }
                        }, 
                        {
                            "name" : "pricerequestlisting",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "APPROVE",
                    "label" : "Approve",
                    "labelkey" : "APPROVE",
                    "btnClass" : "btn-primary",
                    "position" : "top",
                    "outcomes" : [ 
                        {
                            "data" : "selected.viewpricerequest",
                            "name" : "_ST_APPROVE_PRICE_REQUEST",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Price request got approved successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in ext"
                                },
                                "successWithWarning" : {
                                    "message" : "Price request got created with some errors"
                                }
                            }
                        }, 
                        {
                            "name" : "pricerequestlisting",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "REJECT",
                    "label" : "Reject",
                    "labelkey" : "REJECT",
                    "btnClass" : "btn-warning",
                    "position" : "top",
                    "outcomes" : [ 
                        {
                            "data" : "selected.viewpricerequest",
                            "name" : "_ST_REJECT_PRICE_REQUEST",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Price request got rejected successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in ext"
                                },
                                "successWithWarning" : {
                                    "message" : "Price request got created with some errors"
                                }
                            }
                        }, 
                        {
                            "name" : "pricerequestlisting",
                            "showPopUp" : true
                        }
                    ]
                }
            ]
        },
        "_ST_DELETE_PRICE_REQUEST" : {
            "componentType" : "SystemTask",
            "object" : "Price_Request",
            "objectAction" : "DELETE"
        },
        "_ST_EDIT_PRICE_REQUEST" : {
            "componentType" : "SystemTask",
            "object" : "Price_Request",
            "objectAction" : "UPDATE"
        },
        "_ST_APPROVE_PRICE_REQUEST" : {
            "componentType" : "SystemTask",
            "object" : "Price_Request",
            "objectAction" : "APPROVE",
            "implicitActions" : [ 
                {
                    "type" : "fieldUpdate",
                    "field" : "Status",
                    "value" : "Approve"
                }
            ]
        },
        "_ST_REJECT_PRICE_REQUEST" : {
            "componentType" : "SystemTask",
            "object" : "Price_Request",
            "objectAction" : "REJECT",
            "implicitActions" : [ 
                {
                    "type" : "fieldUpdate",
                    "field" : "Status",
                    "value" : "Reject"
                }
            ]
        },
        "editpricerequest" : {
            "componentType" : "UserTask",
            "labelKey" : "PRICE_REQUEST_EDIT",
            "label" : "Price Request Update",
            "object" : "Price_Request",
            "objectAction" : "UPDATE",
            "layout" : {
                "name" : "edit",
                "type" : "column"
            },
            "fields" : [ 
                [ 
                    {
                        "key" : "Product",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "Quantity",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "Currency",
                        "suffix" : ""
                    }
                ], 
                [ 
                    {
                        "key" : "Quality",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "ContractPrice",
                        "suffix" : ""
                    }, 
                    {
                        "key" : "QuantityUnit",
                        "suffix" : ""
                    }
                ]
            ],
            "decisions" : [ 
                {
                    "objectAction" : "UPDATE",
                    "label" : "Update",
                    "labelkey" : "UPDATE",
                    "btnClass" : "btn-success",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "data" : "output.editpricerequest",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Price request updated successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in ext"
                                },
                                "successWithWarning" : {
                                    "message" : "Price request updated with some warning"
                                }
                            },
                            "name" : "_ST_EDIT_PRICE_REQUEST"
                        }, 
                        {
                            "name" : "pricerequestlisting",
                            "data" : "output.editpricerequest",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "CANCEL",
                    "label" : "Cancel",
                    "labelkey" : "CANCEL",
                    "btnClass" : "btn-warning",
                    "outcomes" : [ 
                        {
                            "name" : "pricerequestlisting"
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
                            "name" : "pricerequestlisting"
                        }
                    ]
                }
            ]
        },
        "home" : {
            "componentType" : "UserTask",
            "object" : "Price_Request",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "workflow" : "pricerequestlisting",
            "decisions" : []
        }
    }
	
});//
	
db.getCollection('reference_Meta').insert({
	"title" : "Supplier Connect",
    "name" : "supplierconnect",
    "tenantID" : "",
    "type" : "app",
    "appType" : "CONNECT",
    "config" : {
        "header" : {
            "brand" : {
                "src" : "assets/img/brand/eka-login-logo.png",
                "width" : 60,
                "height" : 20,
                "alt" : "Eka"
            },
            "clientLogo" : {
                "src" : "assets/img/brand/boliden-logo.svg",
                "width" : 60,
                "height" : 20,
                "alt" : "Boliden"
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
                "name" : "App Home",
                "url" : "/app/supplierconnect/supplier/supplierlisting/view",
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
});//

db.getCollection('reference_Meta').insert({
	
	"refTypeName" : "supplierconnect",
    "refType" : "app",
    "name" : "Supplier Connect App Policy",
    "tenantId" : "boliden",
    "type" : "appPolicy",
    "supplier" : {
        "globalGrants" : {
            "userGrants" : {
                "00092241" : {
                    "allowedItemLevelActions" : [],
                    "itemLevelFilter" : {},
                    "allowedGlobalActions" : []
                },
                "opo2243" : {
                    "allowedItemLevelActions" : [],
                    "itemLevelFilter" : {},
                    "allowedGlobalActions" : []
                }
            },
            "roleGrants" : {
                "1231" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1232" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1233" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1234" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1235" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1238" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1239" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1240" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1241" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1236" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1215" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1220" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1223" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1222" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                },
                "1224" : {
                    "allowedItemLevelActions" : [ 
                        "READ", 
                        "UPDATE"
                    ],
                    "itemLevelFilter" : {
                        "firstFilter" : {
                            "key" : "CP Name",
                            "value" : [ 
                                "##user.cp"
                            ],
                            "operator" : "in"
                        },
                        "containsDynamicValues" : true
                    },
                    "allowedGlobalActions" : [ 
                        "CREATE"
                    ]
                }
            }
        }
    }
});//

db.getCollection('reference_Meta').insert({
	 "name" : "User_Info",
    "type" : "object",
    "app" : "supplierconnect",
    "objectAction" : {
        "CREATE" : "POST",
        "UPDATE" : "PUT",
        "READ" : "GET",
        "LISTVIEW" : "GET",
        "DELETE" : "DELETE",
        "APPROVE" : "PUT",
        "REJECT" : "PUT"
    },
    "translatableKeys" : [ 
        "register", 
        "createAccount", 
        "contactDetails", 
        "bankDetails", 
        "username", 
        "firstName", 
        "lastName", 
        "email", 
        "password", 
        "confirmPassword", 
        "mobile", 
        "phone", 
        "fax", 
        "address", 
        "addressDisplay", 
        "country", 
        "state", 
        "city", 
        "zipcode", 
        "website"
    ],
    "fields" : {
        "register" : {
            "register" : "Register",
            "labelKey" : "register",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "createAccount" : {
            "createAccount" : "Create your account",
            "labelKey" : "createAccount",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "bankDetails" : {
            "bankDetails" : "Enter bank details",
            "labelKey" : "bankDetails",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "contactDetails" : {
            "contactDetails" : "Enter contact details",
            "labelKey" : "contactDetails",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "postalAddress" : {
            "postalAddress" : "Postal Address",
            "labelKey" : "postalAddress",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "userDetails" : {
            "userDetails" : "User's Details",
            "labelKey" : "userDetails",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "userRole" : {
            "userRole" : "User Role",
            "labelKey" : "userRole",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "successMessage" : {
            "successMessage" : "You have successfully registered",
            "labelKey" : "successMessage",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "username" : {
            "username" : "User Name",
            "labelKey" : "username",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "firstName" : {
            "firstName" : "First Name",
            "labelKey" : "firstName",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "name" : {
            "name" : "Name",
            "labelKey" : "name",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "lastName" : {
            "lastName" : "Last Name",
            "labelKey" : "lastName",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "address" : {
            "address" : "House no., Street name",
            "labelKey" : "address",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "addressDisplay" : {
            "addressDisplay" : "Address",
            "labelKey" : "addressDisplay",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "email" : {
            "email" : "Email",
            "labelKey" : "email",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "confirmEmail" : {
            "confirmEmail" : "Confirm Email",
            "labelKey" : "confirmEmail",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "password" : {
            "password" : "Password",
            "labelKey" : "password",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "confirmPassword" : {
            "confirmPassword" : "Confirm Password",
            "labelKey" : "confirmPassword",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "mobile" : {
            "mobile" : "Mobile",
            "labelKey" : "mobile",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "phone" : {
            "phone" : "Phone",
            "labelKey" : "phone",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "fax" : {
            "fax" : "Fax",
            "labelKey" : "fax",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "country" : {
            "country" : "Country",
            "labelKey" : "country",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "state" : {
            "state" : "State",
            "labelKey" : "state",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "city" : {
            "city" : "City",
            "labelKey" : "city",
            "type" : "text",
            "dataType" : "String",
            "isRequired" : false
        },
        "uniqueId" : {
            "uniqueId" : "Unique Id",
            "labelKey" : "uniqueId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "uniqueIdType" : {
            "uniqueIdType" : "Unique Id Type",
            "labelKey" : "uniqueIdType",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "customerType" : {
            "customerType" : "Customer Type",
            "labelKey" : "customerType",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "zipcode" : {
            "zipcode" : "ZIP code",
            "labelKey" : "zipcode",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "website" : {
            "website" : "Website",
            "labelKey" : "website",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "countryId" : {
            "countryId" : "Country Id",
            "labelKey" : "countryId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "stateId" : {
            "stateId" : "State Id",
            "labelKey" : "stateId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        }
    }
});//

db.getCollection('reference_Meta').insert({
	"name" : "supplier",
    "type" : "object",
    "objectAction" : {
        "CREATE" : "POST",
        "UPDATE" : "PUT",
        "READ" : "GET",
        "LISTVIEW" : "GET",
        "DELETE" : "DELETE",
        "APPROVE" : "PUT",
        "REJECT" : "PUT"
    },
    "fields" : {
        "GMR Ref No" : {
            "GMR Ref No" : "GMR REF NO",
            "labelKey" : "GMR Ref No"
        },
        "Contract Ref No" : {
            "Contract Ref No" : "CONTRACT REF NO",
            "labelKey" : "Contract Ref No"
        },
        "Product" : {
            "Product" : "PRODUCT",
            "labelKey" : "Product"
        },
        "Quality Name" : {
            "Quality Name" : "QUALITY NAME",
            "labelKey" : "Quality Name"
        },
        "Shipped Quantity" : {
            "Shipped Quantity" : "SHIPPED QUANTITY",
            "labelKey" : "Shipped Quantity"
        },
        "Quantity Unit" : {
            "Quantity Unit" : "QUANTITY UNIT",
            "labelKey" : "Quantity Unit"
        },
        "Sender Ref No" : {
            "Sender Ref No" : "SENDERS REF NO",
            "labelKey" : "Sender Ref No"
        },
        "Mode of Transport" : {
            "Mode of Transport" : "MODE OF TRANSPORT",
            "labelKey" : "Mode of Transport"
        },
        "Container Size" : {
            "Container Size" : "CONTAINER SIZE",
            "labelKey" : "Container Size"
        },
        "Number of Containers" : {
            "Number of Containers" : "NUMBER OF CONTAINERS",
            "labelKey" : "Number of Containers"
        },
        "Warehouse" : {
            "Warehouse" : "WAREHOUSE",
            "labelKey" : "Warehouse"
        },
        "Landing Date" : {
            "Landing Date" : "LANDING DATE",
            "labelKey" : "Landing Date"
        },
        "Wet Weight" : {
            "Wet Weight" : "WET WEIGHT",
            "labelKey" : "Wet Weight"
        },
        "Dry Weight" : {
            "Dry Weight" : "DRY WEIGHT",
            "labelKey" : "Dry Weight"
        },
        "Latest Assay Type" : {
            "Latest Assay Type" : "LATEST ASSAY TYPE",
            "labelKey" : "Latest Assay Type"
        },
        "GMR Due Date" : {
            "GMR Due Date" : "GMR DUE DATE",
            "labelKey" : "GMR Due Date"
        },
        "Current Pricing Status" : {
            "Current Pricing Status" : "CURRENT PRICING STATUS",
            "labelKey" : "Current Pricing Status"
        },
        "Latest Invoice Type" : {
            "Latest Invoice Type" : "LATEST INVOICE TYPE",
            "labelKey" : "Latest Invoice Type"
        },
        "Invoice Due Date" : {
            "Invoice Due Date" : "INVOICE DUE DATE",
            "labelKey" : "Invoice Due Date"
        },
        "CP Name" : {
            "CP Name" : "CP NAME",
            "labelKey" : "CP Name"
        },
        "GMR Created Date" : {
            "GMR Created Date" : "GMR CREATED DATE",
            "labelKey" : "GMR Created Date"
        },
        "Expected Arrival Date" : {
            "Expected Arrival Date" : "EXPECTED ARRIVAL DATE",
            "labelKey" : "Expected Arrival Date"
        },
        "WNS Date" : {
            "WNS Date" : "WNS DATE",
            "labelKey" : "WNS Date"
        },
        "Marked For Umpire" : {
            "Marked For Umpire" : "MARKED FOR UMPIRE",
            "labelKey" : "Marked For Umpire"
        },
        "Created By" : {
            "Created By" : "CREATED BY",
            "labelKey" : "Created By"
        },
        "Updated Date" : {
            "Updated Date" : "LAST UPDATED DATE",
            "labelKey" : "Updated Date"
        },
        "Updated By" : {
            "Updated By" : "UPDATED",
            "labelKey" : "Updated By"
        }
    },
    "layout" : {
        "fields" : []
    }
});//	

db.getCollection('reference_Meta').insert({
	"type" : "Workflow",
    "name" : "supplierWorkflow",
    "title" : "Supplier Workflow",
    "app" : "supplierconnect",
    "flow" : {
        "home" : {
            "componentType" : "UserTask",
            "object" : "supplier",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "workflow" : "supplierlisting",
            "decisions" : []
        },
        "supplierlisting" : {
            "componentType" : "UserTask",
            "labelKey" : "GMR_LISTING",
            "label" : "GMR Listing",
            "object" : "supplier",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view",
                "options" : {
                    "search" : true,
                    "reload" : true,
                    "reset" : true,
                    "columnFilter" : true,
                    "filter" : true,
                    "export" : true
                }
            },
            "apiInfo" : {
                "host" : "http://connect11.qa2.ekaanalytics.com:90",
                "path" : "/spring/smartapp/collection/data",
                "method" : "GET",
                "queryParams" : {
                    "collectionName" : "GMR Summary View",
                    "page" : "1",
                    "start" : "0",
                    "limit" : "1636"
                }
            },
            "getDataFromExternalAPI" : true,
            "decisions" : [],
            "fields" : {
                "GMR Ref No" : {
                    "sort" : true,
                    "filter" : false
                },
                "Contract Ref No" : {
                    "sort" : true,
                    "filter" : false
                },
                "Product" : {
                    "sort" : false,
                    "filter" : false
                },
                "Quality Name" : {
                    "sort" : false,
                    "filter" : true
                },
                "Shipped Quantity" : {
                    "sort" : false,
                    "filter" : true
                },
                "Quantity Unit" : {
                    "sort" : false,
                    "filter" : true
                },
                "Sender Ref No" : {
                    "sort" : false,
                    "filter" : true
                },
                "Mode of Transport" : {
                    "sort" : false,
                    "filter" : true
                },
                "Container Size" : {
                    "sort" : false,
                    "filter" : true
                },
                "Number of Containers" : {
                    "sort" : false,
                    "filter" : true
                },
                "Warehouse" : {
                    "sort" : false,
                    "filter" : true
                },
                "Landing Date" : {
                    "sort" : false,
                    "filter" : true
                },
                "Wet Weight" : {
                    "sort" : false,
                    "filter" : true
                },
                "Dry Weight" : {
                    "sort" : false,
                    "filter" : true
                },
                "Latest Assay Type" : {
                    "sort" : false,
                    "filter" : true
                },
                "GMR Due Date" : {
                    "sort" : false,
                    "filter" : true
                },
                "Current Pricing Status" : {
                    "sort" : false,
                    "filter" : true
                },
                "Latest Invoice Type" : {
                    "sort" : false,
                    "filter" : true
                },
                "Invoice Due Date" : {
                    "sort" : false,
                    "filter" : false
                },
                "CP Name" : {
                    "sort" : false,
                    "filter" : true
                },
                "GMR Created Date" : {
                    "sort" : false,
                    "filter" : true
                },
                "Expected Arrival Date" : {
                    "sort" : false,
                    "filter" : true
                },
                "WNS Date" : {
                    "sort" : false,
                    "filter" : true
                },
                "Marked For Umpire" : {
                    "sort" : false,
                    "filter" : true
                },
                "Created By" : {
                    "sort" : false,
                    "filter" : true
                },
                "Updated Date" : {
                    "sort" : false,
                    "filter" : true
                },
                "Updated By" : {
                    "sort" : false,
                    "filter" : true
                }
            }
        }
    }
});	
--//@UNDO

db.getCollection('reference_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "order"});//
db.getCollection('reference_Meta').remove({"type":"policy","name": "omsAppPolicy"});//
db.getCollection('reference_Meta').remove({"type":"policy","name": "priceRequestAppPolicy"});//
db.getCollection('reference_Meta').remove({"type":"appPolicy","refTypeName": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "PR"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "order"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "supplier"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "User_Info"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "Price_Request"});//
db.getCollection('reference_Meta').remove({"type":"message"});//
db.getCollection('reference_Meta').remove({"type":"Workflow","app": "oms"});//