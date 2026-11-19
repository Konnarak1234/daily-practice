package module4.abstraction;

public interface PaymentMethod {

    public static String narak ="hello";
    static void doPay () {
        Circle circle = new Circle(2);
        circle.calculateArea();
    }

    public static int hello = 2;

    default void payment() {
        System.out.println("haha");
    }
    void pay(double amount);
}
