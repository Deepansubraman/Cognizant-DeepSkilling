CREATE TABLE Employees (
    EmpID      NUMBER PRIMARY KEY,
    EmpName    VARCHAR2(100),
    Department VARCHAR2(50),
    Salary     NUMBER(10, 2)
);

INSERT INTO Employees VALUES (1, 'Ravi', 'HR', 30000);
INSERT INTO Employees VALUES (2, 'Anu', 'IT', 40000);
INSERT INTO Employees VALUES (3, 'Suresh', 'IT', 45000);
INSERT INTO Employees VALUES (4, 'Meena', 'Finance', 35000);

COMMIT;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    dept_name IN VARCHAR2,
    bonus_pct IN NUMBER
) IS
    new_salary NUMBER;
BEGIN
    FOR rec IN (SELECT EmpID, Salary FROM Employees WHERE Department = dept_name) LOOP
        new_salary := rec.Salary + (rec.Salary * bonus_pct / 100);

        UPDATE Employees
        SET Salary = new_salary
        WHERE EmpID = rec.EmpID;

        DBMS_OUTPUT.PUT_LINE('Bonus applied to EmpID ' || rec.EmpID || 
                             ', New Salary: ' || TO_CHAR(new_salary, '99999.99'));
    END LOOP;

    COMMIT;
END;
/
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/
