db.getCollection('cargill_Data').updateMany( {}, { $rename: { "appName": "app" } } );//
db.getCollection('cargill_Data').updateMany( {}, { $rename: { "objectName": "object" } } );//