
class dataprocess {
    static altRows(id) {
        if (document.getElementsByTagName) {
            const table = document.getElementById(id);
            const rows = table.getElementsByTagName("tr");

            for (let i = 0; i < rows.length; i++) {
                if (i % 2 === 0) {
                    rows[i].className = "evenrowcolor";
                } else {
                    rows[i].className = "oddrowcolor";
                }
            }
        }
    }

    static render_table(id) {
        try {
            dataprocess.altRows(id);
        } catch (error) {
            console.error(error)
        }
    }


    static get_show_result_as_e_chart(myChart) {
        function show_result_as_e_chart(result) {
            myChart.hideLoading();
            let series = [];

            $.each(result.data, function (key, val) {
                let item = {
                    name: key,
                    type: 'line',
                    data: val,
                    smooth: true
                };
                series.push(item);
            });
            myChart.hideLoading();
            // 填入数据
            myChart.setOption({
                legend: {
                    data: result.labels
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: result.years
                },
                yAxis: {
                    type: 'value'
                },
                series: series
            })
        }

        return show_result_as_e_chart;
    }


    static show_e_chart(id, url) {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById(id));
        // 指定图表的配置项和数据
        myChart.option = {
            xAxis: {
                type: 'category',
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [],
                    type: 'line'
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.showLoading();

        $.ajax({
            url: url,
            result: {},
            type: 'GET',
            dataType: 'json',
            success: dataprocess.get_show_result_as_e_chart(myChart),
            error: function (msg) {
                console.log(msg);
                alert('系统发生错误');
            }
        })
    }


    static set_html(id, url, table_id) {
        let xml_http;
        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xml_http = new XMLHttpRequest();
        } else {
            // IE6, IE5 浏览器执行代码
            xml_http = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xml_http.onreadystatechange = function () {
            if (xml_http.readyState === 4 && xml_http.status === 200) {
                document.getElementById(id).innerHTML = xml_http.responseText;
                try {
                    dataprocess.render_table(table_id);
                } catch (e) {
                    console.error(e)
                }
            }
        }
        xml_http.open('GET', url, true);
        xml_http.send();
    }

    static show_all_database() {
        dataprocess.set_html('div_table_1', 'html?setting=open&q=1', 'alternatecolor1');
    }

    static clear_show_all_database() {
        dataprocess.set_html('div_table_1', 'html?setting=close&q=1', 'alternatecolor1');
    }


    static show_current_database() {
        dataprocess.set_html('div_table_2', 'html?setting=open&q=2', 'alternatecolor2');
    }

    static clear_show_current_database() {
        dataprocess.set_html('div_table_2', 'html?setting=close&q=2', 'alternatecolor2');
    }


    static show_all_datatable() {
        dataprocess.set_html('div_table_3', 'html?setting=open&q=3', 'alternatecolor3');
    }

    static clear_show_all_datatable() {
        dataprocess.set_html('div_table_3', 'html?setting=close&q=3', 'alternatecolor3');
    }


    static show_population() {
        dataprocess.set_html('div_table_4', 'html?setting=open&q=4', 'alternatecolor4');
    }

    static show_population_memory() {
        dataprocess.set_html('div_table_4', 'html?open4_memory=1', 'alternatecolor4');
    }

    static show_population_browser() {
        dataprocess.set_html('div_table_4', 'html?open4_browser=1', 'alternatecolor4');
    }

    static show_population_database() {
        dataprocess.set_html('div_table_4', 'html?open4_database=1', 'alternatecolor4');
    }

    static clear_show_population() {
        dataprocess.set_html('div_table_4', 'html?setting=close&q=4', 'alternatecolor4');
    }

    static clear_population_data_in_memory() {
        let xml_http;
        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xml_http = new XMLHttpRequest();
        } else {
            // IE6, IE5 浏览器执行代码
            xml_http = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xml_http.open('GET', 'html?clear_memory_of_population=1', true);
        xml_http.send();
    }

    static show_query_table() {
        const table_name = document.getElementById('tq').value;
        const url = 'html?submit1=1&table_name=' + table_name;
        dataprocess.set_html('div_table_query', url, 'alternatecolor5')
    }

    static clear_show_query_table() {
        dataprocess.set_html('div_table_query', 'html?clear1=1', 'alternatecolor5');
    }

    static delete_table() {
        const table_name = document.getElementById('text_delete').value;
        const url = 'html?submit2=1&table_name=' + table_name;
        dataprocess.set_html('div_table_delete', url, 'alternatecolor6');
    }

    static show_e_chart02() {
        document.getElementById('echart_container02').innerHTML = '<div id="echart02" class="echart"></div>';
        dataprocess.show_e_chart('echart02', 'json?q=2');
    }

    static clear_show_e_chart02() {
        document.getElementById('echart_container02').innerHTML = '';
    }

    static show_e_chart03() {
        document.getElementById('echart_container03').innerHTML = '<div id="echart03" class="echart"></div>';
        dataprocess.show_e_chart('echart03', 'json?q=3');
    }

    static clear_show_e_chart03() {
        document.getElementById('echart_container03').innerHTML = '';
    }

    static show_e_chart04() {
        document.getElementById('echart_container04').innerHTML = '<div id="echart04" class="echart"></div>';
        dataprocess.show_e_chart('echart04', 'json?q=4');
    }

    static clear_show_e_chart04() {
        document.getElementById('echart_container04').innerHTML = '';
    }

    static show_e_chart05() {
        document.getElementById('echart_container05').innerHTML = '<div id="echart05" class="echart"></div>';
        dataprocess.show_e_chart('echart05', 'json?q=5');
    }

    static clear_show_e_chart05() {
        document.getElementById('echart_container05').innerHTML = '';
    }

    static press_some_buttons() {
        alert('start call press_some_buttons()');
        dataprocess.show_all_database();
        dataprocess.show_current_database();
        dataprocess.show_all_datatable();
        dataprocess.show_population();
        dataprocess.show_e_chart02();
        dataprocess.show_e_chart04();
        dataprocess.show_e_chart05();
    }
}