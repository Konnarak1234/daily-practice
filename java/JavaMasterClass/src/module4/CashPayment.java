package module4;

public class CashPayment extends Payment{
    @Override
    public void pay(double amount) {
        System.out.println("Paid " + amount+ " with Cash");
    }
}
