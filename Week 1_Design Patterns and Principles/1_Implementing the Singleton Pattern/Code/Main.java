import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a message to log using EagerLogger:");
        String eagerInput = scanner.nextLine();
        EagerLogger.getInstance().log(eagerInput);

        System.out.println("Enter a message to log using LazyLogger:");
        String lazyInput = scanner.nextLine();
        LazyLogger.getInstance().log(lazyInput);

        System.out.println("Enter a message to log using DoubleCheckedLogger:");
        String doubleCheckedInput = scanner.nextLine();
        DoubleCheckedLogger.getInstance().log(doubleCheckedInput);

        System.out.println("Enter a message to log using InnerClassLogger:");
        String innerInput = scanner.nextLine();
        InnerClassLogger.getInstance().log(innerInput);

        System.out.println("Enter a message to log using EnumLogger:");
        String enumInput = scanner.nextLine();
        EnumLogger.INSTANCE.log(enumInput);

        scanner.close();
    }
}
