DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    UPDATE Accounts
    SET balance = balance * 1.01
    WHERE account_type = 'Savings';
END //

DELIMITER ;
