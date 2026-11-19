package module4.abstraction;

public class KHQRPayment implements PaymentMethod{

    @Override
    public void pay(double amount) {
        System.out.println("Pay with KHQR : " + amount);
    }

    @Override
    public void payment() {
        System.out.println("haha khqr" + PaymentMethod.hello);
    }
}
