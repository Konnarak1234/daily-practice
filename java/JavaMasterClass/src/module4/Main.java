package module4;

import module4.abstraction.Circle;
import java.awt.*;

public class Main {
    public static void main(String[] args) {

        Circle circle = new Circle(5);

        circle.display();

        System.out.println(circle.calculateArea());
    }
}

