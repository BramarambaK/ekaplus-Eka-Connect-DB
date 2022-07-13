# Eka-Connect 

MongoDump is placed in ek-connect/src/main/resources as Zip
		
		1. Unzip it to location of your choice.
		2. Verify in the *-meta.json file the database name is eka_connect_demo or choice of your db.
		3. Restore using the below
		In Order to restore it please use the below command
    
		mongorestore --port {port_num} --db eka_connect_demo {location of unzipped Dump}
