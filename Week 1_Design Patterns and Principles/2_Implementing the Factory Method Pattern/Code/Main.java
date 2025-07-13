import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose a document type to create (word/pdf/excel):");
        String input = scanner.nextLine().trim().toLowerCase();

        DocumentFactory factory = null;

        switch (input) {
            case "word":
                factory = new WordFactory();
                break;
            case "pdf":
                factory = new PdfFactory();
                break;
            case "excel":
                factory = new ExcelFactory();
                break;
            default:
                System.out.println("Invalid input.");
                System.exit(1);
        }

        Document document = factory.createDocument();
        document.open();

        // Unique document behavior
        if (document instanceof WordDocument) {
            ((WordDocument) document).printWordCount();
        } else if (document instanceof PdfDocument) {
            ((PdfDocument) document).displaySecuritySettings();
        } else if (document instanceof ExcelDocument) {
            ((ExcelDocument) document).showCellFormulas();
        }

        scanner.close();
    }
}
