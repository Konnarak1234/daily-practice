package module4.abstraction;

public abstract class Shape {
    public static int anything = 2;
    public abstract double calculateArea();

    public void display() {
        System.out.println("Calculating shape area...");
    }

}