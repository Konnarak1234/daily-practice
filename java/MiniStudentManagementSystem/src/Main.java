
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Store all student objects
        ArrayList<Student> students = new ArrayList<>();

        // Find students using their ID
        HashMap<String, Student> studentMap = new HashMap<>();

        // Track registered student IDs
        HashSet<String> studentIds = new HashSet<>();

        boolean running = true;

        while (running) {

            System.out.println("\n===== STUDENT MANAGEMENT SYSTEM =====");
            System.out.println("1. Add Student");
            System.out.println("2. Display All Students");
            System.out.println("3. Search Student");
            System.out.println("4. Update Student Score");
            System.out.println("5. Remove Student");
            System.out.println("6. Exit");
            System.out.print("Choose an option: ");

            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {

                case 1:

                    System.out.print("Enter student ID: ");
                    String id = scanner.nextLine();

                    if (studentIds.contains(id)) {
                        System.out.println("Student ID already exists!");
                        break;
                    }

                    System.out.print("Enter student name: ");
                    String name = scanner.nextLine();

                    System.out.print("Enter student score: ");
                    double score = scanner.nextDouble();
                    scanner.nextLine();

                    if (score < 0 || score > 100) {
                        System.out.println("Invalid score!");
                        break;
                    }

                    Student student = new Student(id, name, score);

                    students.add(student);
                    studentMap.put(id, student);
                    studentIds.add(id);

                    System.out.println("Student added successfully!");

                    break;

                case 2:

                    if (students.isEmpty()) {
                        System.out.println("No students found.");
                        break;
                    }

                    for (Student s : students) {
                        s.displayInfo();
                    }

                    break;

                case 3:

                    System.out.print("Enter student ID: ");
                    String searchId = scanner.nextLine();

                    Student foundStudent = studentMap.get(searchId);

                    if (foundStudent != null) {
                        foundStudent.displayInfo();
                    } else {
                        System.out.println("Student not found.");
                    }

                    break;

                case 4:

                    System.out.print("Enter student ID: ");
                    String updateId = scanner.nextLine();

                    Student studentToUpdate = studentMap.get(updateId);

                    if (studentToUpdate == null) {
                        System.out.println("Student not found.");
                        break;
                    }

                    System.out.print("Enter new score: ");
                    double newScore = scanner.nextDouble();
                    scanner.nextLine();

                    if (newScore < 0 || newScore > 100) {
                        System.out.println("Invalid score!");
                        break;
                    }

                    studentToUpdate.setScore(newScore);

                    System.out.println("Score updated successfully!");

                    break;

                case 5:

                    System.out.print("Enter student ID: ");
                    String removeId = scanner.nextLine();

                    Student studentToRemove = studentMap.remove(removeId);

                    if (studentToRemove == null) {
                        System.out.println("Student not found.");
                        break;
                    }

                    students.remove(studentToRemove);
                    studentIds.remove(removeId);

                    System.out.println("Student removed successfully!");

                    break;

                case 6:

                    running = false;

                    System.out.println("Goodbye!");

                    break;

                default:

                    System.out.println("Invalid option!");

            }
        }

        scanner.close();
    }
}
