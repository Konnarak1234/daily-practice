package module6;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class TryWIthResourceExample {

    public static void example() {
        File file = new File("data.txt");

        try (Scanner scanner = new Scanner(file)) {

            while (scanner.hasNextLine()) {

                String line = scanner.nextLine();

                System.out.println(line);
            }

        } catch (FileNotFoundException e) {

            System.out.println("File not found!");
        }
    }
}
