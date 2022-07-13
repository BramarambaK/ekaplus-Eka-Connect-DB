db.getCollection('reference_Data').remove({app:'mdm'});//

db.getCollection('reference_Data').insert({ 

    "key" : "fut",
    "value" : "FUT",
    "object" : "instrumentType",
    "app" : "mdm"
}
);//
db.getCollection('reference_Data').insert({ 

 "key" : "day",
    "value" : "Day",
    "object" : "timeInForce",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
 
  "key" : "goodTillCancel",
    "value" : "Good Till Cancel",
    "object" : "timeInForce",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	"key" : "buy",
    "value" : "Buy",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "buy-icon"
}
);//
db.getCollection('reference_Data').insert({
	
	"key" : "sell",
    "value" : "Sell",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "sell-icon"
}
);//

db.getCollection('reference_Data').insert({
	
	 "key" : "jan-2018",
    "value" : "Jan-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//
db.getCollection('reference_Data').insert({
	
	"key" : "sep-2018",
    "value" : "Sep-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	 "key" : "jul-2019",
    "value" : "Jul-2019",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	  "key" : "limit",
    "value" : "Limit",
    "object" : "orderType",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({

	"key" : "stopLimit",
    "value" : "Stop-Limit",
    "object" : "orderType",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	"key" : "obrien",
    "value" : "RJ O'Brien",
    "object" : "broker",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	 "key" : "xfa",
    "value" : "XFA",
    "object" : "broker",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	"key" : "redWheat",
    "value" : "CBOT Red Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//
db.getCollection('reference_Data').insert({
	
	"key" : "soyabeans",
    "value" : "CBOT Soyabeans Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	 "key" : "corn",
    "value" : "CBOT Corn Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	"key" : "jan-2018",
    "value" : "28-Jan-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	"key" : "sep-2018",
    "value" : "15-Sep-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	"key" : "jul-2019",
    "value" : "15-Jul-2019",
    "object" : "promptDate",
    "app" : "mdm"
}
);//

db.getCollection('reference_Data').insert({
	
	"key" : "hrw",
    "value" : "KC HRW Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//

--//@UNDO
db.getCollection('reference_Data').remove({app:'mdm'})//;

