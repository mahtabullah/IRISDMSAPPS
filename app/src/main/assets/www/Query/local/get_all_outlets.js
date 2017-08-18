	function get_all_outlets() {
		
		var db = window.openDatabase("IRISDMS", "1.0", "IRISDMS", 200000000);
		db.transaction(selectDB_outlet_new, errorCB, successCB);
		
		function selectDB_outlet_new(tx) {
			var sql = " Select t1.outlet_id, t1.outlet_name, t1.outlet_code from  tbld_outlet_details as t1 ";
			tx.executeSql(sql, [], querySuccess_outlet, errorCB);
		}
		
		function querySuccess_outlet(tx, results) {
			
			var outlet_id = [];
			var outlet_name = [];
			var outlet_code = [];
			var len = results.rows.length;
			 alert(len);
			for(var i=0;i < len;i++){
				outlet_id.push(results.rows.item(i).outlet_id);
				outlet_name.push(results.rows.item(i).outlet_name);
				outlet_code.push(results.rows.item(i).outlet_code);
			}
			
			send_result_all_outlet(outlet_id, outlet_name, outlet_code, len);
		}
		
		function successCB() {
			console.log("db transaction successful!");
		}

		function errorCB(err) {
			console.log("Error processing SQL: " + err.code);
		}
	}
	
	