package module6;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TryCatchExample {

    public static void handleArithmeticException() {
        int number1 = 10;
        int number2 = 0;

        try {

            int result = number1 / number2;

            System.out.println("Result: " + result);

        } catch (ArithmeticException e) {
            for(var err : e.getStackTrace()) {
                System.out.println(err.toString());
            }
            System.out.println("Error: Cannot divide by zero.");
        } finally {
            System.out.println("clean up operation finished'");
        }

        System.out.println("Program finished.");
    };

    public static void handleMultipleException() {
        String[] numbers = {"10", "20", "hello"};

        try {

            int number = Integer.parseInt(numbers[2]);

            System.out.println(number);

        } catch (NumberFormatException e) {

            System.out.println("The value is not a valid number.");

        } catch (ArrayIndexOutOfBoundsException e) {

            System.out.println("The array index does not exist.");

        } catch (Exception e) {
            System.out.println("The array index does not exist.");
        }
    }

    public static void handleUserInputException() {
        Scanner s = new Scanner(System.in);

        try {

            System.out.print("Enter deposit amount: ");

            double amount = s.nextDouble();

            System.out.println("You entered: $" + amount);

        } catch (InputMismatchException e) {

            System.out.println("Invalid input! Please enter a number.");

        } finally {

            s.close();
        }
    }

    public static void handleUserInputExceptionFromStringInput() {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter deposit amount: ");

        String input = scanner.nextLine();

        try {

            double amount = Double.parseDouble(input);

            if (amount <= 0) {

                System.out.println("Amount must be greater than zero.");

            } else {

                System.out.println("Deposit amount: $" + amount);
            }

        } catch (NumberFormatException e) {

            System.out.println("Invalid input! Please enter a number.");
        }

        scanner.close();
    }
}
