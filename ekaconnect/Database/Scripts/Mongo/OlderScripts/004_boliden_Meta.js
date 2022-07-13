db.getCollection('boliden_Meta').insert({
    
    "name" : "User_Info",
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
    "translatableKeys" : [ 
        "register", 
        "createAccount", 
        "contactDetails", 
        "bankDetails", 
        "successMessage", 
        "userNameValidate", 
        "emailValidateRequired", 
        "emailValidateIncorrect", 
        "passwordValidateRequired", 
        "passwordValidateIncorrect", 
        "firstNameValidate", 
        "addressValidate", 
        "userName", 
        "firstName", 
        "lastName", 
        "email", 
        "password", 
        "confirmPassword", 
        "mobile", 
        "phone", 
        "fax", 
        "address", 
        "country", 
        "state", 
        "city", 
        "zipcode", 
        "website", 
        "accountHolderName", 
        "accountType", 
        "bankAddress", 
        "bankName", 
        "bankCountry", 
        "bankState", 
        "bankCity", 
        "currencyName"
    ],
    "fields" : {
        "register" : {
            "register" : "Register",
            "labelKey" : "register",
            "type" : "hidden",
            "dataType" : "String"
        },
        "createAccount" : {
            "createAccount" : "Create your account",
            "labelKey" : "createAccount",
            "type" : "hidden",
            "dataType" : "String"
        },
        "contactDetails" : {
            "contactDetails" : "Enter contact details",
            "labelKey" : "contactDetails",
            "type" : "hidden",
            "dataType" : "String"
        },
        "bankDetails" : {
            "bankDetails" : "Enter bank details",
            "labelKey" : "bankDetails",
            "type" : "hidden",
            "dataType" : "String"
        },
        "successMessage" : {
            "successMessage" : "You have successfully registered",
            "labelKey" : "successMessage",
            "type" : "hidden",
            "dataType" : "String"
        },
        "userNameValidate" : {
            "userNameValidate" : "UserName is required",
            "labelKey" : "userNameValidate",
            "type" : "hidden",
            "dataType" : "String"
        },
        "emailValidateRequired" : {
            "emailValidateRequired" : "Email is required",
            "labelKey" : "emailValidateRequired",
            "type" : "hidden",
            "dataType" : "String"
        },
        "emailValidateIncorrect" : {
            "emailValidateIncorrect" : "Email must be a valid email address",
            "labelKey" : "emailValidateIncorrect",
            "type" : "hidden",
            "dataType" : "String"
        },
        "passwordValidateRequired" : {
            "passwordValidateRequired" : "Password is required",
            "labelKey" : "passwordValidateRequired",
            "type" : "hidden",
            "dataType" : "String"
        },
        "passwordValidateIncorrect" : {
            "passwordValidateIncorrect" : "Password must be at least 6 characters",
            "labelKey" : "passwordValidateIncorrect",
            "type" : "hidden",
            "dataType" : "String"
        },
        "firstNameValidate" : {
            "firstNameValidate" : "First Name is required",
            "labelKey" : "firstNameValidate",
            "type" : "hidden",
            "dataType" : "String"
        },
        "addressValidate" : {
            "addressValidate" : "Address field cannot be empty",
            "labelKey" : "addressValidate",
            "type" : "hidden",
            "dataType" : "String"
        },
        "userName" : {
            "userName" : "User Name",
            "labelKey" : "userName",
            "type" : "hidden",
            "dataType" : "String"
        },
        "firstName" : {
            "firstName" : "First Name",
            "labelKey" : "firstName",
            "type" : "hidden",
            "dataType" : "String"
        },
        "lastName" : {
            "lastName" : "Last Name",
            "labelKey" : "lastName",
            "type" : "hidden",
            "dataType" : "String"
        },
        "address" : {
            "address" : "Address",
            "labelKey" : "address",
            "type" : "hidden",
            "dataType" : "String"
        },
        "email" : {
            "email" : "Email",
            "labelKey" : "email",
            "type" : "hidden",
            "dataType" : "String"
        },
        "password" : {
            "password" : "Password",
            "labelKey" : "password",
            "type" : "hidden",
            "dataType" : "String"
        },
        "confirmPassword" : {
            "confirmPassword" : "Confirm Password",
            "labelKey" : "confirmPassword",
            "type" : "hidden",
            "dataType" : "String"
        },
        "mobile" : {
            "mobile" : "Mobile Number",
            "labelKey" : "mobile",
            "type" : "hidden",
            "dataType" : "String"
        },
        "phone" : {
            "phone" : "Phone Number",
            "labelKey" : "phone",
            "type" : "hidden",
            "dataType" : "String"
        },
        "fax" : {
            "fax" : "Fax Number",
            "labelKey" : "fax",
            "type" : "hidden",
            "dataType" : "String"
        },
        "country" : {
            "country" : "Country Name",
            "labelKey" : "country",
            "type" : "hidden",
            "dataType" : "String"
        },
        "state" : {
            "state" : "State Name",
            "labelKey" : "state",
            "type" : "hidden",
            "dataType" : "String"
        },
        "city" : {
            "city" : "City Name",
            "labelKey" : "city",
            "type" : "hidden",
            "dataType" : "String"
        },
        "zipcode" : {
            "zipcode" : "Zipcode",
            "labelKey" : "zipcode",
            "type" : "hidden",
            "dataType" : "String"
        },
        "website" : {
            "website" : "Website",
            "labelKey" : "website",
            "type" : "hidden",
            "dataType" : "String"
        },
        "accountHolderName" : {
            "accountHolderName" : "Account Holder Name",
            "labelKey" : "accountHolderName",
            "type" : "hidden",
            "dataType" : "String"
        },
        "accountType" : {
            "accountType" : "Account Type",
            "labelKey" : "accountType",
            "type" : "hidden",
            "dataType" : "String"
        },
        "bankName" : {
            "bankName" : "Bank Name",
            "labelKey" : "bankName",
            "type" : "hidden",
            "dataType" : "String"
        },
        "bankAddress" : {
            "bankAddress" : "Bank Address",
            "labelKey" : "bankAddress",
            "type" : "hidden",
            "dataType" : "String"
        },
        "bankCountry" : {
            "bankCountry" : "Bank Country",
            "labelKey" : "bankCountry",
            "type" : "hidden",
            "dataType" : "String"
        },
        "bankState" : {
            "bankState" : "Bank State",
            "labelKey" : "bankState",
            "type" : "hidden",
            "dataType" : "String"
        },
        "bankCity" : {
            "bankCity" : "Bank City",
            "labelKey" : "bankCity",
            "type" : "hidden",
            "dataType" : "String"
        },
        "currencyName" : {
            "currencyName" : "Currency Name",
            "labelKey" : "currencyName",
            "type" : "hidden",
            "dataType" : "String"
        }
    }
});