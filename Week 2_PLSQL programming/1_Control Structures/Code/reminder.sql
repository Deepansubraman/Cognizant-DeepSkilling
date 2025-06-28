BEGIN
    FOR rec IN (
        SELECT customer_id, loan_due_date
        FROM loans
        WHERE loan_due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ID ' || rec.customer_id || 
            ' has a loan due on ' || TO_CHAR(rec.loan_due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;
