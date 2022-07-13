db.getCollection('platform_Data').insert({ 
"_id" : "666666",
    "key" : "FUT",
    "value" : "FUT",
    "object" : "instrumentType",
    "app" : "mdm"
}
);//;
db.getCollection('platform_Data').insert({ 
"_id" : "777777",
 "key" : "Day",
    "value" : "Day",
    "object" : "timeInForce",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
  "_id" : "888888"
  "key" : "Good Till Cancel",
    "value" : "Good Till Cancel",
    "object" : "timeInForce",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "999999",
	"key" : "Buy",
    "value" : "Buy",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "buy-icon"
}
);//;
db.getCollection('platform_Data').insert({
	"_id" : "1111111",
	"key" : "sell",
    "value" : "Sell",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "sell-icon"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "2222222",
	 "key" : "Jan-2018",
    "value" : "Jan-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//;
db.getCollection('platform_Data').insert({
	"_id" : "3333333",
	"key" : "Sep-2018",
    "value" : "Sep-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "4444444",
	 "key" : "Jul-2019",
    "value" : "Jul-2019",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "5555555",
	  "key" : "Limit",
    "value" : "Limit",
    "object" : "orderType",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "7777777",
	"key" : "Stop-Limit",
    "value" : "Stop-Limit",
    "object" : "orderType",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "8888888",
	"key" : "RJ O'Brien",
    "value" : "RJ O'Brien",
    "object" : "broker",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "9999999",
	"key" : "CBOT Red Wheat Futures",
    "value" : "CBOT Red Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//;
db.getCollection('platform_Data').insert({
	"_id" : "1234567",
	"key" : "CBOT Soyabeans Futures",
    "value" : "CBOT Soyabeans Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "1234568",
	 "key" : "CBOT Corn Futures",
    "value" : "CBOT Corn Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "12345689999",
	 "key" : "KC HRW Wheat Futures",
    "value" : "KC HRW Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "1234569",
	"key" : "28-Jan-2018",
    "value" : "28-Jan-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "2234567",
	 "key" : "28-Jan-2018",
    "value" : "28-Jan-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;
db.getCollection('platform_Data').insert({
	"_id" : "2234568",
	"key" : "15-Sep-2018",
    "value" : "15-Sep-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "3234567",
	"key" : "15-Jul-2019",
    "value" : "15-Jul-2019",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;

db.getCollection('platform_Data').insert({
	"_id" : "9999999",
	"key" : "CBOT Red Wheat Futures",
    "value" : "CBOT Red Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//;

db.getCollection('platform_Data').insert({
	"_id" : "99999998888777",
	"key" : "CME Class III Milk Futures",
    "value" : "CME Class III Milk Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//;

db.getCollection('platform_Data').insert({
	"_id" : "99999996666555",
	"key" : "CME Cash settled Cheese Futures",
    "value" : "CME Cash settled Cheese Futures",
    "object" : "instrument",
    "app" : "mdm"
}
)//;

--//@UNDO
db.getCollection('platform_Data').remove({app:'mdm'})//;

