$(document).on("click", "#Order_index", function () {
    window.location.href = "../Order/Order_index.html";
});

$(document).on("pageshow", "#home", function () {
    myaccount_info();
    alldblist();
    allsku_list();
});

function allsku_list()
{
    $.ajax({
        type: "POST",
        url: baseurl + 'orderedsku_list',
        cache: true,
        beforeSend: function () {

            $.mobile.loading( "show", {  text: "Loading..",textVisible: true,theme: 'b'});
        },
        error: function (e) {
            $.mobile.loading("hide");
            // alert(e);
        },
        success: function (data) {
            var arr = JSON.parse(data);
            var len = arr.length;
            var i;
            var lidata = "";
            for (i = 0; i < len; i++) {
                lidata += ' <tr><td>' + arr[i].sku_name + '</td><td>' + arr[i].Price + '</td></tr>';
            }
            $('#SKUTable').html(lidata);
            $('#SKULIST').listview('refresh');
            $.mobile.loading("hide");
        }
    });
}


function alldblist()
{
    var roleid = localStorage.user_role_id;
    var zone_id = localStorage.biz_zone_id;

    $.ajax({
        type: "POST",
        url: baseurl + 'biz_zone',
        data: {biz_user_role_id: roleid, biz_zoneid: zone_id},
        cache: true,
        beforeSend: function () {

            $.mobile.loading("show", {text: false, textonly: false});
        },
        error: function (e) {
            $.mobile.loading("hide");
            // alert(e);
        },
        success: function (data) {
            var arr = JSON.parse(data);
            var len = arr.length;
            var i;
            var lidata = "";
            for (i = 0; i < len; i++) {
                lidata += '<li><a href="">' + arr[i].dbhouse_name + '</a></li>';
            }
            $("#All_DbList_li").html(lidata);
            $("#All_DbList_li").listview('refresh');
            $.mobile.loading("hide");
        }
    });
}
$(document).on("click", "#Deshboard", function () {
    window.location.href = "../Deshboard/Deshboard.html";
});
$(document).on("click", "#TGTIndex", function () {
        window.location.href = "../target/Tgtindex.html";
});
function myaccount_info() {

    $('#MyAccount_table').html('<tr><td>: ' + localStorage.User_id + '</td>'
            + '<td>: ' + localStorage.first_name + '</td>'
            + '<td>: ' + localStorage.user_role_name + '</td>'
            + '<td>: ' + localStorage.biz_zone_name + '</td>'
            + '<td>: ' + localStorage.biz_zone_id + '</td>'
            + ' </tr>');
}
$(document).on("click", "#Logout", function () {
    if (confirm("Are you sure you want to logout")) {


        localStorage.User_id = "";
        localStorage.user_role_id = "";
        localStorage.user_role_name = "";
        localStorage.emp_id = "";
        localStorage.first_name = "";
        localStorage.biz_zone_id = "";
        localStorage.biz_zone_name = "";
        //navigator.app.exitApp();
        window.location.href = "../login.html";
    } else {
        return false;
    }
});

function allOrdered_CS()
{
    var roleid = localStorage.user_role_id;
    var zone_id = localStorage.biz_zone_id;

    $.ajax({
        type: "POST",
        url: baseurl + 'Ordered_CS',
        data: {biz_user_role_id: roleid, biz_zoneid: zone_id},
        cache: true,
        beforeSend: function () {

            $.mobile.loading( "show", {  text: "Loading..",textVisible: true,theme: 'b'});
        },
        error: function (e) {
            $.mobile.loading("hide");
            // alert(e);
        },
        success: function (data) {

            $("#totalorder").html(data);
            $.mobile.loading("hide");
        }
    });

}
function NoOfDistributor()
{
    var roleid = localStorage.user_role_id;
    var zone_id = localStorage.biz_zone_id;
    $.ajax({
        type: "POST",
        url: baseurl + 'deshboardDBList',
        data: {biz_user_role_id: roleid, biz_zoneid: zone_id},
        cache: true,
        beforeSend: function () {

            $.mobile.loading( "show", {  text: "Loading..",textVisible: true,theme: 'b'});
        },
        error: function (e) {
            $.mobile.loading("hide");
            // alert(e);
        },
        success: function (data) {

            $("#totalDistributor").html(data);
            $.mobile.loading("hide");
        }
    });

}
function totaltgt()
{
    var roleid = localStorage.user_role_id;
    var zone_id = localStorage.biz_zone_id;
    $.ajax({
        type: "POST",
        url: baseurl + 'MTDstatus',
        data: {biz_user_role_id: roleid, biz_zoneid: zone_id},
        cache: true,
        beforeSend: function () {

           $.mobile.loading( "show", {  text: "Loading..",textVisible: true,theme: 'b'});
        },
        error: function (e) {
            $.mobile.loading("hide");
            // alert(e);
        },
        success: function (data) {

            var arr = JSON.parse(data);

            tgtvsorder(parseInt(arr[1]), parseInt(arr[0]));
            $.mobile.loading("hide");
        }
    });



    $.ajax({
        type: "POST",
        url: baseurl + 'AreaWiseOrder',
        data: {biz_user_role_id: roleid, biz_zoneid: zone_id},
        cache: true,
        beforeSend: function () {

            $.mobile.loading( "show", {  text: "Loading..",textVisible: true,theme: 'b'});
        },
        error: function (e) {
            $.mobile.loading("hide");
            // alert(e);
        },
        success: function (data) {

            var arr = JSON.parse(data);
            var len = arr.length;
            var i;
            var tbldata = "";
            var total = 0;
            for (i = 0; i < len; i++) {

                tbldata += ' <tr><td class="tg-yw4l">' + arr[i].Zonename + '</td><td class="tg-lqy6">' + arr[i].total_order + ' CS</td></tr>';
            }


            $("#AreaWiseOrder").html(tbldata);
            $.mobile.loading("hide");
        }
    });



}

