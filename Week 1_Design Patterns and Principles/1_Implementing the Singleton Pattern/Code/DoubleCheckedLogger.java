public class DoubleCheckedLogger {
    private static volatile DoubleCheckedLogger instance;

    private DoubleCheckedLogger() {
        System.out.println("DoubleCheckedLogger Initialized");
    }

    public static DoubleCheckedLogger getInstance() {
        if (instance == null) {
            synchronized (DoubleCheckedLogger.class) {
                if (instance == null) {
                    instance = new DoubleCheckedLogger();
                }
            }
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
