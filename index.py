import sqlite3

connection = sqlite3.connect("employee.db")
connection.row_factory = sqlite3.Row

cursor = connection.cursor()

cursor.execute("""
SELECT id,name,salary
FROM employee
""")

employees = cursor.fetchall()

for employee in employees:
    print(employee[0])
    print(employee[1])
    print(employee[2])

connection.commit()

connection.close()

if len(employees) > 0:
    average = sum(employee["salary"] for employee in employees) / len(employees)
    print(average)
else:
    print(0)