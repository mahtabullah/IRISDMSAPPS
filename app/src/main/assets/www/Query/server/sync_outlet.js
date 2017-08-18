function update_outlet() {
	document.addEventListener("deviceready", onDeviceReady, true);
	function onDeviceReady() {
		$.ajax({
			type : "POST",
			url : baseurl+'sync_down_outlet.php',
			data : {emp_id : localStorage.PSR_id},
			dataType : 'json',
			cache : false,
			success : function(data) {
				var outlet_id = [];
				var outlet_name = [];
				var outlet_code = [];
				var Route_id = [];
                                var channel = [];
                                var visicooler = [];                             
				
				var i = 0;

				$.each(data, function(val, key) {
					outlet_id[i] = key.outlet_id;
					outlet_name[i] = key.outlet_name;
					outlet_code[i] = key.outlet_code;					
					Route_id = key.Route_id;
                                        channel = key.channel;
                                        visicooler = key.visicooler;					
					i = i + 1;
				});
				alert(i);
				var db = window.openDatabase("IRISDMS", "1.0", "IRISDMS", 200000000);
				db.transaction(insertDB_outlet, errorCB, successCB);

				function insertDB_outlet(tx) {
					var j = 0;
					tx.executeSql('DROP TABLE IF EXISTS tbld_outlet_details;');
					tx.executeSql('CREATE TABLE IF NOT EXISTS tbld_outlet_details(outlet_id, outlet_name, outlet_code,Route_id,channel,visicooler)');
					for ( var j = 0; j < outlet_id.length; j++) {
						tx.executeSql("INSERT INTO tbld_outlet_details(outlet_id, outlet_name, outlet_code,Route_id,channel,visicooler) VALUES ('"
										+ outlet_id[j]
										+ "','"
										+ outlet_name[j]
										+ "','"
										+ outlet_code[j]
										+ "','"
										+ Route_id[j]
										+ "','"
										+ channel[j]
										+ "','"
										+ visicooler[j]
										+ "')");
					}
                                      
				}

				function errorCB(err) {					
					console.error("Error processing SQL: " + err.message);
				}

				function successCB() {					
					console.info("Updating DB successful! (tbld_outlet_details)");
                                  
				}
			}
		});
	}
}
