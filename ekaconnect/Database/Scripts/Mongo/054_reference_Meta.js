db.getCollection('reference_Meta').update({"type":'app',"name":'physicals',"sys__UUID" : "5d907cd2-7785-4d34-bcda-aa84b2158415"}
    ,{$set:{"platform_id":"23"}}
    )//;

db.getCollection('reference_Meta').update({"type":'app',"name" : "pricing" ,"sys__UUID" : "84d7b167-1d9f-406d-b974-bea406a25f9a"}
    ,{$set:{"platform_id":"37"}}
    )//;
  
    
    db.getCollection('reference_Meta').update({"type":'app',"name" : "oms" ,"sys__UUID" : "e621d081-85cb-4951-adea-49b88d7f4ab0"}
    ,{$set:{"platform_id":"35"}}
    )//;
    
     
    db.getCollection('reference_Meta').update({"type":'app',"name" : "supplierconnect" , "sys__UUID" : "467a28cc-bc93-4e38-8ff5-0a56ae128f3b"}
    ,{$set:{"platform_id":"35"}}
    )//;
  
   
   
       db.getCollection('reference_Meta').update({"type":'app', "name" : "trademargin" ,"sys__UUID" : "40a27e7f-3f50-406f-a872-2ee7d9436df9"}
    ,{$set:{"platform_id":"41"}}
    )//;
	
--//@UNDO

db.getCollection('reference_Meta').update({"type":'app',"name":'physicals',"sys__UUID" : "5d907cd2-7785-4d34-bcda-aa84b2158415"}
    ,{$unset:{"platform_id":"23"}}
    )//;

db.getCollection('reference_Meta').update({"type":'app',"name" : "pricing" ,"sys__UUID" : "84d7b167-1d9f-406d-b974-bea406a25f9a"}
    ,{$unset:{"platform_id":"37"}}
    )//;
  
    
    db.getCollection('reference_Meta').update({"type":'app',"name" : "oms" ,"sys__UUID" : "e621d081-85cb-4951-adea-49b88d7f4ab0"}
    ,{$unset:{"platform_id":"35"}}
    )//;
    
     
    db.getCollection('reference_Meta').update({"type":'app',"name" : "supplierconnect" , "sys__UUID" : "467a28cc-bc93-4e38-8ff5-0a56ae128f3b"}
    ,{$unset:{"platform_id":"35"}}
    )//;
  
   
   
       db.getCollection('reference_Meta').update({"type":'app', "name" : "trademargin" ,"sys__UUID" : "40a27e7f-3f50-406f-a872-2ee7d9436df9"}
    ,{$unset:{"platform_id":"41"}}
    )//;
	


   
    