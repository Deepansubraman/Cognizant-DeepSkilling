DELIMITER //

CREATE PROCEDURE TransferFunds(
    IN from_account_id INT,
    IN to_account_id INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE from_balance DECIMAL(10,2);

    SELECT balance INTO from_balance
    FROM Accounts
    WHERE account_id = from_account_id;

    IF from_balance >= amount THEN
        UPDATE Accounts
        SET balance = balance - amount
        WHERE account_id = from_account_id;

        UPDATE Accounts
        SET balance = balance + amount
        WHERE account_id = to_account_id;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient funds in source account.';
    END IF;
END //

DELIMITER ;
