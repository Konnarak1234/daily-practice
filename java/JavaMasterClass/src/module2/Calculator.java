package module2;

import java.util.Scanner;
public class Calculator {
    public static void main(String[] args) {
        java.io.PrintStream o = System.out;

        Scanner scanner = new Scanner(System.in);

        o.print("Enter first number: ");
        double firstNumber = scanner.nextDouble();

        o.print("Enter second number: ");
        double secondNumber = scanner.nextDouble();

        scanner.nextLine();

        o.print("choose operation (+ - * /): ");
        String operator = scanner.nextLine();

        double result = 0;

        switch(operator) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                if(secondNumber == 0) {
                    o.println("can't devided with 0");
                    scanner.close();
                    return;
                }
                else result = firstNumber/secondNumber;
                break;
            default:
                o.println("wrong operation");
                scanner.close();
                return;
        }

        o.println("Result: " + result);

        scanner.close();
    }
}
