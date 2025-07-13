
# 🧾 Singleton Logger Patterns in Java

This project demonstrates **five different implementations** of the Singleton Design Pattern using simple logger classes.

## 🔧 Overview

Each logger class uses a different method to ensure that only one instance of the logger is created. The `Main` class prompts user input and logs a message using each singleton pattern.

---

## 🧩 Logger Implementations

| Logger Type             | Class Name             | Description                                      |
|------------------------|------------------------|--------------------------------------------------|
| Eager Initialization   | `EagerLogger`          | Instance created at class loading               |
| Lazy Initialization    | `LazyLogger`           | Instance created on first use                   |
| Double-Checked Locking | `DoubleCheckedLogger`  | Thread-safe lazy initialization using sync block|
| Inner Static Class     | `InnerClassLogger`     | Uses a static holder class                      |
| Enum Singleton         | `EnumLogger`           | Java-safe and serialization-proof singleton     |

---

## 📄 Files

- `Main.java`: Prompts user for input and calls each logger
- `EagerLogger.java`
- `LazyLogger.java`
- `DoubleCheckedLogger.java`
- `InnerClassLogger.java`
- `EnumLogger.java`

---

## ▶️ How to Run

1. **Compile the files:**
```bash
javac Main.java EagerLogger.java LazyLogger.java DoubleCheckedLogger.java InnerClassLogger.java EnumLogger.java
```

2. **Run the program:**
```bash
java Main
```

3. **Enter messages** when prompted for each logger type.

---

## 🧪 Sample Inputs & Output

### Sample Inputs:
```
System initialized.
User login successful.
Cache loaded.
Session started.
Application shutdown.
```

### Sample Output:
```
[EagerLogger] System initialized.
[LazyLogger] User login successful.
[DoubleCheckedLogger] Cache loaded.
[InnerClassLogger] Session started.
[EnumLogger] Application shutdown.
```

---

## 🧠 Why Use Singleton?

Singletons are useful for:
- Logging
- Configuration management
- Caching
- Thread pools
- Shared resources

---

## 📎 License

This project is free for educational and personal use.
