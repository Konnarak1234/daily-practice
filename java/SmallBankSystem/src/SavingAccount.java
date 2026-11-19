public class SavingAccount extends BankAccount{
    protected static final double MINIMUM_BALANCE = 100.0;
    private static final double INTEREST_RATE = 0.05;


    public SavingAccount(
            String accountHolder,
            String accountNumber,
            double balance
    ) {
        super(accountHolder, accountNumber, balance, "Saving Account");
    }

    @Override
    public void withdraw(double amount) {

        if (amount <= 0) {
            System.out.println("Invalid withdrawal amount.");
            return;
        }

        if (balance - amount < MINIMUM_BALANCE) {
            System.out.println("Minimum balance requirement not met.");
            return;
        }

        this.balance -= amount;

        System.out.println("Savings withdrawal successful!");
    }

    public void calculateMonthlyInterest() {
        double interest = balance * INTEREST_RATE;
        System.out.println("Your monthly interest: " + interest);
    }


}
