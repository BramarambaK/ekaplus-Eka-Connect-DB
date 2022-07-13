db.getCollection('reference_Meta').remove({"type":"policy","refTypeName": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "User_Info"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "supplier"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "deliveryitem"});//
db.getCollection('reference_Meta').remove({"type":"message"});//
db.getCollection('reference_Meta').remove({"type":"Workflow","app": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Gmr_Basic"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Assaying"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Packaging"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Recommendation"});//



db.getCollection('reference_Meta').insert({
    "title" : "Supplier Connect",
    "name" : "supplierconnect",
    "tenantID" : "",
    "type" : "app",
	"sys__UUID" : "467a28cc-bc93-4e38-8ff5-0a56ae128f3b",
    "platform_id" : "36",
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
                "src" : "assets/img/brand/boliden-logo.png",
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
                "apiMenuData" : [ 
                    {
                        "label" : "Supplier Connect",
                        "iconCls" : "insights-icon",
                        "menuItems" : [ 
                            {
                                "text" : "Supplier Connect",
                                "iconCls" : "",
                                "items" : [ 
                                    {
                                        "handler" : "/app/supplierconnect/6413bd7c-d358-4cfd-9bac-00a857b7f3f7/deliveryItemlisting/view",
                                        "text" : "Contract Items Open for Advice",
                                        "iconCls" : ""
                                    },
									{
                                        "handler" : "/app/supplierconnect/e18e966f-6fcd-4523-b035-e02c2bc4b5ec/supplierlisting/view",
                                        "text" : "Deliveries",
                                        "iconCls" : ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "aside" : {
            "fixed" : true,
            "display" : false
        }
    }
})//

db.getCollection('reference_Meta').insert({
    "name" : "supplierConnectAppPolicy",
    "type" : "policy",
    "refType" : "app",
	"refTypeId" : "467a28cc-bc93-4e38-8ff5-0a56ae128f3b",
    "refTypeName" : "supplierconnect",
    "tenantId" : "reference",
    "6413bd7c-d358-4cfd-9bac-00a857b7f3f7" : {
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
                },
                "1236" : {
                     "itemLevelFilters" : [ 
                        {
                            "key" : "cpName",
                            "operator" : "in",
                            "value" : [ 
                                "##user.cp"
                            ]
                        }
                    ],
                    "allowedItemLevelActions" : [ 
						"CREATE",
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
                "1231" : {
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
    },
    "e18e966f-6fcd-4523-b035-e02c2bc4b5ec" : {
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
                },
                "1236" : {
                    "itemLevelFilters" : [ 
                        {
                            "key" : "cpName",
                            "operator" : "in",
                            "value" : [ 
                                "##user.cp"
                            ]
                        }
                    ],
					
                    "allowedItemLevelActions" : [ 
						"CREATE",
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
				 "1231" : {
                    "allowedItemLevelActions" : [ 
						"CREATE",
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW",
						"APPROVE", 
                        "REJECT"
                    ],
                    "itemLevelFilters" : [],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        }
    },
    "c05cacf5-200c-4d97-8e8d-a67329ff286c" : {
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
                },
                "1236" : {
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
                "1231" : {
                    "allowedItemLevelActions" : [ 
                        "CREATE", 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW", 
                        "APPROVE", 
                        "REJECT"
                    ],
                    "itemLevelFilters" : [],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        }
    },
    "7bd6f722-684f-4b92-9f75-1fb94857ed85" : {
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
                "1236" : {
                    "allowedItemLevelActions" : [ 
                        "CREATE", 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW", 
                        "APPROVE", 
                        "REJECT"
                    ],
                    "itemLevelFilters" : [],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                },
                "1231" : {
                    "allowedItemLevelActions" : [ 
                        "CREATE", 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW", 
                        "APPROVE", 
                        "REJECT"
                    ],
                    "itemLevelFilters" : [],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        }
    },
    "66c97e4d-4168-4fd2-a79c-319c5d43b1db" : {
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
                 "1236" : {
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
                "1231" : {
                    "allowedItemLevelActions" : [ 
                        "CREATE", 
                        "READ", 
                        "UPDATE", 
                        "DELETE", 
                        "LISTVIEW", 
                        "APPROVE", 
                        "REJECT"
                    ],
                    "itemLevelFilters" : [],
                    "allowedGlobalActions" : [ 
                        "CREATE", 
                        "UPLOAD"
                    ]
                }
            }
        }
    },

"6b84c5c5-c015-4dc0-91f2-386f50cb391c" : {
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
})//

db.getCollection('reference_Meta').insert({
  
    "name" : "User_Info",
    "type" : "object",
	"sys__UUID" : "53a9f728-aec1-479c-a846-8a242f1755c0",
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
            "show" : true,
            "isRequired" : false
        },
        "createAccount" : {
            "createAccount" : "Create your account",
            "labelKey" : "createAccount",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "bankDetails" : {
            "bankDetails" : "Enter bank details",
            "labelKey" : "bankDetails",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "contactDetails" : {
            "contactDetails" : "Enter contact details",
            "labelKey" : "contactDetails",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "postalAddress" : {
            "postalAddress" : "Postal Address",
            "labelKey" : "postalAddress",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "userDetails" : {
            "userDetails" : "User's Details",
            "labelKey" : "userDetails",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "userRole" : {
            "userRole" : "User Role",
            "labelKey" : "userRole",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "successMessage" : {
            "successMessage" : "You have successfully registered",
            "labelKey" : "successMessage",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "username" : {
            "username" : "User Name",
            "labelKey" : "username",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "firstName" : {
            "firstName" : "First Name",
            "labelKey" : "firstName",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "name" : {
            "name" : "Name",
            "labelKey" : "name",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "lastName" : {
            "lastName" : "Last Name",
            "labelKey" : "lastName",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "address" : {
            "address" : "House no., Street name",
            "labelKey" : "address",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "addressDisplay" : {
            "addressDisplay" : "Address",
            "labelKey" : "addressDisplay",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "email" : {
            "email" : "Email",
            "labelKey" : "email",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "confirmEmail" : {
            "confirmEmail" : "Confirm Email",
            "labelKey" : "confirmEmail",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "password" : {
            "password" : "Password",
            "labelKey" : "password",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "confirmPassword" : {
            "confirmPassword" : "Confirm Password",
            "labelKey" : "confirmPassword",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "mobile" : {
            "mobile" : "Mobile No.",
            "labelKey" : "mobile",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "phone" : {
            "phone" : "Phone",
            "labelKey" : "phone",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "fax" : {
            "fax" : "Fax",
            "labelKey" : "fax",
            "type" : "hidden",
            "dataType" : "String",
            "show" : false,
            "isRequired" : false
        },
        "mobCountryCode" : {
            "mobCountryCode" : "Mob Country Code",
            "labelKey" : "mobCountryCode",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "phCountryCode" : {
            "phCountryCode" : "Phone Country Code",
            "labelKey" : "phCountryCode",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "faxCountryCode" : {
            "faxCountryCode" : "Fax Country Code",
            "labelKey" : "faxCountryCode",
            "type" : "hidden",
            "dataType" : "String",
            "show" : false,
            "isRequired" : false
        },
        "country" : {
            "country" : "Country",
            "labelKey" : "country",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "state" : {
            "state" : "State",
            "labelKey" : "state",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "city" : {
            "city" : "City",
            "labelKey" : "city",
            "type" : "text",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "uniqueId" : {
            "uniqueId" : "Unique Id",
            "labelKey" : "uniqueId",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "uniqueIdType" : {
            "uniqueIdType" : "Unique Id Type",
            "labelKey" : "uniqueIdType",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "customerType" : {
            "customerType" : "Customer Type",
            "labelKey" : "customerType",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "zipcode" : {
            "zipcode" : "ZIP code",
            "labelKey" : "zipcode",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "website" : {
            "website" : "Website",
            "labelKey" : "website",
            "type" : "hidden",
            "dataType" : "String",
            "show" : false,
            "isRequired" : false
        },
        "countryId" : {
            "countryId" : "Country Id",
            "labelKey" : "countryId",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "stateId" : {
            "stateId" : "State Id",
            "labelKey" : "stateId",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        },
        "term" : {
            "term" : "Term",
            "labelKey" : "term",
            "type" : "hidden",
            "dataType" : "String",
            "show" : true,
            "isRequired" : false
        }
    }
})//

db.getCollection('reference_Meta').insert({
    "name" : "supplier",
    "type" : "object",
	"sys__UUID" : "e18e966f-6fcd-4523-b035-e02c2bc4b5ec",
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
            "GMR Ref No" : "GMR Ref No",
            "labelKey" : "GMR Ref No"
        },
        "Contract Ref No" : {
            "Contract Ref No" : "Contract Ref No",
            "labelKey" : "Contract Ref No"
        },
        "Product" : {
            "Product" : "Product",
            "labelKey" : "Product"
        },
        "Quality Name" : {
            "Quality Name" : "Quality",
            "labelKey" : "Quality Name"
        },
        "Shipped Quantity" : {
            "Shipped Quantity" : "Shipped Quantity",
            "labelKey" : "Shipped Quantity"
        },
        "Weight Unit" : {
            "Weight Unit" : "Quantity Unit",
            "labelKey" : "Weight Unit"
        },
        "Sender Ref No" : {
            "Sender Ref No" : "Sender Ref No",
            "labelKey" : "Sender Ref No"
        },
        "Mode of Transport" : {
            "Mode of Transport" : "Mode of Transport",
            "labelKey" : "Mode of Transport"
        },
        "Container Size" : {
            "Container Size" : "Container Size",
            "labelKey" : "Container Size"
        },
        "Number of Containers" : {
            "Number of Containers" : "Number of Containers",
            "labelKey" : "Number of Containers"
        },
        "Warehouse" : {
            "Warehouse" : "Warehouse",
            "labelKey" : "Warehouse"
        },
        "Landing Date" : {
            "Landing Date" : "Landing Date",
            "labelKey" : "Landing Date"
        },
        "Wet Weight" : {
            "Wet Weight" : "Wet Weight",
            "labelKey" : "Wet Weight"
        },
        "Dry Weight" : {
            "Dry Weight" : "Dry Weight",
            "labelKey" : "Dry Weight"
        },
        "Latest Assay Type" : {
            "Latest Assay Type" : "Latest Assay Type",
            "labelKey" : "Latest Assay Type"
        },
        "GMR Due Date" : {
            "GMR Due Date" : "Gmr Due Date",
            "labelKey" : "GMR Due Date"
        },
        "Current Pricing Status" : {
            "Current Pricing Status" : "Current Pricing Status",
            "labelKey" : "Current Pricing Status"
        },
        "Latest Invoice Type" : {
            "Latest Invoice Type" : "Latest Invoice Type",
            "labelKey" : "Latest Invoice Type"
        },
        "Invoice Due Date" : {
            "Invoice Due Date" : "Invoice Due Date",
            "labelKey" : "Invoice Due Date"
        },
        "CP Name" : {
            "CP Name" : "CP Name",
            "labelKey" : "CP Name"
        },
        "GMR Created Date" : {
            "GMR Created Date" : "GMR Created Date",
            "labelKey" : "GMR Created Date"
        },
        "Expected Arrival Date" : {
            "Expected Arrival Date" : "Expected Arrival Date",
            "labelKey" : "Expected Arrival Date"
        },
        "WNS Date" : {
            "WNS Date" : "WNS Date",
            "labelKey" : "WNS Date"
        },
        "Marked For Umpire" : {
            "Marked For Umpire" : "Marked For Umpire",
            "labelKey" : "Marked For Umpire"
        },
        "Created By" : {
            "Created By" : "Created By",
            "labelKey" : "Created By"
        },
        "Last Updated Date" : {
            "Updated Date" : "Last Updated Date",
            "labelKey" : "Last Updated Date"
        },
        "Updated" : {
            "Updated By" : "Updated By",
            "labelKey" : "Updated"
        }
    },
    "layout" : {
        "fields" : []
    }
})//

db.getCollection('reference_Meta').insert({
    "type" : "workflow",
    "name" : "supplierWorkflow",
    "title" : "Supplier Workflow",
	"refTypeId" : "467a28cc-bc93-4e38-8ff5-0a56ae128f3b",
    "app" : "supplierconnect",
    "flow" : {
        "home" : {
            "componentType" : "UserTask",
            "object" : "6413bd7c-d358-4cfd-9bac-00a857b7f3f7",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view"
            },
            "workflow" : "deliveryItemlisting",
            "decisions" : []
        },
        "supplierlisting" : {
            "componentType" : "UserTask",
            "labelKey" : "GMR_LISTING",
            "label" : "Deliveries",
            "object" : "e18e966f-6fcd-4523-b035-e02c2bc4b5ec",
			"rows":"100",
            "theme" : "theme-grid-light",
            "objectAction" : "READ",
            "layout" : {
                "name" : "view",
                "theme" : "theme-grid-white",
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
                "host" : "http://connect.qa.ekaanalytics.com:99",
                "path" : "/spring/smartapp/collection/data",
                "method" : "GET",
                "responseDataKey" : "data",
                "queryParams" : {
                    "collectionName" : "GMR_Collection_Test",
                    "page" : "1",
                    "start" : "0",
                    "limit" : "1636"
                }
            },
            "getDataFromExternalAPI" : true,
            "decisions" : [ 
                {
                    "objectAction" : "READ",
                    "selection" : "custom-link",
                    "outcomes" : [ 
                        {
                            "name" : "viewgmrbasic",
                            "data" : "selected.supplierlisting"
                        }
                    ]
                }
            ],
            "fields" : [ 
                {
                    "key" : "GMR Ref No",
                    "label" : "GMR Ref No",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
                    "task" : "custom-link",
                    "category" : "link"
                }, 
                {
                    "key" : "Contract Ref No",
                    "label" : "Contract Ref No",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Product",
                    "label" : "Product",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Quality Name",
                    "label" : "Quality",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Shipped Quantity",
                    "label" : "Shipped Quantity",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Weight Unit",
                    "label" : "Quantity Unit",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Sender Ref No",
                    "label" : "Sender Ref No",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Mode of Transport",
                   "label" : "Mode of Transport",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Container Size",
                    "label" : "Container Size",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Number of Containers",
                    "label" : "Number of Containers",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Warehouse",
                    "label" : "Warehouse",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Number of Containers",
                    "label" : "Number of Containers",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Landing Date",
                    "label" : "Landing Date",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"dateformat":"yyyy-MM-dd"

                }, 
                {
                    "key" : "Wet Weight",
                    "label" : "Wet Weight",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"roundoff":"3"
                }, 
                {
                    "key" : "Dry Weight",
                    "label" : "Dry Weight",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"roundoff":"3"
                }, 
                {
                    "key" : "Latest Assay Type",
                    "label" : "Latest Assay Type",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "GMR Due Date",
                    "label" : "GMR Due Date",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"dateformat":"yyyy-MM-dd"
                }, 
                {
                    "key" : "Current Pricing Status",
                    "label" : "Current Pricing Status",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Latest Invoice Type",
                    "label" : "Latest Invoice Type",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Invoice Due Date",
                    "label" : "Invoice Due Date",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"dateformat":"yyyy-MM-dd"
                }, 
                {
                    "key" : "CP Name",
                    "label" : "CP Name",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "GMR Created Date",
                    "label" : "GMR Created Date",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"dateformat":"yyyy-MM-dd"
                }, 
                {
                    "key" : "Expected Arrival Date",
                    "label" : "Expected Arrival Date",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"dateformat":"yyyy-MM-dd"
                }, 
                {
                    "key" : "WNS Date",
                    "label" : "WNS Date",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false,
					"dateformat":"yyyy-MM-dd"

                }, 
                {
                    "key" : "Marked For Umpire",
                    "label" : "Marked For Umpire",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Created By",
                    "label" : "Created By",
                    "sort" : true,
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "Updated Date",
                    "label" : "Updated Date",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }, 
                {
                    "key" : "Updated",
                    "label" : "Updated By",
                    "sort" : true,
                    "filter" : false,
                    "edit" : false
                }
            ]
        },
        "deliveryItemlisting" : {
            "componentType" : "UserTask",
            "labelKey" : "DELIVER_IEM_LISTING",
            "label" : "Contract Items Open for Advice",
            "object" : "6413bd7c-d358-4cfd-9bac-00a857b7f3f7",
            "objectAction" : "READ",
            "apiInfo" : {
                "host" : "http://172.16.5.101:3333",
                "method" : "GET",
                "path" : "/collection/fetchDeliveryItems",
                "responseDataKey" : "data",
                "headers" : {
                    "username" : "e-bolprpa"
                }
            },
            "layout" : {
                "name" : "view",
                "selection" : "row",
                "theme" : "theme-grid-white",
                "cache" : false,
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
            "getDataFromExternalAPI" : true,
            "decisions" : [ 
                {
                    "objectAction" : "CREATE",
                    "label" : "Advice Delivery",
                    "labelkey" : "CREATE_GMR_BASIC",
                    "btnClass" : "btn-success",
                    "iconClass" : "createicon",
                    "selection" : "row",
                    "outcomes" : [ 
                        {
                            "name" : "creategmrbasic",
                            "data" : "selected.deliveryItemlisting"
                        }
                    ]
                }, 
                {
                    "objectAction" : "READ",
                    "selection" : "custom-link",
                    "outcomes" : [ 
                        {
                            "name" : "attributedetails",
                            "displayType" : "popup",
                            "popupClass" : "edit-modal",
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
                    "filter" : true,
                    "edit" : false
                }, 
                {
                    "key" : "openQty",
                    "label" : "Open Weight",
                    "sort" : true,
                    "filter" : true
                }, 
                {
                    "category" : "link",
                    "filter" : false,
                    "key" : "attributes",
                    "label" : "Attributes",
                    "sort" : true,
                    "task" : "custom-link"
                }, 
                {
                    "filter" : true,
                    "key" : "fromDate",
                    "label" : "From Date",
                    "sort" : true
                }, 
                {
                    "filter" : true,
                    "key" : "toDate",
                    "label" : "To Date",
                    "sort" : true
                }
            ]
        },
        "attributedetails" : {
            "componentType" : "UserTask",
            "labelKey" : "DETAILS_DERIVATIVE_ORDER",
            "label" : "Attributes",
            "object" : "6413bd7c-d358-4cfd-9bac-00a857b7f3f7",
            "objectAction" : "READ",
            "getDataFromExternalAPI" : true,
            "layout" : {
                "name" : "detailspopup",
                "topLine" : {
                    "display" : true
                },
                 "data" : {
                    "url" : "/common/getContractInfo",
                    "input" : {
                        "userName" : "e-bolprpa"
                    }
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
                    "key" : "elementName",
                    "label" : "Element Name",
                    "placement" : "ptableChemical"
                }, 
                {
                    "key" : "minValue",
                    "label" : "Min Value",
                    "placement" : "ptableChemical"
                }, 
                {
                    "key" : "maxValue",
                   "label" : "Max Value",
                    "placement" : "ptableChemical"
                }, 
                {
                    "key" : "attributeName",
                    "label" : "Attribute Name",
                    "placement" : "ptablePhysical"
                }, 
                {
                    "key" : "attributeValue",
                    "label" : "Attribute Value",
                    "placement" : "ptablePhysical"
                }
            ],
            "decisions" : [ 
                {
                    "objectAction" : "READ",
                    "label" : "Close",
                    "type" : "close",
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
                    "type" : "close",
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
            "label" : "Delivery Details",
            "object" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
            "objectAction" : "CREATE",
            "getDataFromExternalAPI" : true,
            "input" : [ 
                "deliveryItemRefNo", 
                "cpAddress", 
                "cpName", 
                "pcdiId", 
                "qualityName"
            ],
            "layout" : {
                "name" : "create",
                "type" : "row",
                "backbutton" : true,
                "menu" : true,
                "header" : {
                    "title" : "Advice Delivery - ",
                    "field" : "deliveryItemRefNo"
                },
                "topLine" : {
                    "display" : true
                },
                "formStyle" : {
                    "max-width" : "100%",
                    "margin" : "auto",
                    "border-top-style" : "solid",
                    "border-top-width" : "1px",
                    "border-top-color" : "#dee2e5",
                    "border-left-style" : "solid",
                    "border-left-width" : "1px",
                    "border-left-color" : "#dee2e5",
                    "border-right-style" : "solid",
                    "border-right-width" : "1px",
                    "border-right-color" : "#dee2e5",
                    "padding" : "7px"
                },
                "defaultFormItemStyle" : {
                    "justify-content" : "flex-start",
                    "background" : "white"
                },
                "defaultFormLabelStyle" : {},
                "defaultFormValueStyle" : {}
            },
            "fields" : [ 
                [ 
                    {
                        "key" : "pcdiId",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "city",
                        "type" : "hidden",
                        "value" : "City",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "qualityName",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "dischargeCountryId",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "dischargeCityId",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "qtyUnitId",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "qtyUnitName",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "supplierId",
                        "type" : "hidden",
                        "style" : {
                            "display" : "none"
                        }
                    }, 
                    {
                        "key" : "SupplierReference",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
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
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "Incoterm",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "incoLocation",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "Quality",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "particleSize",
                        "suffix" : "",
                        "type" : "readOnlyTextfield",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
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
                            "margin-top" : "10px"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "containerFlag",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "LoadingDate",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "LoadingLocationCountry",
                        "suffix" : "",
                       "style" : {
                            "width" : "120px"
                        },
                        "formItemStyle" : {
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "LoadingLocationCity",
                        "suffix" : "",
                        "style" : {
                            "width" : "150px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
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
                            "margin-top" : "10px"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "SupplierRepresentative",
                        "suffix" : "",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }
                ], 
                [ 
                    {
                        "key" : "deliveryItemRefNo",
                        "suffix" : "",
                        "type" : "readOnlyTextfield",
                        "formItemStyle" : {
                            "width" : "270px"
                        },
                        "style" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "cpName",
                        "suffix" : "",
                        "type" : "readOnlyTextfield",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
                        }
                    }, 
                    {
                        "key" : "cpAddress",
                        "suffix" : "",
                        "type" : "readOnlyTextfield",
                        "style" : {
                            "width" : "200px"
                        },
                        "formItemStyle" : {
                            "margin-right" : "20px",
                            "margin-top" : "10px"
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
                    "objectAction" : "UPDATE",
                    "label" : "Next",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-success custom-btn",
                    "position" : "bottom",
                    "type" : "submit",
                    "task" : "creategmrbasic",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_GMR_BASIC",
                            "data" : "output.creategmrbasic",
                            "appendMsg" : false,
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
                            "name" : "createpackaging",
                            "data" : "output._ST_CREATE_GMR_BASIC"
                        }
                    ]
                }
            ]
        },
        "_ST_CREATE_GMR_BASIC" : {
            "componentType" : "SystemTask",
            "object" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
            "objectAction" : "CREATE"
        },
        "assayinglisting" : {
            "componentType" : "UserTask",
            "labelKey" : "Assaying_LISTING",
            "label" : "Assaying Listing",
            "object" : "7bd6f722-684f-4b92-9f75-1fb94857ed85",
            "objectAction" : "UPDATE",
            "getDataFromExternalAPI" : true,
            "layout" : {
                "name" : "assay",
                "selection" : "row",
                "header" : {
                    "title" : "Create GMR - ",
                    "field" : "deliveryItemRefNo"
                },
                "backButton" : true,
                "options" : {
                    "search" : false,
                    "reload" : false,
                    "reset" : false,
                    "columnFilter" : false,
                    "filter" : false,
                    "export" : false
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
                    "outcomes" : [ 
                        {
                            "name" : "deliveryItemlisting"
                        }
                    ]
                }, 
                {
                    "objectAction" : "UPDATE",
                    "label" : "Submit",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-success custom-btn",
                    "position" : "bottom",
                    "type" : "submit",
                    "task" : "assayinglisting",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_ASSAYING",
                            "data" : "output.assayinglisting",
                            "appendMsg" : false,
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
                            "name" : "_EXT_CREATE_GMR",
                            "appendPlaceHolderToPopUpMsg" : [ 
                                {
                                    "outputTask" : "output._EXT_CREATE_GMR",
                                    "value" : "gmrRefNo"
                                }
                            ],
                            "appendMsg" : true,
                            "result" : {
                                "success" : {
                                    "message" : "GMR got created successfully"
                                },
                                "failure" : {
                                    "message" : "Please fix errors in external task"
                                },
                                "successWithWarning" : {
                                    "message" : "Order got created with some errors"
                                }
                            },
                            "data" : "output.assayinglisting"
                        }, 
                        {
                            "name" : "supplierlisting",
                            "showToaster" : true
                        }
                    ]
                }
            ],
            "fields" : [ 
                {
                    "key" : "Element",
                    "label" : "Element",
                    "sort" : true,
                    "filter" : false
                }, 
                {
                    "key" : "EstimatedValue",
                    "label" : "Provisional Assay",
                    "sort" : true,
                    "filter" : false,
                    "edit" : true
                }
            ]
        },
        "_ST_CREATE_ASSAYING" : {
            "componentType" : "SystemTask",
            "object" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
            "objectAction" : "UPDATE"
        },
        "_EXT_CREATE_GMR" : {
            "componentType" : "ExtSystemTask",
            "object" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
            "objectAction" : "CREATE",
            "apiInfo" : {
                "host" : "http://172.16.5.101:3333",
                "path" : "/collection/createGmr",
                "method" : "POST",
                "body" : {},
                "useInputMapping" : false,
                "inputMapping" : {},
                "headers" : {
                    "X-ObjectAction" : "CREATE"
                }
            }
        },
        "createpackaging" : {
            "componentType" : "UserTask",
            "labelKey" : "CREATE_PACKAGING",
            "label" : "Packaging Details",
            "object" : "66c97e4d-4168-4fd2-a79c-319c5d43b1db",
            "objectAction" : "UPDATE",
            "layout" : {
                "name" : "pack",
                "type" : "row",
                "header" : {
                    "title" : "Create GMR - ",
                    "field" : "deliveryItemRefNo"
                },
                "backButton" : true
            },
            "fields" : [],
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
                    "objectAction" : "UPDATE",
                    "label" : "Next",
                    "labelkey" : "REVIEW",
                    "btnClass" : "btn-success custom-btn",
                    "position" : "bottom",
                    "type" : "submit",
                    "task" : "createpackaging",
                    "outcomes" : [ 
                        {
                            "name" : "_ST_CREATE_PACKAGING",
                            "data" : "output.createpackaging",
                            "appendMsg" : false,
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
                            "data" : "output._ST_CREATE_PACKAGING"
                        }
                    ]
                }
            ]
        },
        "_ST_CREATE_PACKAGING" : {
            "componentType" : "SystemTask",
            "object" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
            "objectAction" : "UPDATE"
        },
        "gmrlisting" : {
            "componentType" : "UserTask",
            "labelKey" : "Gmr_LISTING",
            "label" : "Gmr Listing",
            "object" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
            "objectAction" : "UPDATE",
            "getDataFromExternalAPI" : true,
            "layout" : {
                "name" : "gmr"
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
                    "outcomes" : [ 
                        {
                            "name" : "supplierlisting"
                        }
                    ]
              }
		   ],
            "fields" : []
        },
        "viewgmrbasic" : {
            "componentType" : "UserTask",
            "labelKey" : "VIEW_GMR_BASIC",
            "label" : "View Delivery",
            "object" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
            "objectAction" : "READ",
			"url" : {
                "connectApi" : "http://172.16.5.101:3333/collection/assayAndStockList",
                "ctrmApi" : "http://192.168.1.169:6001/api/logistic/viewGmr"
            }, 
            "layout" : {
                "name" : "gmr",
				"key" : "GMR Ref No"
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
                    "objectAction" : "READ",
                    "label" : "CANCEL",
                    "btnClass" : "btn btn-outline-dark",
                    "position" : "bottom",
                    "style" : {
                        "margin-right" : "auto"
                    },
                    "outcomes" : [ 
                        {
                            "name" : "supplierlisting"
                        }
                    ]
                }
            ]
        }
    }
})//

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
    "qtyUnitId" : "Internal Quantity Item",
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
    "gmrBasicContainerFlag" : "Container",
    "gmrBasicSupplierRepresentative" : "Supplier Representative",
    "gmrBasicSpecialInstructionsToSmelter" : "Special Instructions to Smelter",
    "gmrBasicLoadingLocationCity" : "Loading City",
    "gmrBasicLoadingLocationCountry" : "Loading Country",
    "gmrpcdiId" : "pcdi id",
    "assayingElements" : "Elements",
    "assayingEstimatedValues" : "Estimated Values",
    "quotaOpenQty" : "Open Weight",
    "openQty" : "Open Weight"
})//

db.getCollection('reference_Meta').insert({
	"type" : "object",
    "name" : "Gmr_Basic",
    "label" : "GMR_BASIC",
    "label_key" : "",
    "tenantID" : "",
    "version" : "2",
	"sys__UUID" : "c05cacf5-200c-4d97-8e8d-a67329ff286c",
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
        "gmrBasicLoadingLocationCountry", 
        "gmrBasicLoadingLocationCity", 
        "gmrBasicCountryOfOrigin", 
        "gmrBasicModeOfTransport", 
        "gmrBasicContainerFlag", 
        "gmrBasicSupplierRepresentative", 
        "gmrBasicSpecialInstructionsToSmelter"
    ],
    "fields" : {
        "pcdiId" : {
            "pcdiId" : "Internal Delivery Item",
            "labelKey" : "pcdiId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false,
            "isReqInDropDownFilter" : true,
            "value" : "selected.deliveryItemlisting.pcdiId"
        },
		"deliveryItemRefNo1" : {
            "deliveryItemRefNo" : "Internal Delivery Item",
            "labelKey" : "deliveryItemRefNo",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false,
            "isReqInDropDownFilter" : true,
            "value" : "selected.deliveryItemlisting.deliveryItemRefNo"
        },
        "city" : {
            "city" : "City",
            "labelKey" : "city",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
		"qualityName" : {
            "qualityName" : "Quality Name",
            "labelKey" : "qualityName",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "dischargeCountryId" : {
            "dischargeCountryId" : "",
            "labelKey" : "dischargeCountryId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "dischargeCityId" : {
            "dischargeCityId" : "",
            "labelKey" : "dischargeCityId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "deliveryItemRefNo" : {
            "gmrBasicContractDeliveryItem" : "Contract Delivery Item",
            "labelKey" : "gmrBasicContractDeliveryItem",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false,
            "length" : "20"
        },
        "particleSize" : {
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
       "incoTermId" : {
            "gmrBasicIncoterm" : "Incoterm",
            "labelKey" : "gmrBasicIncoterm",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "cpName" : {
            "gmrBasicSupplier" : "Supplier",
            "labelKey" : "gmrBasicSupplier",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "cpAddress" : {
            "gmrBasicSupplierAddress" : "Supplier Address",
            "labelKey" : "gmrBasicSupplierAddress",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "SupplierReference" : {
            "gmrBasicSupplierReference" : "Supplier Reference Id",
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
            "isRequired" : true,
			"dropdownValue" : "qualityName",
            "serviceKey" : "contractQuality",
            "parentFromPrevScreen" : true,
            "parent" : [ 
                "pcdiId", 
                "deliveryItemRefNo1"
            ],
            "children" : [ 
                "particleSize", 
                "maxLotSize", 
                "qtyUnitId", 
                "qtyUnitName", 
                "supplierId", 
                "supplierName"
            ]
        },
        "ExpectedArrivalDate" : {
            "gmrBasicExpectedArrivalDate" : "Expected Arrival Date",
            "labelKey" : "gmrBasicExpectedArrivalDate",
            "type" : "datepicker",
            "isRequired" : true,
            "format" : "yyyy-MM-dd",
	        "comparison" : [ 
                 {
	                    "compareTo" : "LoadingDate",
	                    "operator" : "=>"
                 }
	         ],
	        "dataType" : "date"
        },
        "incoLocation" : {
            "gmrBasicDestination" : "Destination (Smelter)",
            "labelKey" : "gmrBasicDestination",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "incoTermDestination",
            "parentFromPrevScreen" : true,
            "parent" : [ 
                "pcdiId", 
                "deliveryItemRefNo1"
            ],
            "children" : [ 
                "incoterm", 
                "incoTermId", 
                "city", 
                "dischargeCountryId", 
                "dischargeCityId"
            ]
        },
        "AdvicedNetWeight" : {
            "gmrBasicAdvicedNetWeight" : "Adviced Net Weight",
            "labelKey" : "gmrBasicAdvicedNetWeight",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "AdvicedNetWeightUnit" : {
            "gmrBasicAdvicedNetWeightUnit" : "Adviced Net Weight Unit",
            "labelKey" : "gmrBasicAdvicedNetWeightUnit",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "MaterialDescription" : {
            "gmrBasicMaterialDescription" : "Material Description",
            "labelKey" : "gmrBasicMaterialDescription",
            "type" : "textbox",
            "isRequired" : true,
            "dataType" : "String"
        },
        "LoadingDate" : {
            "gmrBasicLoadingDate" : "Loading Date",
            "labelKey" : "gmrBasicLoadingDate",
            "type" : "datepicker",
            "isRequired" : true,
            "format" : "yyyy-MM-dd",
            "comparison" : [ 
                 {
	                    "compareTo" : "currentDate",
	                    "operator" : "=>"
                 }
	         ],
	        "dataType" : "date"
        },
        "LoadingLocationCountry" : {
            "gmrBasicLoadingLocationCountry" : "Loading Location",
            "labelKey" : "gmrBasicLoadingLocationCountry",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "countriesComboDataFromDB",
            "children" : [ 
                "LoadingLocationCity"
            ]
        },
        "LoadingLocationCity" : {
            "gmrBasicLoadingLocationCity" : "",
            "labelKey" : "gmrBasicLoadingLocationCity",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "cityComboDataFromDB",
            "parent" : [ 
                "LoadingLocationCountry", 
                "city"
            ]
        },
        "CountryOfOrigin" : {
            "gmrBasicCountryOfOrigin" : "Country Of Origin",
            "labelKey" : "gmrBasicCountryOfOrigin",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "countriesComboDataFromDB"
        },
        "containerFlag" : {
            "gmrBasicContainerFlag" : "Container",
            "labelKey" : "gmrBasicContainerFlag",
            "type" : "dropdown",
            "isRequired" : true,
            "dataType" : "String",
            "serviceKey" : "loose"
        },
        "SupplierRepresentative" : {
            "gmrBasicSupplierRepresentative" : "Supplier Representative",
            "labelKey" : "gmrBasicSupplierRepresentative",
            "type" : "dropdown",
            "isRequired" : false,
            "dataType" : "String",
            "serviceKey" : "businesspartnercontactperson",
            "dependsOn" : [ 
                "INSPECTIONAGENCY"
            ]
        },
        "SpecialInstructionsToSmelter" : {
            "gmrBasicSpecialInstructionsToSmelter" : "Special Instructions to Smelter",
            "labelKey" : "gmrBasicSpecialInstructionsToSmelter",
            "type" : "textbox",
            "isRequired" : false,
            "dataType" : "String"
        },
        "Element" : {
            "assayingElements" : "Elements",
            "labelKey" : "assayingElements",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "EstimatedValue" : {
            "assayingEstimatedValues" : "Estimated Values",
            "labelKey" : "assayingEstimatedValues",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "modeOfTransport" : {
            "modeOfTransport" : "Mode Of Transport ",
            "labelKey" : "modeOfTransport",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "maxLotSize" : {
            "maxLotSize" : "Max Lot Size",
            "labelKey" : "maxLotSize",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "qtyUnitId" : {
            "qtyUnitId" : "Quantity Unit Id",
            "labelKey" : "qtyUnitId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "qtyUnitName" : {
            "qtyUnitName" : "Quanity Unit Name",
            "labelKey" : "qtyUnitName",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "supplierId" : {
            "supplierId" : "Supplier Id",
            "labelKey" : "supplierId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "advicedNetweight" : {
            "advicedNetweight" : "Adviced Netweight",
            "labelKey" : "advicedNetweight",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "noOfContainers" : {
            "noOfContainers" : "No Of Containers",
            "labelKey" : "noOfContainers",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "containerDetails" : {
            "containerDetails" : "Container Details",
            "labelKey" : "containerDetails",
            "type" : "textbox",
            "dataType" : "String",
            "isRequired" : false
        },
        "assaying" : {
            "assaying" : "Assaying",
            "labelKey" : "assaying",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "response" : {
            "response" : "response",
            "labelKey" : "response",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        }
    },
    "layout" : {
        "fields" : [ 
            [ 
                "pcdiId", 
                "city", 
				"qualityName",
                "deliveryItemRefNo", 
                "deliveryItemRefNo1", 
                "maxLotSize", 
                "qtyUnitId", 
                "qtyUnitName", 
                "supplierId", 
                "particleSize", 
                "LotSize", 
                "incoTermId", 
                "cpName", 
                "cpAddress", 
                "SupplierReference", 
                "Quality", 
                "ExpectedArrivalDate", 
                "incoLocation", 
                "Element", 
                "EstimatedValue", 
                "dischargeCityId", 
                "dischargeCountryId"
            ], 
            [ 
                "AdvicedNetWeight", 
                "AdvicedNetWeightUnit", 
                "MaterialDescription", 
                "LoadingDate", 
                "LoadingLocationCountry", 
                "LoadingLocationCity", 
                "CountryOfOrigin", 
                "ModeOfTransport", 
                "containerFlag", 
                "SupplierRepresentative", 
                "SpecialInstructionsToSmelter"
            ]
        ]
    }
})

db.getCollection('reference_Meta').insert({
    "name" : "deliveryitem",
    "label" : "Contract Delivery item",
    "type" : "object",
	"sys__UUID" : "6413bd7c-d358-4cfd-9bac-00a857b7f3f7",
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
        "quotaOpenQty", 
		"openQty", 
        "quotaMonth"
    ],
    "fields" : {
        "qualityName" : {
            "qualityName" : "Quality",
            "labelKey" : "qualityName",
            "dataType" : "String"
        },
        "attributes" : {
            "attributes" : "Atrributes",
            "labelKey" : "attributes",
            "dataType" : "String"
        },
        "deliveryItemRefNo" : {
            "deliveryItemRefNo" : "Contract Delivery Item",
            "labelKey" : "deliveryItemRefNo",
            "isRequired" : false
        },
        "openQty" : {
            "openQty" : "Open Weight",
            "labelKey" : "openQty",
            "dataType" : "String"
        },
        "fromDate" : {
            "fromDate" : "From Date",
            "labelKey" : "fromDate",
            "dataType" : "String"
        },
        "toDate" : {
            "toDate" : "To Date",
            "labelKey" : "toDate",
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
   
    "type" : "object",
    "name" : "Packaging",
    "label" : "PACKAGING",
	 "sys__UUID" : "66c97e4d-4168-4fd2-a79c-319c5d43b1db",
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
    "translatableKeys" : [],
    "fields" : {
        "modeOfTransport" : {
            "modeOfTransport" : "Mode Of Transport",
            "labelKey" : "modeOfTransport",
            "type" : "hidden",
            "dataType" : "String",
            "serviceKey" : "modeOfTransport",
            "isRequired" : false
        },
        "transportId" : {
            "transportId" : "Transport Id",
            "labelKey" : "transportId",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "noOfContainers" : {
            "noOfContainers" : "Number Of Containers",
            "labelKey" : "noOfContainers",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "advicedNetweight" : {
            "advicedNetweight" : "Adviced Net Weight",
            "labelKey" : "advicedNetweight",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "maxLotSize" : {
            "maxLotSize" : "Max Lot Size",
            "labelKey" : "maxLotSize",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "containerDetails" : {
            "containerDetails" : "Container",
            "labelKey" : "containerDetails",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "containerNo" : {
            "containerNo" : "Container No",
            "labelKey" : "containerNo",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "containerSize" : {
            "containerSize" : "Container Size",
            "labelKey" : "containerSize",
            "type" : "hidden",
            "dataType" : "String",
            "serviceKey" : "containerSize",
            "isRequired" : false
        },
        "sealNo" : {
            "sealNo" : "Seal No",
            "labelKey" : "sealNo",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "loose" : {
            "loose" : "Loose",
            "labelKey" : "loose",
            "type" : "hidden",
            "dataType" : "String",
            "serviceKey" : "loose",
            "isRequired" : false
        },
        "bags" : {
            "bags" : "Bags",
            "labelKey" : "bags",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "pallets" : {
            "pallets" : "Pallets",
            "labelKey" : "pallets",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "drums" : {
            "drums" : "Drums",
            "labelKey" : "drums",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "totalPackage" : {
            "totalPackage" : "Total Package",
            "labelKey" : "totalPackage",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "netWeight" : {
            "netWeight" : "Net Weight",
            "labelKey" : "netWeight",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "grossWeight" : {
            "grossWeight" : "Gross Weight",
            "labelKey" : "grossWeight",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "tareWeight" : {
            "tareWeight" : "Tare Weight",
            "labelKey" : "tareWeight",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        },
        "boxes" : {
            "boxes" : "Boxes",
            "labelKey" : "boxes",
            "type" : "hidden",
            "dataType" : "String",
            "isRequired" : false
        }
    },
    "layout" : {
        "fields" : []
    }
})

db.getCollection('reference_Meta').insert({
	"type" : "object",
    "name" : "Recommendation",
    "fields" : {
        "generalDetails" : {
            "generalDetails" : "generalDetails",
            "labelKey" : "generalDetails",
            "isRequired" : false
        }
    },
    "sys__UUID" : "6b84c5c5-c015-4dc0-91f2-386f50cb391c"
	
})
--//@UNDO

db.getCollection('reference_Meta').remove({"type":"policy","refTypeName": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"app","name": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "User_Info"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "supplier"});//
db.getCollection('reference_Meta').remove({"type": "object","name": "deliveryitem"});//
db.getCollection('reference_Meta').remove({"type":"message"});//
db.getCollection('reference_Meta').remove({"type":"Workflow","app": "supplierconnect"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Gmr_Basic"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Assaying"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Packaging"});//
db.getCollection('reference_Meta').remove({"type":"object","name": "Recommendation"});//