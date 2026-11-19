

public class Main {

    public static void main(String[] args) {

        BankAccount savings =
                new SavingAccount(
                        "Narak",
                        "SAV-001",
                        1000.0
                );

        BankAccount checking =
                new CheckingAccount(
                        "Dara",
                        "CHK-001",
                        500.0
                );

        System.out.println("=== SAVINGS ACCOUNT ===");

        savings.displayAccountInfo();
        savings.deposit(200);
        savings.withdraw(300);
        savings.transfer(checking, 100);
        savings.displayAccountInfo();

        System.out.println("\n=== CHECKING ACCOUNT ===");

        checking.displayAccountInfo();
        checking.withdraw(700);
        checking.displayAccountInfo();
    }
}
