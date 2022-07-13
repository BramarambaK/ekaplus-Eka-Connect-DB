db.getCollection('uatindigoag_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('uatindigoag_Meta').remove({"type": "object","name": "order"});//
db.getCollection('uatindigoag_Meta').remove({"type":"policy","name": "oms"});//
db.getCollection('uatindigoag_Meta').remove({"type":"message"});//
db.getCollection('uatindigoag_Meta').remove({"type":"workflow"});//


db.getCollection('uatindigoag_Meta').insert({

    "_id" : "111111",
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
);//;

db.getCollection('uatindigoag_Meta').insert({
 "_id" : "222222",
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
        "orderNo", 
        "lastPx", 
        "symbol"
    ],
    "fields" : {
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
        "promptMonth" : {
            "promptMonth" : "Prompt Month",
            "labelKey" : "promptMonth",
            "type" : "monthpicker",
            "isRequired" : true,
            "dataType" : "String"
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
}
);//;

db.getCollection('uatindigoag_Meta').insert({ 
"_id" : "333333",
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
    "symbol" : "Symbol"

}
);//;

db.getCollection('uatindigoag_Meta').insert({ 
"_id" : "444444",
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
    "sys__createdBy" : "admin",
    "app" : "oms"

}
);//;
db.getCollection('uatindigoag_Meta').insert({ 
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
                    "objectAction" : "READ",
                    "label" : "CANCEL",
                    "btnClass" : "btn btn-outline-dark",
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
                    "btnClass" : "btn btn-outline-dark",
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
                    "btnClass" : "btn-primary",
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
                "host" : "http://172.16.5.101:5051",
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
                }
            },
            "rowAction" : [ 
                {
                    "name" : "lifecyclederivative",
                    "displayType" : "popup",
                    "data" : "selected.listderivative"
                }
            ],
            "fields" : {
                "orderNo" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false,
                    "highlight" : {
                        "default" : "link"
                    }
                },
                "tradeDate" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "source" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "instrument" : {
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
                "lastPx" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                },
                "orderStatus" : {
                    "sort" : true,
                    "filter" : false,
                    "edit" : false,
                    "highlight" : {
                        "default" : "bg-transparent",
                        "Rejected" : "bg-danger",
                        "Order Sent" : "bg-success",
                        "New" : "bg-warning",
                        "Partially filled" : "bg-warning",
                        "Pending cancel" : "bg-warning",
                        "Pending new" : "bg-warning",
                        "Done for day" : "bg-success",
                        "Filled" : "bg-success",
                        "Replaced" : "bg-warning",
                        "Cancelled" : "bg-danger",
                        "Suspended" : "bg-danger",
                        "Expired" : "bg-danger"
                    }
                }
            },
            "getDataFromExternalAPI" : true,
            "refreshData" : true,
            "apiInfo" : {
                "host" : "http://172.16.5.101:8282",
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
                "host" : "http://172.16.5.101:8282",
                "path" : "/app/oms/orderdetails",
                "method" : "POST",
                "body" : {},
                "useInputMapping" : false,
                "inputMapping" : {},
                "headers" : {}
            },
            "layout" : {
                "name" : "lifecycle",
                "config" : {
                    "topHeading" : {
                        "name" : "Order Status Log",
                        "value" : "orderNo"
                    },
                    "header" : [ 
                        "tradeType", 
                        "instrumentType", 
                        "instrument", 
                        "source", 
                        "symbol", 
                        "tradeDate"
                    ],
                    "lifecycleDetails" : {
                        "row1" : "transactTime",
                        "row2" : "orderStatus",
                        "row3" : [ 
                            "tradeId", 
                            "orderType", 
                            "limitPrice", 
                            "orderQuantity", 
                            "filledQuantity", 
                            "lastPx"
                        ]
                    }
                }
            },
            "decisions" : [ 
                {
                    "objectAction" : "CANCEL",
                    "btnClass" : "close-icon btn",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }
            ]
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
        "editderivative" : {
            "componentType" : "UserTask",
            "labelKey" : "ORDER_EDIT",
            "label" : "OMS Order Update",
            "object" : "order",
            "objectAction" : "UPDATE",
            "layout" : {
                "name" : "edit",
                "topLine" : {
                    "display" : true
                },
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
                            "name" : "listderivative",
                            "showPopUp" : true
                        }
                    ]
                }, 
                {
                    "objectAction" : "READ",
                    "position" : "top",
                    "btnClass" : "close-icon btn",
                    "outcomes" : [ 
                        {
                            "name" : "listderivative"
                        }
                    ]
                }
            ]
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

db.getCollection('uatindigoag_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('uatindigoag_Meta').remove({"type": "object","name": "order"});//
db.getCollection('uatindigoag_Meta').remove({"type":"policy","name": "oms"});//
db.getCollection('uatindigoag_Meta').remove({"type":"message"});//
db.getCollection('uatindigoag_Meta').remove({"type":"Workflow","app": "oms"});//