package module2;
import java.util.Scanner;

public class StudentInfoSystem {
    public static void main(String[] args) {
        java.io.PrintStream o = System.out;
        Scanner scanner = new Scanner(System.in);

        o.print("student name: " );
        String name = scanner.nextLine();

        o.print("student age: " );
        int age = scanner.nextInt();

        scanner.nextLine();

        o.print("university name: " );
        String university = scanner.nextLine();

        o.print("gpa: " );
        double gpa = scanner.nextDouble();

        o.println("-------- student information ---------");
        o.println("student name: " + name);
        o.println("age: " + age);
        o.println("university: " + university);
        o.println("gpa: " + gpa);

    }
}
