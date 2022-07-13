db.getCollection('reference_Data').remove({"type":"property"});//

db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://connect.qa2.ekaanalytics.com",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "auth_server",
    "sys__createdOn" : ISODate("2019-04-17T04:53:36.873Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "${platform_url}/cac-security/api/oauth/token",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "auth_url",
    "sys__createdOn" : ISODate("2019-04-17T04:54:09.390Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://reference.qa2.ekaanalytics.com/spring/smartapp/login?type=1",
    "propertyLevel" : "tenant",
    "type" : "property",
    "propertyName" : "client_url",
    "sys__createdOn" : ISODate("2019-04-17T04:54:24.242Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://192.168.1.225:6061",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "connect",
    "sys__createdOn" : ISODate("2019-04-17T04:55:28.032Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://192.168.1.225:6060",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "connect_ui_url",
    "sys__createdOn" : ISODate("2019-04-17T04:55:43.992Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://192.168.1.225:9090",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "contract_api_url",
    "sys__createdOn" : ISODate("2019-04-17T04:55:57.985Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://192.168.1.169:6001",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "ctrm_url",
    "sys__createdOn" : ISODate("2019-04-17T04:56:14.605Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "/spring/smartapp/invalidateSession",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "invalidate_session",
    "sys__createdOn" : ISODate("2019-04-17T04:56:28.153Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "/spring/logout",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "logout_url",
    "sys__createdOn" : ISODate("2019-04-17T04:56:43.845Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://192.168.1.225:1115",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "mdm_api_url",
    "sys__createdOn" : ISODate("2019-04-17T04:56:59.935Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://connect.qa2.ekaanalytics.com",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "platform_server",
    "sys__createdOn" : ISODate("2019-04-17T04:57:13.824Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://192.168.1.225:8180",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "pricing_api_url",
    "sys__createdOn" : ISODate("2019-04-17T04:57:25.883Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "http://192.168.1.225:3333",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "utility_host",
    "sys__createdOn" : ISODate("2019-04-17T04:57:42.307Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})
db.getCollection('reference_Data').insert(
{
    "propertyValue" : "/cac-security/api/oauth/validate_token",
    "propertyLevel" : "app",
    "app" : "supplierconnect",
    "type" : "property",
    "propertyName" : "validate_url",
    "sys__createdOn" : ISODate("2019-04-17T04:57:55.849Z"),
    "sys__createdBy" : "test1@ekaplus.com"
})


--//@UNDO
db.getCollection('reference_Data').remove({"type":"property"});//