# 📊 Java Projects: E-commerce Search & Financial Forecasting

This repository contains two beginner-to-intermediate level Java applications that demonstrate core computer science concepts like search algorithms, recursion, and memoization.

---

## 🛒 1. E-commerce Platform Search Function

### 🔍 Overview

Simulates a basic product search system using:

- ✅ **Linear Search**
- ✅ **Binary Search** (on sorted list)
- ✅ **HashMap Lookup** (for constant-time access)

### 🧠 Key Concepts

- Time complexity using **Big O Notation**
- Sorting & searching in Java
- **HashMap indexing** for optimization
- String comparison and collection manipulation

### 🧪 Sample Output

```
Linear Search:
Product(102, 'MacBook Pro', 'Electronics')

Binary Search:
Product(102, 'MacBook Pro', 'Electronics')

HashMap Search:
Product(102, 'MacBook Pro', 'Electronics')
```

### 📁 File: `EcommerceSearch.java`

- Defines a `Product` class
- Implements three search methods
- Demonstrates output in `main()`

---

## 📈 2. Financial Forecasting Tool

### 💼 Overview

A recursive Java tool that predicts future investment values using a constant growth rate with two approaches:

- 🔁 **Simple Recursion**
- 🧠 **Memoized Recursion** (Dynamic Programming)

### 📘 Formula Used

```
FV(n) = FV(n - 1) * (1 + r)
```

Where:
- `FV` = future value
- `n` = number of years
- `r` = growth rate

### 🧠 Concepts Covered

- Recursion and stack tracing
- Memoization for performance optimization
- Time complexity: `O(n)`

### 🧪 Sample Output

```
Recursive Forecast:
Future Value after 10 years: 1628.89

Memoized Recursive Forecast:
Future Value after 10 years: 1628.89
```

### 📁 File: `FinancialForecast.java`

- Contains both `futureValueRecursive` and `futureValueMemo` methods
- Demonstrates result in `main()` function

---

## 🛠️ How to Run

### 🔧 Compile and Run (CLI)

```bash
javac EcommerceSearch.java
java EcommerceSearch

javac FinancialForecast.java
java FinancialForecast
```

---

## ✅ Summary

| Project              | Concept               | Best Use Case              |
|----------------------|-----------------------|-----------------------------|
| E-commerce Search    | Search Algorithms     | Fast product lookup         |
| Financial Forecasting| Recursion & Memoization | Investment projections  |

---

## 📎 License

This project is open-source and free to use for educational and personal purposes.
