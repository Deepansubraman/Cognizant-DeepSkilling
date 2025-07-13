CREATE TABLE Customers (
    CustomerID       NUMBER PRIMARY KEY,
    CustomerName     VARCHAR2(100),
    Age              NUMBER,
    Balance          NUMBER(10,2),
    LoanInterestRate NUMBER(5,2),
    IsVIP            CHAR(1) DEFAULT 'N'
);
CREATE TABLE Loans (
    LoanID      NUMBER PRIMARY KEY,
    CustomerID  NUMBER REFERENCES Customers(CustomerID),
    DueDate     DATE
);
-- Sample customers
INSERT INTO Customers VALUES (1, 'Arun', 65, 12000.00, 10.0, 'N');
INSERT INTO Customers VALUES (2, 'Priya', 45, 8000.00, 9.5, 'N');
INSERT INTO Customers VALUES (3, 'Kumar', 70, 5000.00, 11.0, 'N');
INSERT INTO Customers VALUES (4, 'Sneha', 30, 15000.00, 10.5, 'N');

-- Sample loans
INSERT INTO Loans VALUES (101, 1, SYSDATE + 10);  -- due in 10 days
INSERT INTO Loans VALUES (102, 2, SYSDATE + 40);  -- not within 30 days
INSERT INTO Loans VALUES (103, 4, SYSDATE + 5);   -- due in 5 days

COMMIT;
BEGIN
    FOR rec IN (SELECT CustomerID, Age FROM Customers) LOOP
        IF rec.Age > 60 THEN
            UPDATE Customers
            SET LoanInterestRate = LoanInterestRate - 1
            WHERE CustomerID = rec.CustomerID;
            DBMS_OUTPUT.PUT_LINE('1% discount applied to CustomerID: ' || rec.CustomerID);
        END IF;
    END LOOP;

    COMMIT;
END;
