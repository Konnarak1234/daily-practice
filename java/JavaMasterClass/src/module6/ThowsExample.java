package module6;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ThowsExample {
    public static void readFile() throws FileNotFoundException  {

        File file = new File("data.txt");

        Scanner scanner = new Scanner(file);

        System.out.println("File opened successfully.");

        scanner.close();
    }
}
