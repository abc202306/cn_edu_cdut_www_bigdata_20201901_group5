import json

import pandas
from django.shortcuts import render, HttpResponse

from dataprocess.models import (
    DatabasesData,
    CurrentDatabase,
    TablesData,
    NationalData
)


# Create your views here.

class DataProcess:
    show = [False, False, False, False, False, False]
    current_table_name = None
    query_result = None
    query_result_html = None
    data = None

    @staticmethod
    def deal(request):
        return render(request, 'dataprocess.html')

    @staticmethod
    def deal_1(request):
        show = DataProcess.show

        post = request.POST
        dfs = [
            DatabasesData.dataframe,
            CurrentDatabase.dataframe,
            TablesData.dataframe,
            NationalData.get_recent_20_years_data_of_population
        ]
        keys = ['a', 'b', 'c', 'd']
        context = {}
        table_html = {}
        graph_html = {}
        for i in range(4):
            if 'open' + str(i + 1) in post:
                show[i] = True
            if 'close' + str(i + 1) in post:
                show[i] = False
            if show[i]:
                table_html[keys[i]] = dfs[i]().to_html(classes="altrowstable", table_id="alternatecolor" + str(i + 1))
        if 'submit1' in post:
            table_name = post['table_name']
            if DataProcess.current_table_name != table_name:
                DataProcess.current_table_name = table_name
                DataProcess.query_result = NationalData.load_by_name(table_name)
                DataProcess.query_result_html = DataProcess.query_result.to_html(
                    classes="altrowstable", table_id="alternatecolor5"
                )
        elif 'clear1' in post:
            DataProcess.current_table_name = None
            DataProcess.query_result = None
            DataProcess.query_result_html = None
        if DataProcess.current_table_name is not None:
            table_html['e'] = DataProcess.query_result_html
        context['table_html'] = table_html
        if 'open5' in post:
            show[4] = True
        if 'close5' in post:
            show[4] = False
        if show[4]:
            graph_html['a'] = """
                <div id="echart02" style="width: 1100px;height:600px; background: skyblue"></div>
                <script type="text/javascript"> show_e_chart('echart02', 'json?q=2') ;</script>
            """
        if 'open6' in post:
            show[5] = True
        if 'close6' in post:
            show[5] = False
        if show[5]:
            graph_html['b'] = """
                <div id="echart03" style="width: 1100px;height:600px; background: skyblue"></div>
                <script type="text/javascript"> show_e_chart('echart03', 'json?q=3'); </script>
            """
        context['graph_html'] = graph_html
        return render(request, 'dataprocess_1.html', context)

    @staticmethod
    def to_json(dataframe):
        labels = dataframe.iloc[:, 0].to_list()
        json_ = {
            'labels': labels,
            'years': dataframe.columns[1:].to_list(),
            'data': {
                labels[i]: dataframe.iloc[i, 1:].to_list()
                for i in range(len(dataframe))
            }
        }
        json_ = json.dumps(json_)
        return json_

    @staticmethod
    def json(request):
        json_ = ''
        if request.GET:
            if 'q' in request.GET:
                k = request.GET['q']
                if k in ['1', '2', '3', '4', '5']:
                    data = {
                        '1': NationalData.get_recent_20_years_data_of_population,
                        '2': NationalData.get_recent_20_years_data_of_population_amount,
                        '3': NationalData.get_recent_20_years_data_of_population_rate,
                        '4': NationalData.get_recent_20_years_data_of_population_rate_1,
                        '5': NationalData.get_recent_20_years_data_of_population_rate_2,
                    }
                    json_ = DataProcess.to_json(data[k]())

        return HttpResponse(json_)

    @staticmethod
    def html(request):
        html_ = ''
        dfs = [
            DatabasesData.dataframe,
            CurrentDatabase.dataframe,
            TablesData.dataframe,
            NationalData.get_recent_20_years_data_of_population,
            NationalData.describe
        ]

        if request.GET:
            if 'setting' in request.GET:
                setting = request.GET['setting']
                if setting == 'open':
                    if 'q' in request.GET:
                        c = request.GET['q']
                        if c in ['1', '2', '3', '4', '5']:
                            i = int(c) - 1
                            html_ = dfs[i]().to_html(
                                classes="altrowstable",
                                table_id=f"alternatecolor{c}"
                            )
                elif setting == 'close':
                    html_ = ''

            elif 'open4_browser' in request.GET:
                html_ = NationalData.the_dataframe_from_browser().to_html(
                    classes="altrowstable",
                    table_id="alternatecolor4"
                )

            elif 'open4_memory' in request.GET:
                if NationalData.data is None:
                    html_ = pandas.DataFrame().to_html(
                        classes="altrowstable",
                        table_id="alternatecolor4"
                    )
                else:
                    html_ = NationalData.data.to_html(
                        classes="altrowstable",
                        table_id="alternatecolor4"
                    )
            elif 'open4_database' in request.GET:
                html_ = NationalData.load().to_html(
                    classes="altrowstable",
                    table_id="alternatecolor4"
                )

            elif 'submit1' in request.GET:
                table_name = request.GET['table_name']
                html_ = NationalData.load_by_name(table_name).to_html(
                    classes="altrowstable", table_id="alternatecolorq"
                )

            elif 'clear1' in request.GET:
                html_ = ''

            elif 'submit2' in request.GET:
                table_name = request.GET['table_name']
                NationalData.drop_datatable(table_name)

            elif 'clear_memory_of_population' in request.GET:
                NationalData.data = None

        return HttpResponse(html_)


def national_data(request):
    context = {}
    if request.POST:
        if 'open' in request.POST:
            data = NationalData.get_recent_20_years_data_of_population()
            table_html = data.to_html(classes="altrowstable", table_id="alternatecolor")
            context['table_html'] = table_html
    return render(request, 'national_data.html', context)
