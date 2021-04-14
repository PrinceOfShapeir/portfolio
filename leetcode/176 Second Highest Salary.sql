# Write your MySQL query statement below

SELECT MAX(Salary) AS SecondHighestSalary FROM Employee WHERE
Salary < (SELECT MAX(SALARY) FROM Employee)
UNION
SELECT null WHERE NOT EXISTS (SELECT Salary FROM Employee WHERE Id=2)
UNION 
SELECT null WHERE NOT EXISTS (SELECT MAX(Salary) FROM Employee WHERE
Salary < (SELECT MAX(SALARY) FROM Employee));
