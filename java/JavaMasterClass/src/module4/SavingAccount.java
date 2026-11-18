package module4;

public class SavingAccount extends BankAccount{

    public SavingAccount(String owner, double balance) {
        super(owner, balance);

    }

    public void addInterest(double rate) {
        double interest = this.balance * (rate / 100);

        this.balance += interest;

        System.out.println("Interest add: " + interest);
    }

    @Override
    public void displayAccountType() {
        System.out.println("This is Saving Account");
    }
}
