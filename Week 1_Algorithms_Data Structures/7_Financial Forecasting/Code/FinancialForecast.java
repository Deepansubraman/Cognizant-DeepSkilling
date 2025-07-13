
public class FinancialForecast {

    public static double futureValueRecursive(double initialValue, double rate, int n) {
        if (n == 0) {
            return initialValue;
        }
        return futureValueRecursive(initialValue, rate, n - 1) * (1 + rate);
    }

    public static double futureValueMemo(double initialValue, double rate, int n, Double[] memo) {
        if (n == 0) {
            return initialValue;
        }
        if (memo[n] != null) {
            return memo[n];
        }
        memo[n] = futureValueMemo(initialValue, rate, n - 1, memo) * (1 + rate);
        return memo[n];
    }

    public static void main(String[] args) {
        double initial = 1000.0;  
        double rate = 0.05;        
        int years = 10;

        System.out.println("Recursive Forecast:");
        double value1 = futureValueRecursive(initial, rate, years);
        System.out.printf("Future Value after %d years: %.2f\n", years, value1);

        System.out.println("\nMemoized Recursive Forecast:");
        Double[] memo = new Double[years + 1];
        double value2 = futureValueMemo(initial, rate, years, memo);
        System.out.printf("Future Value after %d years: %.2f\n", years, value2);
    }
}
