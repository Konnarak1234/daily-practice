package module3;
import java.util.Scanner;

public class ATMOption {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        java.io.PrintStream o = System.out;

        System.out.println("===== ATM MENU =====");
        System.out.println("1. Check Balance");
        System.out.println("2. Deposit Money");
        System.out.println("3. Withdraw Money");
        System.out.println("4. Exit");

        o.print("Please select option: ");
        int option = scanner.nextInt();

        switch(option) {
            case 1:
                o.println("check balance");
                break;
            case 2:
                o.println("Desposit money");
                break;
            case 3:
                o.println("withdraw money");
                break;
            case 4:
                o.println("exit atm");
                break;
            default:
                o.println("invalid input");

        }

        String narak = switch(option) {
            case 1 -> "one";
            case 2 -> "two";
            default -> "no value";

        };

        o.print(narak);

        scanner.close();

   }
}
