public class WordDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Word Document");
    }

    public void printWordCount() {
        System.out.println("Word Document has 1,200 words.");
    }
}
