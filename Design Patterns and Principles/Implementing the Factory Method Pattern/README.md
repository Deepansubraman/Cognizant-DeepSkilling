# 🏭 Factory Method Pattern with User Input in Java

This project demonstrates the **Factory Method Design Pattern** using a document creation system. Users can select which document type to create at runtime (`Word`, `PDF`, or `Excel`), and the program dynamically uses the correct factory to produce the document.

---

## 📂 Project Structure

```
FactoryMethodPatternExample/
├── Document.java
├── WordDocument.java
├── PdfDocument.java
├── ExcelDocument.java
├── DocumentFactory.java
├── WordFactory.java
├── PdfFactory.java
├── ExcelFactory.java
└── Main.java
```

---

## 🔍 Class Responsibilities

| File               | Description |
|--------------------|-------------|
| `Document.java`    | Base interface for all document types. |
| `WordDocument.java`| Word-specific document class. |
| `PdfDocument.java` | PDF-specific document class. |
| `ExcelDocument.java`| Excel-specific document class. |
| `DocumentFactory.java` | Abstract factory class. |
| `WordFactory.java` | Creates `WordDocument`. |
| `PdfFactory.java`  | Creates `PdfDocument`. |
| `ExcelFactory.java`| Creates `ExcelDocument`. |
| `Main.java`        | Accepts user input and uses factories. |


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

### 📝 Input: `word`
```
Choose a document type to create (word/pdf/excel):
word
Opening Word Document
Word Document has 1,200 words.
```

### 📝 Input: `pdf`
```
Choose a document type to create (word/pdf/excel):
pdf
Opening PDF Document
PDF Document is password-protected.
```

### 📝 Input: `excel`
```
Choose a document type to create (word/pdf/excel):
excel
Opening Excel Document
Excel Document contains formulas in 12 cells.
```

### ❌ Input: `ppt`
```
Choose a document type to create (word/pdf/excel):
ppt
Invalid input.
```

---

## 🧠 Design Pattern Used: Factory Method

This example uses the **Factory Method Pattern**, which allows creating objects without specifying their exact class. It provides flexibility and scalability when introducing new document types.

- **`DocumentFactory`** is the abstract creator.
- **`WordFactory`, `PdfFactory`, `ExcelFactory`** are concrete creators.
- **`Document`** is the product interface.
- **Each document class** has unique behaviors to simulate real-world functionality.

---

## 📌 Credits

- Exercise: Cognizant Deepskilling - Design Patterns
- Language: Java
- Pattern: Factory Method
