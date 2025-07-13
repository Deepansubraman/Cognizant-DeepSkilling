public class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening PDF Document");
    }

    public void displaySecuritySettings() {
        System.out.println("PDF Document is password-protected.");
    }
}
