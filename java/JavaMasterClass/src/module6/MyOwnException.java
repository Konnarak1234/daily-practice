package module6;

public class MyOwnException extends Exception{

    public MyOwnException() {
        super("My default message");
    }
    public MyOwnException(String message) {
        super("This is my own exception");
    }
}
