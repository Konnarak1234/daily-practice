package module6;

public class ExceptionExample {
    public static void arithmeticException() {
        int number1 = 10;
        int number2 = 0;

        // integer division by zero
        int result = number1 / number2;

        System.out.println("Result: " + result);
        System.out.println("Program finished.");
    }

    public static void nullPointerException() {
        String name = null;
        System.out.println(name.length());
    }

    public static void arrayIndexOutOfBound()  {
        String[] names = {"narak", "dara", "sophea"};

        System.out.println(names[3]);
    }

    public static void numberFormatException() {
        String value = "hello";
        int number = Integer.parseInt(value);
    }
}
