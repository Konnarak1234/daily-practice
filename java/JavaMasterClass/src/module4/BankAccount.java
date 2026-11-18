package module4;

public class BankAccount {
    private String owner;
    protected double balance;


    // default constructor

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // constructor overload
    public BankAccount(String owner) {
        this.owner = owner;
        balance = 0;
    }

    // Getter
    public String getOwner() {
        return owner;
    }

    // Getter
    public double getBalance() {
        return balance;
    }

    public void displayBalance() {
        System.out.println(balance);
    }

    public void deposit(double amount) {
        if(amount < 0) {
            System.out.println("Invalid amount!");
            return;
        }

        this.balance += amount;
        System.out.println("Deposite successful!");
    }

    public void withdraw(double amount) {
        if( amount < 0 || amount > this.balance) {
            System.out.println("cannot withdraw!");
            return;
        }
        this.balance -= amount;
        System.out.println("Withdraw successful!");
    }

    protected void displayAccountType() {
        System.out.println("This is general Account");
    }

}


