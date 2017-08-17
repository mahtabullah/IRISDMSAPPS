 $(document).on("click", "#Order_index", function () {
                window.location.href = "../Order/Order_index.html";
            });

            $(document).on("pageshow", "#home", function () {
                myaccount_info();
                alldblist();
                allsku_list();
            });
            $(document).on("click", "#Logout", function () {
                localStorage.User_id = "";
                localStorage.user_role_id = "";
                localStorage.user_role_name = "";
                localStorage.emp_id = "";
                localStorage.first_name = "";
                localStorage.biz_zone_id = "";
                localStorage.biz_zone_name = "";
                window.location.href = "../login.html";
            });
            function allsku_list()
            {
                $.ajax({
                    type: "POST",
                    url: baseurl + 'orderedsku_list',
                    cache: true,
                    error: function () {
                        alert("error");
                    },
                    success: function (data) {
                        var arr = JSON.parse(data);
                        var len = arr.length;
                        var i;
                        var lidata = "";
                        for (i = 0; i < len; i++) {
                            lidata +=' <tr><td>'+arr[i].sku_name+'</td><td>' +arr[i].Price+'</td></tr>';
                        }
                        $('#SKUTable').html(lidata);
                        $('#SKULIST').listview('refresh');
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
                    success: function (data) {
                        $("#All_DbList_li").html(data);
                        $("#All_DbList_li").listview('refresh');
                    }
                });
            }
            $(document).on("click", "#Deshboard", function () {
                
                window.location.href = "../Deshboard/Deshboard.html";
                
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
                window.location.href = "../login.html";
                 } else {
                    return false;
                }
            });
            