DELIMITER //

CREATE PROCEDURE UpdateEmployeeBonus(
    IN dept_id INT,
    IN bonus_percent DECIMAL(5,2)
)
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * (bonus_percent / 100))
    WHERE department_id = dept_id;
END //

DELIMITER ;
