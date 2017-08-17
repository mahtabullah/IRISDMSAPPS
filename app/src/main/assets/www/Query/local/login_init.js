function make_tables() {
    document.addEventListener("deviceready", onDeviceReady, true);

    function onDeviceReady() {
        //	 navigator.notification.alert("PhoneGap is working!!");
        var db = window.openDatabase("IRISDMS", "1.0", "IRISDMS", 20000000);
        db.transaction(populateDB, errorCB, successCB);
        //   alert("-------------------------------------");
    }

    function populateDB(tx) {       
        tx.executeSql('DROP TABLE IF EXISTS tbld_distribution_employee;');
        tx.executeSql('CREATE TABLE IF NOT EXISTS tbld_distribution_employee(psr_id, name,db_id)');
    }
    function errorCB(tx, err) {
        alert("Database not created: " + err);
    }

    function successCB() {
        console.log("db creation success!");
        //alert("Database created");
    }

}
