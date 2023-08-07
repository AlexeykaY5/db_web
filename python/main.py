import pymysql
from config import host, user, password, db_name


try:
    connection = pymysql.connect(
        host=host,
        port=3306,
        user=user,
        password=password,
        database=db_name,
        cursorclass=pymysql.cursors.DictCursor
    )
    print("Successfully refused")
    try:
        # with connection.cursor() as cursor:
        #     create_table_query = "CREATE TABLE `` (id int AUTO_INCREMENT,"\
        #                          " name varchar(32),"\
        #                          " password varchar(32),"\
        #                          " email varchar(32), PRIMARY KEY (id));"
        #     cursor.execute(create_table_query)
        #     print("Table created successfully")

        # add data to table

        # with connection.cursor() as cursor:
        #     insert_query = "INSERT INTO `produkts` (name, description, price) VALUES ('Женская укладка', 'qwerty', '123');"
        #     cursor.execute(insert_query)
        #     connection.commit()
        #     print("Table data add successfully")

        # select data from table

        with connection.cursor() as cursor:
            select_all_rows = "SELECT * FROM `produkts`"
            cursor.execute(select_all_rows)
            rows = cursor.fetchall()
            for row in rows:
                print(row)
            print('#' * 20)


    finally:
        connection.close()

except Exception as ex:
    print("Connection refused...")
    print(ex)

