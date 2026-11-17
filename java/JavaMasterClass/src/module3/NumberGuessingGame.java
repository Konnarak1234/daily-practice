package module3;
import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        java.io.PrintStream o = System.out;
        Random rand = new  Random();

        int answer = rand.nextInt(10) + 1;

        int attempt = 0;

        o.println("------ Number Guessing Game ------- ");
        o.println("Guess a number between 1 and 10");

        boolean isCorrect = false;


        while(!isCorrect) {
            o.print("Please input number: ");
            attempt++;
            int input = s.nextInt();

            s.nextLine();

            if(input < 1 || input > 10) {
                o.println("out of range 1-10");
            }
            else if(input == answer) {
                o.println("You guessing right!");
                o.println("Correct number is: " + answer);
                o.println("Your attempt: " + attempt);

                o.print("Press N to continue playing the game: ");
                String pressN = s.nextLine();

                if(!pressN.equals("N")) {
                    break;
                }

                attempt = 0;
                answer = rand.nextInt(10) + 1;


            } else if(input > answer){
                o.println("guessing is too high!");
            } else {
                o.println("guessing is too low");
            }

            if(attempt == 10) {

                o.println("You attempt to guess is reaching limit");

                o.print("Press N to continue playing the game: ");
                String pressN = s.nextLine();

                if(!pressN.equals("N")) {
                    break;
                }

                attempt = 0;
                answer = rand.nextInt(10) + 1;
            }

        }

        o.println("Thank for playing");

        s.close();

    }
}
