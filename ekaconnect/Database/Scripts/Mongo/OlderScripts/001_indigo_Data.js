db.getCollection('indigo_Data').updateMany( {}, { $rename: { "appName": "app" } } );//
db.getCollection('indigo_Data').updateMany( {}, { $rename: { "objectName": "object" } } );//