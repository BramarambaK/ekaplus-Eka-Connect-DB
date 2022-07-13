db.getCollection('reference_Meta').remove({"type":"policy","refTypeName": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "User_Info"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "supplier"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "deliveryitem"});//
db.getCollection('reference_Meta').remove({"type":"message"});//
db.getCollection('reference_Meta').remove({"type":"Workflow","app": "supplierconnect"});//

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
                "name" : "List of Contract Delivery Item",
                "url" : "/app/supplierconnect/deliveryitem/deliveryItemlisting/view",
                "icon" : "icon-speedometer"
            }, 
            {
                "name" : "List of GMR's",
                "url" : "/app/supplierconnect/supplier/supplierlisting/view",
                "icon" : "icon-speedometer"
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
})

db.getCollection('reference_Meta').insert({
    "name" : "supplierConnectAppPolicy",
    "type" : "policy",
    "refType" : "app",
    "refTypeName" : "supplierconnect",
    "tenantId" : "reference",
    "deliveryitem" : {
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
                }
            }
        }
    },
    "Gmr_Basic" : {
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
                },
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
                }
            }
        }
    },
    "Assaying" : {
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
})

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
})

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
})

db.getCollection('reference_Meta').insert({
    "name" : "deliveryitem",
    "label" : "Contract Delivery item",
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
        "DELETE" : "DELETE"
    },
    "versionHistory" : [ 
        {
            "version" : "2",
            "fields" : "[{}]",
            "additionalProperties" : {}
        }
    ],
    "translatableKeys" : [ 
        "deliveryItemRefNo", 
        "qualityName", 
        "contractqty", 
        "quotaMonth"
    ],
    "fields" : {
        "qualityName" : {
            "qualityName" : "Quality",
            "labelKey" : "qualityName",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "deliveryItemRefNo" : {
            "deliveryItemRefNo " : "Contract Delivery Item",
            "labelKey" : "deliveryItemRefNo",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "contractqty" : {
            "contractqty" : "Open Weight",
            "labelKey" : "contractqty",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "quotaMonth" : {
            "quotaMonth" : "To Date",
            "labelKey" : "quotaMonth",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        }
    },
    "layout" : {
        "fields" : [ 
            [ 
                "deliveryItemRefNo", 
                "qualityName"
            ], 
            [ 
                "contractqty", 
                "quotaMonth"
            ]
        ]
    },
    "additionalProperties" : {},
    "sys__createdOn" : ISODate("2019-02-07T19:21:17.926Z"),
    "sys__createdBy" : "admin"
})

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
                    "export" : true,
					"lastUpdated" : false
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
        },
        "deliveryItemlisting" : {
            "componentType" : "UserTask",
            "labelKey" : "DELIVER_IEM_LISTING",
            "label" : "List of Contract Delivery Item",
            "object" : "deliveryitem",
            "objectAction" : "READ",
            "apiInfo" : {
                "host" : "http://172.16.0.173:8080",
                "path" : "/api/logistic/deliveryItemList",
                "method" : "POST",
                "responseDataKey" : "",
                "headers" : {
                    "username" : "e-bolprpa"
                }
            },
            "layout" : {
                "name" : "view",
                "selection" : "row",
                "refreshData" : {
                    "time" : 30000.0
                },
                "highlightChangedData" : {
                    "time" : 7000.0
                },
                "options" : {
                    "search" : true,
                    "reload" : true,
                    "reset" : true,
                    "columnFilter" : true,
                    "filter" : true,
                    "export" : true,
					"lastUpdated" :  false
                }
            },
            "getDataFromExternalAPI" : true,
            "decisions" : [ 
                {
                    "objectAction" : "CREATE",
                    "label" : "Create Gmr Basic",
                    "labelkey" : "CREATE_GMR_BASIC",
                    "btnClass" : "btn-success",
                    "iconClass" : "fa fa-plus",
                    "selection" : "default",
                    "outcomes" : [ 
                        {
                            "name" : "creategmrbasic",
                            "data" : "selected.deliveryItemlisting"
                        }
                    ]
                },
				{
                    "objectAction" : "UPDATE",
                    "label" : "CREATE",
                    "labelkey" : "CREATE_DERIVATIVE_ORDER",
                    "btnClass" : "btn-success",
                    "iconClass" : "fa fa-info-circle",
                    "selection" : "row",
                    "outcomes" : [ 
                        {
                            "name" : "detailsderivative",
                            "displayType" : "popup",
                            "data" : "selected.listderivative"
                        }
                    ]
                }
            ],
            "fields" : [ 
                {
                    "key" : "deliveryItemRefNo",
                    "label" : "Contract Delivery Item",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "qualityName",
                    "label" : "Quality",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "contractqty",
                    "label" : "Open Weight",
                    "sort" : true,
                    "filter" : false
                }, 
                {
                    "key" : "quotaMonth",
                    "label" : "To Date",
                    "sort" : true,
                    "filter" : false
                }
            ]
        },
		"detailsderivative" : {
            "componentType" : "UserTask",
            "labelKey" : "DETAILS_DERIVATIVE_ORDER",
            "label" : "Attributes",
            "object" : "order",
            "objectAction" : "READ",
            "getDataFromExternalAPI" : true,
            "layout" : {
                "name" : "detailspopup",
                "topLine" : {
                    "display" : true
                }
            },
            "fields" : [ 
                {
                    "key" : "Chemical",
                    "placement" : "navbar"
                }, 
                {
                    "key" : "Physical",
                    "placement" : "navbar"
                }, 
                {
                    "key" : "Element Name",
                    "placement" : "ptableChemical"
                }, 
                {
                    "key" : "Min Value",
                    "placement" : "ptableChemical"
                }, 
                {
                    "key" : "Max Value",
                    "placement" : "ptableChemical"
                }, 
                {
                    "key" : "Attribute Name",
                    "placement" : "ptablePhysical"
                }, 
                {
                    "key" : "Attribute Value",
                    "placement" : "ptablePhysical"
                }
            ],
            "decisions" : [ 
                {
                    "objectAction" : "READ",
                    "label" : "Close",
                    "btnClass" : "btn btn-outline-dark custom-btn",
                    "position" : "bottom",
                    "style" : {
                        "margin-right" : "auto"
                    },
                    "outcomes" : [ 
                        {
                            "name" : "deliveryItemlisting"
                        }
                    ]
                }, 
                {
                    "objectAction" : "READ",
                    "position" : "top",
                    "btnClass" : "close-icon btn",
                    "outcomes" : [ 
                        {
                            "name" : "deliveryItemlisting"
                        }
                    ]
                }
            ]
        },
        "creategmrbasic" : {
            "componentType" : "UserTask",
            "labelKey" : "CREATE_GMR_BASIC",
            "label" : "Create",
            "object" : "Gmr_Basic",
            "objectAction" : "CREATE",
            "layout" : {
                "name" : "create",
                "type" : "row",
                "topLine" : {
                    "display" : true
                },
                "formStyle" : {
                    "max-width" : "100%",
                    "margin" : "auto",
                    "font-weight" : "600"
                },
                "defaultFormItemStyle" : {
                    "justify-content" : "flex-start",
                    "background" : "white",
                    "margin" : "3px",
                    "border" : "1px solid black"
                },
                "defaultFormLabelStyle" : {},
                "defaultFormValueStyle" : {}
            },
            "fields" : [ 
                [ 
                    {
                        "key" : "ContractDeliveryItem",
                        "suffix" : "",
                        "type" : "readOnly",
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
                        "key" : "Supplier",
                        "suffix" : "",
                        "type" : "readOnly",
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
                        "key" : "ParticleSize",
                        "suffix" : "",
                        "type" : "readOnly",
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
                        "key" : "SupplierAddress",
                        "suffix" : "",
                        "type" : "readOnly",
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
                        "key" : "LotSize",
                        "suffix" : "",
                        "type" : "readOnly",
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
                        "key" : "Incoterm",
                        "suffix" : "",
                        "type" : "readOnly",
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
                        "key" : "SupplierReference",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "Quality",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "ExpectedArrivalDate",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "Destination",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "AdvicedNetWeight",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "AdvicedNetWeightUnit",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "MaterialDescription",
                        "suffix" : "",
                        "style" : {
                            "width" : "400px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "LoadingDate",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "LoadingLocation",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "CountryOfOrigin",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "ModeOfTransport",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "NumberOfContainers",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "SupplierRepresentative",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
                        }
                    }, 
                    {
                        "key" : "SpecialInstructionsToSmelter",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px",
                            "font-weight" : "600"
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
                            "name" : "deliveryItemlisting"
                        }
                    ]
                }, 
                {
                    "objectAction" : "CREATE",
                    "label" : "Next",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-success custom-btn",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_GMR_BASIC",
                            "data" : "output.creategmrbasic",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "GMR basic got created successfully"
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
                            "name" : "assayinglisting",
                            "data" : "output.creategmrbasic",
                            "showPopUp" : true
                        }
                    ]
                }
            ]
        },
        "_ST_CREATE_GMR_BASIC" : {
            "componentType" : "SystemTask",
            "object" : "Gmr_Basic",
            "objectAction" : "CREATE"
        },
        "assayinglisting" : {
            "componentType" : "UserTask",
            "labelKey" : "Assaying_LISTING",
            "label" : "Assaying Listing",
            "object" : "Assaying",
            "objectAction" : "READ",
            "getDataFromExternalAPI" : false,
            "layout" : {
                "name" : "view",
                "selection" : "row",
                "options" : {
                    "search" : true,
                    "reload" : true,
                    "reset" : true,
                    "columnFilter" : true,
                    "filter" : true,
                    "export" : true
                }
            },
            "decisions" : [ 
                {
                    "objectAction" : "READ",
                    "label" : "CANCEL",
                    "btnClass" : "btn btn-outline-dark",
                    "position" : "bottom",
                    "style" : {
                        "margin-right" : "auto"
                    },
                    "outcomes" : []
                }, 
                {
                    "objectAction" : "CREATE",
                    "label" : "Next",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-success custom-btn",
                    "position" : "bottom",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_ASSAYING",
                            "data" : "output.assayinglisting",
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "Assaying got created successfully"
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
                            "name" : "assayinglisting",
                            "data" : "output.assayinglisting",
                            "showPopUp" : true
                        }
                    ]
                }
            ],
            "fields" : [ 
                {
                    "key" : "Elements",
                    "label" : "Elements",
                    "sort" : true,
                    "filter" : false
                }, 
                {
                    "key" : "Type",
                    "label" : "Type",
                    "sort" : true,
                    "filter" : false
                }, 
                {
                    "key" : "ProvisionalAssay",
                    "label" : "ProvisionalAssay",
                    "sort" : true,
                    "filter" : false,
                    "edit" : true
                }, 
                {
                    "key" : "AssayRule",
                    "label" : "AssayRule",
                    "sort" : true,
                    "filter" : false
                }
            ]
        },
        "_ST_CREATE_ASSAYING" : {
            "componentType" : "SystemTask",
            "object" : "Assaying",
            "objectAction" : "CREATE"
        }
    }
})

db.getCollection('reference_Meta').insert({
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
    "adviceWeightUnit" : "Weight Unit",
    "deliveryItemRefNo" : "Contract Delivery Item",
    "gmrBasicContractDeliveryItem" : "Contract Delivery Item",
    "gmrBasicParticleSize" : "Particle Size",
    "gmrBasicLotSize" : "Lot Size",
    "gmrBasicIncoterm" : "Incoterm",
    "gmrBasicSupplier" : "Supplier",
    "gmrBasicSupplierAddress" : "Supplier Address",
    "gmrBasicSupplierReference" : "Supplier Reference",
    "gmrBasicQuality" : "Quality",
    "gmrBasicExpectedArrivalDate" : "Expected Arrival Date",
    "gmrBasicDestination" : "Destination (Smelter)",
    "gmrBasicAdvicedNetWeight" : "Adviced Net Weight",
    "gmrBasicAdvicedNetWeightUnit" : "Adviced Net Weight Unit",
    "gmrBasicMaterialDescription" : "Material Description",
    "gmrBasicLoadingDate" : "Loading Date",
    "gmrBasicLoadingLocation" : "Loading Location",
    "gmrBasicCountryOfOrigin" : "Country Of Origin",
    "gmrBasicModeOfTransport" : "Mode Of Transport",
    "gmrBasicNumberOfContainers" : "Number Of Containers",
    "gmrBasicSupplierRepresentative" : "Supplier Representative",
    "gmrBasicSpecialInstructionsToSmelter" : "Special Instructions to Smelter",
    "assayingElements" : "Elements",
    "assayingType" : "Type",
    "assayingProvisionalAssay" : "Provisional Assay",
    "assayingRule" : "Assay Rule"
})

db.getCollection('reference_Meta').insert({
    "type" : "object",
    "name" : "Gmr_Basic",
    "label" : "GMR_BASIC",
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
        "gmrBasicContractDeliveryItem", 
        "gmrBasicParticleSize", 
        "gmrBasicLotSize", 
        "gmrBasicIncoterm", 
        "gmrBasicSupplier", 
        "gmrBasicSupplierAddress", 
        "gmrBasicSupplierReference", 
        "gmrBasicQuality", 
        "gmrBasicExpectedArrivalDate", 
        "gmrBasicDestination", 
        "gmrBasicAdvicedNetWeight", 
        "gmrBasicAdvicedNetWeightUnit", 
        "gmrBasicMaterialDescription", 
        "gmrBasicLoadingDate", 
        "gmrBasicLoadingLocation", 
        "gmrBasicCountryOfOrigin", 
        "gmrBasicModeOfTransport", 
        "gmrBasicNumberOfContainers", 
        "gmrBasicSupplierRepresentative", 
        "gmrBasicSpecialInstructionsToSmelter"
    ],
    "fields" : {
        "ContractDeliveryItem" : {
            "gmrBasicContractDeliveryItem" : "Contract Delivery Item",
            "labelKey" : "gmrBasicContractDeliveryItem",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "20"
        },
        "ParticleSize" : {
            "gmrBasicParticleSize" : "Particle Size",
            "labelKey" : "gmrBasicParticleSize",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "LotSize" : {
            "gmrBasicLotSize" : "Lot Size",
            "labelKey" : "gmrBasicLotSize",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "Incoterm" : {
            "gmrBasicIncoterm" : "Incoterm",
            "labelKey" : "gmrBasicIncoterm",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "Supplier" : {
            "gmrBasicSupplier" : "Supplier",
            "labelKey" : "gmrBasicSupplier",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "SupplierAddress" : {
            "gmrBasicSupplierAddress" : "Supplier Address",
            "labelKey" : "gmrBasicSupplierAddress",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "SupplierReference" : {
            "gmrBasicSupplierReference" : "Supplier Reference",
            "labelKey" : "gmrBasicSupplierReference",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : true
        },
        "Quality" : {
            "gmrBasicQuality" : "Quality",
            "labelKey" : "gmrBasicQuality",
            "type" : "dropdown",
            "dataType" : "String",
            "isRequired" : false
        },
        "ExpectedArrivalDate" : {
            "gmrBasicExpectedArrivalDate" : "Expected Arrival Date",
            "labelKey" : "gmrBasicExpectedArrivalDate",
            "type" : "datepicker",
            "isRequired" : false,
            "dataType" : "String"
        },
        "Destination" : {
            "gmrBasicDestination" : "Destination (Smelter)",
            "labelKey" : "gmrBasicDestination",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String"
        },
        "AdvicedNetWeight" : {
            "gmrBasicAdvicedNetWeight" : "Adviced Net Weight",
            "labelKey" : "gmrBasicAdvicedNetWeight",
            "type" : "textbox",
            "isRequired" : true,
            "dataType" : "number"
        },
        "AdvicedNetWeightUnit" : {
            "gmrBasicAdvicedNetWeightUnit" : "Adviced Net Weight Unit",
            "labelKey" : "gmrBasicAdvicedNetWeightUnit",
            "type" : "textbox",
            "isRequired" : true,
            "dataType" : "String"
        },
        "MaterialDescription" : {
            "gmrBasicMaterialDescription" : "Material Description",
            "labelKey" : "gmrBasicMaterialDescription",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "LoadingDate" : {
            "gmrBasicLoadingDate" : "Loading Date",
            "labelKey" : "gmrBasicLoadingDate",
            "type" : "datepicker",
            "isRequired" : true,
            "dataType" : "String"
        },
        "LoadingLocation" : {
            "gmrBasicLoadingLocation" : "Loading Location",
            "labelKey" : "gmrBasicLoadingLocation",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String"
        },
        "CountryOfOrigin" : {
            "gmrBasicCountryOfOrigin" : "Country Of Origin",
            "labelKey" : "gmrBasicCountryOfOrigin",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String"
        },
        "ModeOfTransport" : {
            "gmrBasicModeOfTransport" : "Mode Of Transport",
            "labelKey" : "gmrBasicModeOfTransport",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String"
        },
        "NumberOfContainers" : {
            "gmrBasicNumberOfContainers" : "Number Of Containers",
            "labelKey" : "gmrBasicNumberOfContainers",
            "type" : "textbox",
            "isRequired" : true,
            "dataType" : "number"
        },
        "SupplierRepresentative" : {
            "gmrBasicSupplierRepresentative" : "Supplier Representative",
            "labelKey" : "gmrBasicSupplierRepresentative",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String"
        },
        "SpecialInstructionsToSmelter" : {
            "gmrBasicSpecialInstructionsToSmelter" : "Special Instructions to Smelter",
            "labelKey" : "gmrBasicSpecialInstructionsToSmelter",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        }
    },
    "layout" : {
        "fields" : [ 
            [ 
                "ContractDeliveryItem", 
                "ParticleSize", 
                "LotSize", 
                "Incoterm", 
                "Supplier", 
                "SupplierAddress", 
                "SupplierReference", 
                "Quality", 
                "ExpectedArrivalDate", 
                "Destination"
            ], 
            [ 
                "AdvicedNetWeight", 
                "AdvicedNetWeightUnit", 
                "MaterialDescription", 
                "LoadingDate", 
                "LoadingLocation", 
                "CountryOfOrigin", 
                "ModeOfTransport", 
                "NumberOfContainers", 
                "SupplierRepresentative", 
                "SpecialInstructionsToSmelter"
            ]
        ]
    }
})

db.getCollection('reference_Meta').insert({
    "type" : "object",
    "name" : "Assaying",
    "label" : "ASSAYING",
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
        "assayingElements", 
        "assayingType", 
        "assayingProvisionalAssay", 
        "assayingRule"
    ],
    "fields" : {
        "Elements" : {
            "assayingElements" : "Elements",
            "labelKey" : "assayingElements",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "Type" : {
            "assayingType" : "Type",
            "labelKey" : "assayingType",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "ProvisionalAssay" : {
            "assayingProvisionalAssay" : "Provisional Assay",
            "labelKey" : "assayingProvisionalAssay",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "AssayRule" : {
            "assayingRule" : "Assay Rule",
            "labelKey" : "assayingRule",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        }
    },
    "layout" : {
        "fields" : [ 
            [ 
                "Elements", 
                "Type", 
                "ProvisionalAssay", 
                "AssayRule"
            ]
        ]
    }
})

--//@UNDO

db.getCollection('reference_Meta').remove({"type":"policy","refTypeName": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "User_Info"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "supplier"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "deliveryitem"});//
db.getCollection('reference_Meta').remove({"type":"message"});//
db.getCollection('reference_Meta').remove({"type":"Workflow","app": "supplierconnect"});//
