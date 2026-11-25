package module6;

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
}
