package module4.abstraction;

public class Circle extends Shape {

    private double radius;

    public int addAnything() {
        return ++Shape.anything;
    }

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
