
public abstract class BankAccount {

    private String accountHolder;
    private String accountNumber;
    protected double balance;

    protected final String accountType;

    public BankAccount(
            String accountHolder,
            String accountNumber,
            double balance,
            String accountType
    ) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }

    protected void getAccountType() {
        System.out.println("This is : " + accountType);
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {

        if (amount <= 0) {
            System.out.println("Invalid deposit amount.");
            return;
        }

        balance += amount;

        System.out.println("Deposit successful!");
    }

    public abstract void withdraw(double amount);

    public void displayAccountInfo() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Type: " + accountType);
        System.out.println("Balance: $" + balance);
    }

    public void transfer(BankAccount account, double amount) {
        if(account.accountType.equals("Saving Account")) {
            if(this.balance - amount < -CheckingAccount.OVERDRAFT_LIMIT) {
                System.out.println("Funding exceed limit OverDraft");
            } else {
                account.balance += amount;
                this.balance -= amount;
                System.out.println("Money transfer successful");
            }
        } else {
            if(amount > SavingAccount.MINIMUM_BALANCE || this.balance - amount < 0) {
                System.out.println("Funding exceed is insufficient");
            } else {
                account.balance += amount;
                this.balance -= amount;
                System.out.println("Money transfer successful");
            }
        }
    }

}
