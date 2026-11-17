
import java.util.Scanner;
import module4.*;
public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Object obj = System.out;
        java.io.PrintStream o = (java.io.PrintStream) obj;



        o.print("please input age: ");
        int age = scanner.nextInt();

        scanner.nextLine();

        o.print("please input name: ");
        String name = scanner.nextLine();

        o.print("please input height: ");
        double height = scanner.nextDouble();

        o.println("----------- user profile --------------");
        o.println("name: " + name);
        o.println("age: " + age);
        o.println("height: " + height);


    }
}

