CREATE TABLE Accounts (
    AccountID   NUMBER PRIMARY KEY,
    CustomerID  NUMBER,
    Balance     NUMBER(10, 2)
);

INSERT INTO Accounts VALUES (201, 1, 7000);
INSERT INTO Accounts VALUES (202, 2, 3000);
INSERT INTO Accounts VALUES (203, 3, 1000);

COMMIT;

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds (
    from_acct IN NUMBER,
    to_acct   IN NUMBER,
    amount    IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = from_acct;

    IF v_balance < amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance in AccountID ' || from_acct);
    ELSE
        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_acct;
        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_acct;

        DBMS_OUTPUT.PUT_LINE('Transfer of ' || amount || 
                             ' successful from AccountID ' || from_acct || 
                             ' to AccountID ' || to_acct);
    END IF;

    COMMIT;
END;
/

BEGIN
    TransferFunds(201, 202, 2000);
END;
/
