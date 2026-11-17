package module4;

public class Main {
    public static void main(String[] args) {
        BankAccount account =
                new BankAccount("Narak", 1000.0);

        System.out.println(account.getBalance());
    }
}
