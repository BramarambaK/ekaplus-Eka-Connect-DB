db.getCollection('uatindigoag_Data').insert({ 
"_id" : "666666",
    "key" : "fut",
    "value" : "FUT",
    "object" : "instrumentType",
    "app" : "mdm"
}
);//;
db.getCollection('uatindigoag_Data').insert({ 
"_id" : "777777",
 "key" : "day",
    "value" : "Day",
    "object" : "timeInForce",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
  "_id" : "888888"
  "key" : "goodTillCancel",
    "value" : "Good Till Cancel",
    "object" : "timeInForce",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "999999",
	"key" : "buy",
    "value" : "Buy",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "buy-icon"
}
);//;
db.getCollection('uatindigoag_Data').insert({
	"_id" : "1111111",
	"key" : "sell",
    "value" : "Sell",
    "object" : "tradeType",
    "app" : "mdm",
    "src" : "sell-icon"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "2222222",
	 "key" : "jan-2018",
    "value" : "Jan-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//;
db.getCollection('uatindigoag_Data').insert({
	"_id" : "3333333",
	"key" : "sep-2018",
    "value" : "Sep-2018",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "4444444",
	 "key" : "jul-2019",
    "value" : "Jul-2019",
    "object" : "promptMonth",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "5555555",
	  "key" : "limit",
    "value" : "Limit",
    "object" : "orderType",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "7777777",
	"key" : "stopLimit",
    "value" : "Stop-Limit",
    "object" : "orderType",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "8888888",
	"key" : "obrien",
    "value" : "RJ O'Brien",
    "object" : "broker",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "9999999",
	"key" : "redWheat",
    "value" : "CBOT Red Wheat Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//;
db.getCollection('uatindigoag_Data').insert({
	"_id" : "1234567",
	"key" : "soyabeans",
    "value" : "CBOT Soyabeans Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "1234568",
	 "key" : "corn",
    "value" : "CBOT Corn Futures",
    "object" : "instrument",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "1234569",
	"key" : "jan-2018",
    "value" : "28-Jan-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "2234567",
	 "key" : "jan-2018",
    "value" : "28-Jan-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;
db.getCollection('uatindigoag_Data').insert({
	"_id" : "2234568",
	"key" : "sep-2018",
    "value" : "15-Sep-2018",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;

db.getCollection('uatindigoag_Data').insert({
	"_id" : "3234567",
	"key" : "jul-2019",
    "value" : "15-Jul-2019",
    "object" : "promptDate",
    "app" : "mdm"
}
);//;

--//@UNDO
db.getCollection('uatindigoag_Data').remove({app:'mdm'})//;

