public class InnerClassLogger {
    private InnerClassLogger() {
        System.out.println("InnerClassLogger Initialized");
    }

    private static class Holder {
        private static final InnerClassLogger INSTANCE = new InnerClassLogger();
    }

    public static InnerClassLogger getInstance() {
        return Holder.INSTANCE;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
