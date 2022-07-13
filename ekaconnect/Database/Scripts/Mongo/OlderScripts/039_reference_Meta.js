db.getCollection('reference1_Data').update({"app" : "oms"}, {$set: {"refTypeId" : "e621d081-85cb-4951-adea-49b88d7f4ab0"}}, {multi: true})

db.getCollection('reference1_Meta').update({"type" : "app", "name" : "oms"}, {$set: {"sys__UUID" : "e621d081-85cb-4951-adea-49b88d7f4ab0"}}, {multi: true})

db.getCollection('reference1_Meta').update({"type" : "policy","refType" : "app","refTypeName" : "oms"}, {$set: {"refTypeId" : "e621d081-85cb-4951-adea-49b88d7f4ab0"}}, {multi: true})

db.getCollection('reference1_Meta').update({"type" : "Workflow","app" : "oms"}, {$set: {"refTypeId" : "e621d081-85cb-4951-adea-49b88d7f4ab0"}}, {multi: true}) 


// In above example tenant is reference1, in the same way you need to replace your tenant.
// In above example app is oms, in the same way you need to replace your app name.

