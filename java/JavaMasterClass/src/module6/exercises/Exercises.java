package module6.exercises;

import java.util.Arrays;
import java.util.Scanner;

public class Exercises {

    public static void SafeCalculation() {
        var o = System.out;
        Scanner s = new Scanner(System.in);
        try{
            o.print("Input the value 1: ");
            String one = s.nextLine();

            double value1 = Double.parseDouble(one);

            o.print("Input the value 2: ");
            String two = s.nextLine();

            double value2 = Double.parseDouble(two);

            o.print("choosing the operation (+, -, *, /): ");
            String ops = s.nextLine();

            String[] allowOperation = {"+", "-", "*", "/"};
            if(!Arrays.asList(allowOperation).contains(ops)){
                throw new IllegalArgumentException("wrong operation");
            }

            if(ops.equals("/") && value2 == 0.0) {
                throw new ArithmeticException("Can not devide by zero");
            }

            o.println("Result: " );

        } catch(NumberFormatException e) {
            o.println("The value must be number!");
        } catch (IllegalArgumentException e) {
            o.println(e.getMessage());
        } catch (ArithmeticException e) {
            o.println(e.getMessage());
        } finally {
            s.close();
        }
    }

    public static void StudentScoreValidation() {
        var o = System.out;
        Scanner s = new Scanner(System.in);

        try {
            o.print("Input the score: ");
            String sSCore = s.nextLine();

            double score = Double.parseDouble(sSCore);

            if(score < 0 || score > 100) {
                throw new IllegalScoreException("Score is invalid");
            }

            o.println("Your score is: " + score);


        } catch(NumberFormatException e) {
            o.println(e.getMessage());
        } catch (IllegalScoreException e) {
            o.println(e.getMessage());
        } finally {
            s.close();
        }



    }
}

class IllegalScoreException extends Exception {
    public IllegalScoreException(String message) {
        super(message);
    }
}