//var baseurl = "http://localhost/TBLOrder/web_service/";
//var baseurl = "http://10.0.2.2/TBLOrder_2/web_service/"
var baseurl = "http://10.168.27.211/TBLOrder_2/web_service/"
document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, true);
}

function onBackKeyDown(e) {
	e.preventDefault();
	console.log('back button');
	//alert('back');
}
