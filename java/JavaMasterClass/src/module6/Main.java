package module6;

public class Main {
    public static void main(String[] args) {
        try {
            throw new MyOwnException();
        } catch (MyOwnException e) {
            System.out.println(e.getMessage());
        }
    }
}
