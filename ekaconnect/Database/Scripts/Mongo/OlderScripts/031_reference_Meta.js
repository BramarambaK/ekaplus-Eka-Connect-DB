db.getCollection('reference_Meta').remove({"type":"property"});//


db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "auth_server",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:47:57.704Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "auth_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:04.054Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "client_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:10.805Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "connect",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:17.452Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "connect_ui_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:23.268Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "contract_api_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:29.398Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "ctrm_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:35.008Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "invalidate_session",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:43.059Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "logout_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:49.476Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "mdm_api_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:48:57.967Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "platform_server",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:49:03.828Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "pricing_api_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:49:10.372Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "utility_host",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:49:22.449Z"),
    "sys__createdBy" : "Joseph@mail.com"
})

db.getCollection('reference_Meta').insert(
{
    "type" : "property",
    "name" : "validate_url",
    "propertyLevel" : "tenant, app, user",
    "dataType" : "String",
    "fieldtype" : "textbox",
    "length" : 100,
    "sys__createdOn" : ISODate("2019-04-17T04:49:28.287Z"),
    "sys__createdBy" : "Joseph@mail.com"
})


--//@UNDO
db.getCollection('reference_Meta').remove({"type":"property"});//
