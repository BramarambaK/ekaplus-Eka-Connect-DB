db.getCollection('boliden_Meta').update({"type" : "policy", "name" : "PR"}, {$set: {"app": "PR"}}, {multi: true});//
db.getCollection('boliden_Meta').update({"type" : "policy", "name" : "Advice"}, {$set: {"app": "Advice"}}, {multi: true});//