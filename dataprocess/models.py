# Create your models here.

import selenium.webdriver
import sqlalchemy
from django.conf import settings

import time
import pandas
from selenium.webdriver.common.by import By


class DatabasesData:
    @staticmethod
    def dataframe():
        return pandas.read_sql('SHOW DATABASES', NationalData.engine)


class CurrentDatabase:
    @staticmethod
    def dataframe():
        return pandas.read_sql('SELECT database()', NationalData.engine)


class TablesData:
    @staticmethod
    def dataframe():
        return pandas.read_sql('SHOW TABLES', NationalData.engine)


class NationalData:
    main_page_url = 'http:\\data.stats.gov.cn'
    easy_query_annual_data_url = f'{main_page_url}\\easyquery.htm?cn=C01'
    time_sep = 0.3
    data = None
    rate_data = None
    amount_data = None
    sql_url = sqlalchemy.engine.URL.create(
        'mysql+pymysql',
        username=settings.DATABASES['default']['USER'],
        password=settings.DATABASES['default']['PASSWORD'],  # plain (unescaped) text
        host=settings.DATABASES['default']['HOST'],
        port=settings.DATABASES['default']['PORT'],
        database=settings.DATABASES['default']['NAME'],
    )
    engine = sqlalchemy.create_engine(sql_url)
    sql_storage_table_population_name = 'population'

    @staticmethod
    def browser():
        # 注意要提前给Chrome浏览器安装插件 Selenium API
        options = selenium.webdriver.ChromeOptions()
        # 关闭关于http的警告
        options.add_argument('--ignore-certificate-errors')
        # 关闭浏览器显示
        # options.add_argument('--headless')  # TODO
        # 注意要下载好驱动chromedriver.exe
        browser = selenium.webdriver.Chrome(
            r'C:\Users\Dell\Downloads\chromedriver_win32\chromedriver.exe',
            options=options
        )
        return browser

    @staticmethod
    def click_the_recent_20_year_button(browser):
        browser.find_element(By.CLASS_NAME, 'dtHtml').click()
        time.sleep(NationalData.time_sep)
        browser.find_element(By.XPATH, "//li[@title='最近20年']").click()
        time.sleep(NationalData.time_sep)

    @staticmethod
    def dataframe(browser):
        table = browser.find_element(By.CLASS_NAME, 'table_fix')
        thead = table.find_element(By.TAG_NAME, 'thead')
        thead_text_ls = [strong.get_attribute('innerText') for strong in thead.find_elements(By.TAG_NAME, 'strong')]
        tbody = table.find_element(By.TAG_NAME, 'tbody')
        tbody_rows = tbody.find_elements(By.TAG_NAME, 'tr')
        tbody_data = [
            [item.get_attribute('innerText') for item in row.find_elements(By.TAG_NAME, 'td')]
            for row in tbody_rows
        ]
        dataframe = pandas.DataFrame(tbody_data, columns=thead_text_ls)
        return dataframe

    @staticmethod
    def the_dataframe(browser):
        time_sep = NationalData.time_sep

        NationalData.click_the_recent_20_year_button(browser)

        browser.find_element(By.ID, 'treeZhiBiao_4_a').click()
        time.sleep(time_sep)

        browser.find_element(By.ID, 'treeZhiBiao_30_a').click()
        time.sleep(time_sep)
        data00 = NationalData.dataframe(browser)
        time.sleep(time_sep)

        browser.find_element(By.ID, 'treeZhiBiao_31_a').click()
        time.sleep(time_sep)
        data01 = NationalData.dataframe(browser)
        time.sleep(time_sep)

        browser.find_element(By.ID, 'treeZhiBiao_32_a').click()
        time.sleep(time_sep)
        data02 = NationalData.dataframe(browser)
        time.sleep(time_sep)

        data03 = pandas.concat([data00, data01, data02]).reset_index(drop=True)

        new_columns = [data03.columns[0], *data03.columns[-1:0:-1]]
        data = data03[new_columns]

        return data

    @staticmethod
    def dataframe_from_browser():
        with NationalData.browser() as browser:
            browser.get(NationalData.easy_query_annual_data_url)
            time.sleep(NationalData.time_sep)
            data = NationalData.the_dataframe(browser)
        return data

    @staticmethod
    def get_recent_20_years_data_of_population():
        loaded = NationalData.data is not None
        with NationalData.engine.connect() as con:
            saved = NationalData.engine.dialect.has_table(con, NationalData.sql_storage_table_population_name)
        if loaded:
            if not saved:
                NationalData.save(NationalData.data)
            return NationalData.data
        elif saved:
            NationalData.data = NationalData.load()
            return NationalData.data
        else:
            data = NationalData.dataframe_from_browser()
            NationalData.data = data
            NationalData.save(data)
            return data

    @staticmethod
    def get_recent_20_years_data_of_population_rate():
        data = NationalData.get_recent_20_years_data_of_population()
        if NationalData.rate_data is None:
            NationalData.rate_data = pandas.concat(
                [data.iloc[i, :] for i in range(len(data)) if i in [5, 6, 7, 12, 13, 14]],
                axis=1
            ).T.reset_index(drop=True)
        return NationalData.rate_data

    @staticmethod
    def get_recent_20_years_data_of_population_amount():
        data = NationalData.get_recent_20_years_data_of_population()
        if NationalData.amount_data is None:
            NationalData.amount_data = pandas.concat(
                [data.iloc[i, :] for i in range(len(data)) if i not in [5, 6, 7, 12, 13, 14]],
                axis=1
            ).T.reset_index(drop=True)
        return NationalData.amount_data

    @staticmethod
    def test_print_recent_20_years_data_of_population():
        print(NationalData.get_recent_20_years_data_of_population())

    @staticmethod
    def test_click():
        browser = NationalData.browser()
        browser.get(NationalData.easy_query_annual_data_url)
        time.sleep(NationalData.time_sep)
        NationalData.click_the_recent_20_year_button(browser)

    @staticmethod
    def save(dataframe):
        dataframe.to_sql(NationalData.sql_storage_table_population_name, NationalData.engine, index=False)

    @staticmethod
    def load():
        return pandas.read_sql(NationalData.sql_storage_table_population_name, NationalData.engine)

    @staticmethod
    def load_by_name(name):
        with NationalData.engine.connect() as con:
            if NationalData.engine.dialect.has_table(con, name):
                return pandas.read_sql(name, NationalData.engine)
        return pandas.DataFrame()

    @staticmethod
    def drop_datatable(name):
        with NationalData.engine.connect() as con:
            if NationalData.engine.dialect.has_table(con, name):
                con.execute(f'DROP TABLE {name}').close()


