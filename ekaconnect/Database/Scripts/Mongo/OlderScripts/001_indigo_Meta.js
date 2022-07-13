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
                "src" : "assets/img/brand/indigo-logo.png",
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
                "name" : "Order App Home",
                "url" : "/workflow/oms/home",
                "icon" : "icon-speedometer",
                "badge" : {
                    "variant" : "info",
                    "text" : "NEW"
                }  
            }, 
            {
                "title" : true,
                "name" : "Order Management"
            },  
		
            {
                "name" : "List Of Order",
                "url" : "/workflow/oms/_UT_LIST_VIEW_DERIVATIVE_ORDER",
                "icon" : "icon-drop"
            },
            {
                "title" : true,
                "name" : "Order Management"
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
        "DELETE" : "DELETE"
    },
    "versionHistory" : [ 
        {
            "version" : "1",
            "fields" : "[{}]",
            "additionalProperties" : {}
        }
    ],
    "translatableKeys" : [],
    "fields" : {
        "account" : {
            "account" : "Account",
            "labelKey" : "Accout",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "broker" : {
            "broker" : "Broker",
            "labelKey" : "broker",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "instrumentType" : {
            "instrumentType" : "Instrument Type",
            "labelKey" : "instrumentType",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String",
            "length" : "20"
        },
        "instrument" : {
            "instrument" : "Instrument",
            "labelKey" : "instrument",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "timeInForce" : {
            "timeInForce" : "Time In Force",
            "labelKey" : "timeInForce",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "counterParty" : {
            "counterParty" : "Counter Party",
            "labelKey" : "counterParty",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "tradeDate" : {
            "tradeDate" : "Trade Date",
            "labelKey" : "tradeDate",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "promptMonth" : {
            "promptMonth" : "Prompt Month",
            "labelKey" : "promptMonth",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "orderType" : {
            "orderType" : "Order Type",
            "labelKey" : "orderType",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "limitPrice" : {
            "limitPrice" : "Limit Price",
            "labelKey" : "limitPrice",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "tradeType" : {
            "tradeType" : "Trade Type",
            "labelKey" : "tradeType",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "triggerPrice" : {
            "triggerPrice" : "Trigger Price",
            "labelKey" : "triggerPrice",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "orderQuantity" : {
            "orderQuantity" : "Order Quantity",
            "labelKey" : "orderQuantity",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "expirtyDate" : {
            "expirtyDate" : "Expiry Date",
            "labelKey" : "expirtyDate",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "orderNo" : {
            "orderNo" : "Order No",
            "labelKey" : "orderNo",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "source" : {
            "source" : "Source",
            "labelKey" : "source",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "instrumentDetails" : {
            "instrumentDetails" : "Instrument Details",
            "labelKey" : "instrumentDetails",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "filledQuantity" : {
            "filledQuantity" : "Filled Quantity",
            "labelKey" : "filledQuantity",
            "type" : "textbox",
            "isRequired" : "true",
            "dataType" : "String"
        },
        "orderStatus" : {
            "orderStatus" : "Order Status",
            "labelKey" : "orderStatus",
            "type" : "textbox",
            "isRequired" : "true",
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
    "orderQuantity" : "OrderQuantity"
});//

db.getCollection('indigo_Meta').insert({
  
    "type" : "policy",
    "name" : "oms",
    "roles" : [ 
        {
            "roleId" : "132",
            "grants" : [ 
                {
                    "target" : "order",
                    "action" : "READ"
                }, 
                {
                    "target" : "order",
                    "action" : "CREATE"
                }, 
                {
                    "target" : "order",
                    "action" : "UPDATE"
                }, 
                {
                    "target" : "order",
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
        }
    ],
    "tenantID" : "",
    "sys__createdOn" : ISODate("2019-02-07T18:34:12.305Z"),
    "sys__createdBy" : "admin"
}
);//

--//@UNDO

db.getCollection('indigo_Meta').remove({"type":"app","name": "oms"});//
db.getCollection('indigo_Meta').remove({"type": "object","name": "order"});//
db.getCollection('indigo_Meta').remove({"type":"policy","name": "oms"});//
db.getCollection('indigo_Meta').remove({"type":"message"});//