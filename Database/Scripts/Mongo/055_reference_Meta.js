db.getCollection('reference_Meta').insert({ "type" : "property",     "name" : "eka_connect_host",     "propertyLevel" : "tenant,app,user",     "dataType" : "String",     "fieldtype" : "textbox",     "length" : "120" }
    )//;
 
--//@UNDO
db.getCollection('reference_Meta').remove({ "type" : "property",     "name" : "eka_connect_host",     "propertyLevel" : "tenant,app,user"}
    )//;