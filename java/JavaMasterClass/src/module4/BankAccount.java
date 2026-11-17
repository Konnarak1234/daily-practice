package module4;

public class BankAccount {
    private String owner;
    private double balance;

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

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

    // Setter
    public void setOwner(String owner) {
        this.owner = owner;
    }

}
