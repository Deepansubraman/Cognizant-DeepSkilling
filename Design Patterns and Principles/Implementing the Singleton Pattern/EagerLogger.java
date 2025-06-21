public class EagerLogger {
    private static final EagerLogger instance = new EagerLogger();

    private EagerLogger() {
        System.out.println("EagerLogger Initialized");
    }

    public static EagerLogger getInstance() {
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
