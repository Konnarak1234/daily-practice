package module5.exercises;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;

public class Exercises {

    public static void arrayStatistic() {
        var o = System.out;
        int[] numbers = {10, 25, 30, 5, 40, 15, 60, 20, 35, 50};

        //        Sum: 290
        //        Average: 29.0
        //        Largest: 60
        //        Smallest: 5

        int sum = 0;
        int largest = 0;
        int smallest = numbers[0];

        for(int number : numbers) {
            sum += number;

            if(number > largest) largest = number;
            if(number < smallest) smallest = number;
        }

        o.println("Sum: " + sum);
        o.println("Average: " + (double) sum / numbers.length);
        o.println("largest: " + largest);
        o.println("Smallest: " + smallest);
    }

    public static void studentScoreManager() {
        var o = System.out;
        // Add at least five scores.
        // Display all scores.
        // Add another score.
        // Update one score.
        // Remove one score.
        // Sort the scores in ascending order.
        // Calculate the average.

        ArrayList<Double> scores = new ArrayList<>();

        // add five score
        scores.add(50.0);
        scores.add(76.0);
        scores.add(45.0);
        scores.add(67.0);
        scores.add(87.0);

        double sum = 0;
        // display all score
        for(double score : scores) {
            sum += score;
            o.println(score);
        }

        // add other score
        scores.add(scores.size() - 1, 89.0);

        //update one score
        scores.set(2, 65.0);

        // remove one score
        scores.remove(scores.size() -2);

        // sorting in ascending order
        Collections.sort(scores);

        // calculate average
        double average = sum / scores.size();
        o.println("average: " + average);

        for(double score : scores) {
            o.println(score);
        }
    }

    public static void productInventory() {
        var o = System.out;
        // Use product names as keys.
        // Use stock quantities as values.
        // Add at least five products.
        // Search for a product.
        // Update a product's quantity.
        // Remove a product.
        // Display all products and their quantities.

        HashMap<String, Integer> inventory = new HashMap<>();

        // add five product
        inventory.put("Coca-Cola", 20);
        inventory.put("Chip", 27);
        inventory.put("Instance Noodle", 30);
        inventory.put("Egg", 100);
        inventory.put("Milk", 50);

        // search for product
        o.println("Serch for Milk:" + inventory.get("Milk"));

        // update a product quan
        inventory.put("Coca-Cola", 27);
        o.println("Update cola-cola:" + inventory.get("Coca-Cola"));


        // remove product
        inventory.remove("Chip");
        o.println("Remove chips");

        // display all products
        for(var product : inventory.entrySet()) {
            o.println(product.getKey() + " contain: " + product.getValue());
        }
    }

    public static void uniqueEmailRegistration() {
        var o = System.out;
        // Add five email addresses.
        // Try adding a duplicate email.
        // Check whether a particular email exists.
        // Remove an email.
        // Display all registered emails.
        // Display the total number of unique emails.

        HashSet<String> emails = new HashSet<>();

        // add five email address
        emails.add("narak@gmail.com");
        emails.add("hello@gmail.com");
        emails.add("hellonarak@gmail.com");
        emails.add("narakhello@gmail.com");
        emails.add("kunnarak@gmail.com");

        // try adding duplicate email
        emails.add("any@gmail.com");

        // check if particular email exists
        if(emails.contains("kunnarak@gmail.com")) {
            o.println("email is exist");
        }

        // Remove an email
        emails.remove("any@gmail.com");

        // Display all registered emails.
        for(String email : emails) {
            o.println(email);
        }

        // Display total unique number
        o.println("total unique number: " + emails.size());

    }
}
