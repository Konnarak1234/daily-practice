package module3;
import java.util.Scanner;

public class LoginSystem {
    public static void main(String[] args) {
        java.io.PrintStream o = System.out;
        Scanner scanner = new Scanner(System.in);

        String correctPassword = "narak1234";

        boolean isCorrect = false;
        int attempts = 0;

        while(!isCorrect) {
            o.print("Please input your password: ");
            attempts++;
            String input = scanner.nextLine();
           if(input.equals(correctPassword)) {
                o.print("You Login Successful");
                isCorrect = true;
           } else if(attempts > 3) {
                o.print("Your account is temporary block!");
                isCorrect = true;
            } else {
                o.println("wrong password");
            }
        }





        scanner.close();
    }
}
