package module4;

public class CardPayment extends Payment{
    @Override
    public void pay(double amount) {
        System.out.println("Paid " + amount+ " with credit card");
    }
}
