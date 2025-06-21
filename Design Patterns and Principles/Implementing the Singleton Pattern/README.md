# 🔒 Singleton Pattern in Java

This project demonstrates the **Singleton Design Pattern** using different approaches of logger implementations. The goal is to ensure only one instance of a logging utility exists throughout the application lifecycle.

---

## 📂 Project Structure

```
SingletonPatternExample/
├── EagerLogger.java
├── LazyLogger.java
├── DoubleCheckedLogger.java
├── InnerClassLogger.java
├── EnumLogger.java
└── Main.java
```

---

## 🔍 Class Responsibilities

| File                    | Description |
|-------------------------|-------------|
| `EagerLogger.java`      | Singleton created at class loading time. |
| `LazyLogger.java`       | Singleton created when needed. |
| `DoubleCheckedLogger.java` | Thread-safe lazy instantiation using double-check locking. |
| `InnerClassLogger.java` | Singleton using static inner helper class. |
| `EnumLogger.java`       | Singleton using enum type. |
| `Main.java`             | Test class to demonstrate logger usage. |

---

## ▶️ How to Compile and Run

1. Open terminal in the folder with your `.java` files.
2. Compile all classes:

```bash
javac *.java
```

3. Run the program:

```bash
java Main
```

---

## 💻 Sample Run Output

```
Testing EagerLogger:
EagerLogger Initialized
Log: Eager log 1

Testing LazyLogger:
LazyLogger Initialized
Log: Lazy log 1

Testing DoubleCheckedLogger:
DoubleCheckedLogger Initialized
Log: Double Checked log 1

Testing InnerClassLogger:
InnerClassLogger Initialized
Log: Inner Class log 1

Testing EnumLogger:
Log: Enum log 1
```

---

## 🧠 Design Pattern Used: Singleton

This example uses the **Singleton Pattern** to ensure that only a single instance of the logger exists. It demonstrates **five different techniques** to implement the pattern in Java:

- **Eager Initialization**
- **Lazy Initialization**
- **Double-Checked Locking**
- **Static Inner Class**
- **Enum Singleton**

Each approach has pros and cons with regard to performance, thread safety, and initialization control.

---

## 📌 Credits

- Exercise: Cognizant Deepskilling - Design Patterns
- Language: Java
- Pattern: Singleton
