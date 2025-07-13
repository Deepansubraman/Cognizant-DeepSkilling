CREATE TABLE SavingsAccounts (
    AccountID   NUMBER PRIMARY KEY,
    CustomerID  NUMBER,
    Balance     NUMBER(10, 2)
);
INSERT INTO SavingsAccounts VALUES (101, 1, 5000);
INSERT INTO SavingsAccounts VALUES (102, 2, 10000);
INSERT INTO SavingsAccounts VALUES (103, 3, 20000);
COMMIT;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
    new_balance NUMBER;
BEGIN
    FOR rec IN (SELECT AccountID, Balance FROM SavingsAccounts) LOOP
        new_balance := rec.Balance + (rec.Balance * 0.01);

        UPDATE SavingsAccounts
        SET Balance = new_balance
        WHERE AccountID = rec.AccountID;

        DBMS_OUTPUT.PUT_LINE('Interest applied to AccountID ' || rec.AccountID ||
                             ', New Balance: ' || TO_CHAR(new_balance, '99999.99'));
    END LOOP;

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/
