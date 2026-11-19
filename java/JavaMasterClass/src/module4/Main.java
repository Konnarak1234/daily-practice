package module4;

import module4.abstraction.*;
import java.awt.*;

public class Main {
    public static void main(String[] args) {

        PaymentMethod payment1 = new KHQRPayment();

        Circle c1 = new Circle(2);
        Circle c2 = new Circle(2);

        module4.abstraction.Shape.anything = 2;

        c1.addAnything();

        System.out.println(PaymentMethod.narak);




    }
}

