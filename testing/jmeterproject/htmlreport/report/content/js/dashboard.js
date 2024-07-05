/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.96875, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "Facilitiespage"], "isController": false}, {"data": [1.0, 500, 1500, "PlacementPage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Naacpage"], "isController": false}, {"data": [1.0, 500, 1500, "Documentpage"], "isController": false}, {"data": [1.0, 500, 1500, "Coepage"], "isController": false}, {"data": [1.0, 500, 1500, "Aeropage"], "isController": false}, {"data": [1.0, 500, 1500, "Coepage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Coepage-0"], "isController": false}, {"data": [1.0, 500, 1500, "PlacementPage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Aeropage-1"], "isController": false}, {"data": [1.0, 500, 1500, "PlacementPage"], "isController": false}, {"data": [1.0, 500, 1500, "Aeropage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Facilitiespage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Documentpage-0"], "isController": false}, {"data": [0.5, 500, 1500, "Homepage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Facilitiespage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Homepage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Documentpage-2"], "isController": false}, {"data": [1.0, 500, 1500, "Documentpage-1"], "isController": false}, {"data": [0.5, 500, 1500, "Homepage"], "isController": false}, {"data": [1.0, 500, 1500, "Aluminipage"], "isController": false}, {"data": [1.0, 500, 1500, "Naacpage-2"], "isController": false}, {"data": [1.0, 500, 1500, "Naacpage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Naacpage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Aluminipage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Aluminipage-1"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 32, 0, 0.0, 98.96875000000001, 6, 1300, 18.0, 126.59999999999991, 1189.4999999999995, 1300.0, 20.075282308657464, 513.8630214868256, 3.5300835163111666], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Facilitiespage", 2, 0, 0.0, 30.0, 29, 31, 30.0, 31.0, 31.0, 31.0, 33.333333333333336, 1137.158203125, 8.951822916666668], "isController": false}, {"data": ["PlacementPage-1", 1, 0, 0.0, 12.0, 12, 12, 12.0, 12.0, 12.0, 12.0, 83.33333333333333, 2951.0904947916665, 10.579427083333334], "isController": false}, {"data": ["Naacpage", 1, 0, 0.0, 37.0, 37, 37, 37.0, 37.0, 37.0, 37.0, 27.027027027027028, 1414.2472550675677, 9.607263513513514], "isController": false}, {"data": ["Documentpage", 1, 0, 0.0, 35.0, 35, 35, 35.0, 35.0, 35.0, 35.0, 28.57142857142857, 1193.3314732142856, 10.072544642857142], "isController": false}, {"data": ["Coepage", 1, 0, 0.0, 31.0, 31, 31, 31.0, 31.0, 31.0, 31.0, 32.25806451612903, 2273.7210181451615, 7.8125], "isController": false}, {"data": ["Aeropage", 1, 0, 0.0, 34.0, 34, 34, 34.0, 34.0, 34.0, 34.0, 29.41176470588235, 1083.2088694852941, 7.812499999999999], "isController": false}, {"data": ["Coepage-1", 1, 0, 0.0, 14.0, 14, 14, 14.0, 14.0, 14.0, 14.0, 71.42857142857143, 4992.885044642857, 8.649553571428571], "isController": false}, {"data": ["Coepage-0", 1, 0, 0.0, 17.0, 17, 17, 17.0, 17.0, 17.0, 17.0, 58.8235294117647, 34.4094669117647, 7.123161764705882], "isController": false}, {"data": ["PlacementPage-0", 1, 0, 0.0, 18.0, 18, 18, 18.0, 18.0, 18.0, 18.0, 55.55555555555555, 33.14887152777778, 7.052951388888889], "isController": false}, {"data": ["Aeropage-1", 1, 0, 0.0, 12.0, 12, 12, 12.0, 12.0, 12.0, 12.0, 83.33333333333333, 3018.3919270833335, 11.067708333333334], "isController": false}, {"data": ["PlacementPage", 1, 0, 0.0, 30.0, 30, 30, 30.0, 30.0, 30.0, 30.0, 33.333333333333336, 1200.3255208333335, 8.463541666666668], "isController": false}, {"data": ["Aeropage-0", 1, 0, 0.0, 21.0, 21, 21, 21.0, 21.0, 21.0, 21.0, 47.61904761904761, 28.971354166666664, 6.324404761904762], "isController": false}, {"data": ["Facilitiespage-0", 2, 0, 0.0, 18.0, 17, 19, 18.0, 19.0, 19.0, 19.0, 41.666666666666664, 25.472005208333332, 5.594889322916667], "isController": false}, {"data": ["Documentpage-0", 1, 0, 0.0, 16.0, 16, 16, 16.0, 16.0, 16.0, 16.0, 62.5, 36.07177734375, 7.32421875], "isController": false}, {"data": ["Homepage-1", 1, 0, 0.0, 1130.0, 1130, 1130, 1130.0, 1130.0, 1130.0, 1130.0, 0.8849557522123894, 30.579369469026553, 0.1192616150442478], "isController": false}, {"data": ["Facilitiespage-1", 2, 0, 0.0, 12.0, 12, 12, 12.0, 12.0, 12.0, 12.0, 46.51162790697674, 1558.2985101744187, 6.2454578488372094], "isController": false}, {"data": ["Homepage-0", 1, 0, 0.0, 165.0, 165, 165, 165.0, 165.0, 165.0, 165.0, 6.0606060606060606, 3.7168560606060606, 0.8167613636363636], "isController": false}, {"data": ["Documentpage-2", 1, 0, 0.0, 12.0, 12, 12, 12.0, 12.0, 12.0, 12.0, 83.33333333333333, 3381.1848958333335, 9.847005208333334], "isController": false}, {"data": ["Documentpage-1", 1, 0, 0.0, 6.0, 6, 6, 6.0, 6.0, 6.0, 6.0, 166.66666666666666, 102.5390625, 19.53125], "isController": false}, {"data": ["Homepage", 1, 0, 0.0, 1300.0, 1300, 1300, 1300.0, 1300.0, 1300.0, 1300.0, 0.7692307692307693, 27.052283653846153, 0.20733173076923075], "isController": false}, {"data": ["Aluminipage", 2, 0, 0.0, 30.0, 29, 31, 30.0, 31.0, 31.0, 31.0, 20.408163265306122, 701.3612085459183, 5.480707908163265], "isController": false}, {"data": ["Naacpage-2", 1, 0, 0.0, 13.0, 13, 13, 13.0, 13.0, 13.0, 13.0, 76.92307692307693, 3933.143028846154, 9.164663461538462], "isController": false}, {"data": ["Naacpage-1", 1, 0, 0.0, 6.0, 6, 6, 6.0, 6.0, 6.0, 6.0, 166.66666666666666, 102.86458333333333, 19.694010416666668], "isController": false}, {"data": ["Naacpage-0", 1, 0, 0.0, 18.0, 18, 18, 18.0, 18.0, 18.0, 18.0, 55.55555555555555, 32.17230902777778, 6.564670138888889], "isController": false}, {"data": ["Aluminipage-0", 2, 0, 0.0, 18.5, 18, 19, 18.5, 19.0, 19.0, 19.0, 23.52941176470588, 14.384191176470587, 3.1594669117647056], "isController": false}, {"data": ["Aluminipage-1", 2, 0, 0.0, 11.5, 10, 13, 11.5, 13.0, 13.0, 13.0, 25.31645569620253, 854.5663568037975, 3.399426424050633], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 32, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
