package module6;

import java.io.FileNotFoundException;

public class ThrowExample {
    public static void throwMyOwnException(double amount) {

        try {
            if (amount <= 0) {

                throw new IllegalArgumentException(
                        "Deposit amount must be greater than zero."
                );


            }
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }


        System.out.println("Deposit successful: $" + amount);
    }
}
