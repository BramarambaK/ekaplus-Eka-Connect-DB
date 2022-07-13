db.getCollection('reference_Data').insert({ 
    "key" : "FUT",
    "value" : "FUT",
    "object" : "instrumentType",
    "app" : "mdm"
}
)//
db.getCollection('reference_Data').insert({ 
 "key" : "Day",
    "value" : "Day",
    "object" : "timeInForce",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
 
  "key" : "Good Till Cancel",
    "value" : "Good Till Cancel",
    "object" : "timeInForce",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "Buy",
    "value" : "Buy",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "buy-icon"
}
)//
db.getCollection('reference_Data').insert({
	"key" : "sell",
    "value" : "Sell",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "sell-icon"
}
)//

db.getCollection('reference_Data').insert({
	 "key" : "Jan-2018",
    "value" : "Jan-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
)//
db.getCollection('reference_Data').insert({
	"key" : "Sep-2018",
    "value" : "Sep-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	 "key" : "Jul-2019",
    "value" : "Jul-2019",
    "object" : "promptMonth",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	  "key" : "Limit",
    "value" : "Limit",
    "object" : "orderType",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "Stop-Limit",
    "value" : "Stop-Limit",
    "object" : "orderType",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "RJ O'Brien",
    "value" : "RJ O'Brien",
    "object" : "broker",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "CBOT Red Wheat Futures",
    "value" : "CBOT Red Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//
db.getCollection('reference_Data').insert({
	"key" : "CBOT Soyabeans Futures",
    "value" : "CBOT Soyabeans Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	 "key" : "CBOT Corn Futures",
    "value" : "CBOT Corn Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	 "key" : "KC HRW Wheat Futures",
    "value" : "KC HRW Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "28-Jan-2018",
    "value" : "28-Jan-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	 "key" : "28-Jan-2018",
    "value" : "28-Jan-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
)//
db.getCollection('reference_Data').insert({
	"key" : "15-Sep-2018",
    "value" : "15-Sep-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	
	"key" : "15-Jul-2019",
    "value" : "15-Jul-2019",
    "object" : "promptDate",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "CBOT Red Wheat Futures",
    "value" : "CBOT Red Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "CME Class III Milk Futures",
    "value" : "CME Class III Milk Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//

db.getCollection('reference_Data').insert({
	"key" : "CME Cash settled Cheese Futures",
    "value" : "CME Cash settled Cheese Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//

--//@UNDO
db.getCollection('reference_Data').remove({app:'mdm'})//;

