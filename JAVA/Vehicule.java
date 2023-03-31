public class vehicule {
    private int fuel; // private means that the variable is only accessible from the class
    protected int speed; // protected means that the variable is accessible from the class and its subclasses
    public int color;
}

public class Car extends vehicule {
    public void setFuel(int fuel) {
        this.fuel = fuel;
    }
    public int getFuel() {
        return this.fuel;
    }
    public void setSpeed(int speed) {
        this.speed = speed;
    }
    public int getSpeed() {
        return this.speed;
    }
    public void setColor(int color) {
        this.color = color;
    }
    public int getColor() {
        return this.color;
    }
}