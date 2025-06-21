public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }

    public void showCellFormulas() {
        System.out.println("Excel Document contains formulas in 12 cells.");
    }
}
