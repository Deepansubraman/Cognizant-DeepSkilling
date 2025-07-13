public class LazyLogger {
    private static LazyLogger instance;

    private LazyLogger() {
        System.out.println("LazyLogger Initialized");
    }

    public static synchronized LazyLogger getInstance() {
        if (instance == null) {
            instance = new LazyLogger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
