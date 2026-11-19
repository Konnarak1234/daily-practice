public class CheckingAccount extends BankAccount{
    protected static final double OVERDRAFT_LIMIT = 500.0;

    public CheckingAccount(
            String accountHolder,
            String accountNumber,
            double balance
    ) {
        super(accountHolder, accountNumber, balance, "Checking Account");
    }


    @Override
    public void withdraw(double amount) {

        if (amount <= 0) {
            System.out.println("Invalid withdrawal amount.");
            return;
        }

        if (balance - amount < -OVERDRAFT_LIMIT) {
            System.out.println("Overdraft limit exceeded.");
            return;
        }

        balance -= amount;

        System.out.println("Checking withdrawal successful!");
    }
}
