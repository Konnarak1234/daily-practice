package module3.challenge;
import java.util.Scanner;

public class PersistATMOption {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        java.io.PrintStream o = System.out;

        System.out.println("===== ATM MENU =====");
        System.out.println("1. Check Balance");
        System.out.println("2. Deposit Money");
        System.out.println("3. Withdraw Money");
        System.out.println("4. Exit");

        int option;

    while(true) {
        o.print("Please select option: ");
        option = scanner.nextInt();

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

        if(option == 4) {
            break;
        }
    }



        scanner.close();

    }
}
