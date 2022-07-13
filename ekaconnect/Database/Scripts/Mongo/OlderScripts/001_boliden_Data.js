db.getCollection('boliden_Data').updateMany( {}, { $rename: { "appName": "app" } } );//
db.getCollection('boliden_Data').updateMany( {}, { $rename: { "objectName": "object" } } );//