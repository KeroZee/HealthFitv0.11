function Multiply() {
    var x = document.getElementById("bpm").value;
    var confirm1 = confirm("Are you sure?");
    if (confirm1 == true) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("bpm", x * 4);
            localStorage.setItem("date", new Date().toLocaleDateString())
            document.getElementById("record").innerHTML = localStorage.getItem("bpm");
            document.getElementById("record2").innerHTML = localStorage.getItem("bpm");
            document.getElementById("date").innerHTML = localStorage.getItem("date");
            document.getElementById("date2").innerHTML = localStorage.getItem("date");
            location.reload();
        }
    }
}

window.onload = function () {

    document.getElementById("record").innerHTML = localStorage.getItem("bpm");
    document.getElementById("record2").innerHTML = localStorage.getItem("bpm");
    document.getElementById("date").innerHTML = localStorage.getItem("date");
    document.getElementById("date2").innerHTML = localStorage.getItem("date");

    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Health Tracker"
        },
        axisX: {
            valueFormatString: "DD MMM"
        },
        axisY: {
            title: "Heart Rates (Beats per Minute)",
            minimum: 50
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            cursor: "pointer",
            showInLegend: true,
            name: "Heart Rate",
            markerType: "square",
            xValueFormatString: "DD MMM YYYY",
            color: "#F08080",
            yValueFormatString: "#,##0BPM",
            dataPoints: [
                {x: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 4), y: 124},
                {x: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 3), y: 88},
                {x: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 2), y: 140},
                {x: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1), y: 148},
                {x: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), y: parseInt(localStorage.getItem("bpm"))},
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

    function toogleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

}