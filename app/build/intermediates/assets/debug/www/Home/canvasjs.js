function tgtvsorder(totaltgt,totalorder) {
   
    
   // var totaltgt=20202;
   //var totalorder=34343;
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Target VS MTD Order"
        },

        axisY: {
            valueFormatString: "#,###,.##K" //try properties here
        },
       
        data: [{
                type: "column",

                dataPoints: [
                    {y: totaltgt, label: "Target"},
                    {y: totalorder, label: "MTD Order"},
                ]
            }]
    });
    chart.render();
}