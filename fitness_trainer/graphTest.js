        window.onload = function() {
            var dps = []; //dataPoints. 

            var chart = new CanvasJS.Chart("graph_results", {
                title: {
                    text: "Date / ITM"
                },
                data: [{
                    type: "line",
                    dataPoints: dps
                }]
            });

            function addDataAndRender() {
                xValue = 100000;//Number(document.getElementById("xValue").value);
                yValue = 150;//Number(document.getElementById("yValue").value);
                dps.push({
                    x: xValue,
                    y: yValue
                });
                chart.render();
            }

            var renderButton = document.getElementById("btn_graph");
            renderButton.addEventListener("click", addDataAndRender);
        }