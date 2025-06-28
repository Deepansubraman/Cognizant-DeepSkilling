BEGIN
    FOR rec IN (SELECT customer_id, interest_rate FROM customers WHERE age > 60) LOOP
        UPDATE customers
        SET interest_rate = interest_rate - 1
        WHERE customer_id = rec.customer_id;
    END LOOP;
    COMMIT;
END;
