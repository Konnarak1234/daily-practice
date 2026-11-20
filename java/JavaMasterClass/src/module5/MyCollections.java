package module5;

import module4.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class MyCollections {

    public static void getArrayList() {
        ArrayList<Integer> hello = new ArrayList<>();
        hello.add(1);
        System.out.println(hello.get(0));
        ArrayList<BankAccount> accounts = new ArrayList<>();

        accounts.add(
                new SavingAccount("Narak", 1000.0)
        );

        accounts.add(
                new SavingAccount("Dara", 2000.0)
        );

        accounts.add(
                new SavingAccount("Lina", 1500.0)
        );

        for (BankAccount account : accounts) {

            System.out.println(account.getOwner());
            System.out.println(account.getBalance());
        }

    }

    public static void getHashMap() {
        HashMap<String, String> students = new HashMap<>();

        students.put("ST001", "Narak");
        students.put("ST002", "Dara");
        students.put("ST003", "Lina");

        System.out.println(students);
        System.out.println(students.get("ST001"));
    }

    public static void getHashMapWithInteger() {
        HashMap<String, Integer> inventory = new HashMap<>();

        inventory.put("Laptop", 10);
        inventory.put("Mouse", 25);
        inventory.put("Keyboard", 15);

        System.out.println(
                "Laptop stock: " + inventory.get("Laptop")
        );
    }
}
