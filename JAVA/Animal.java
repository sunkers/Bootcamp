interface Animal { // An interface is a contract that a class must follow
    boolean feed(boolean timeToEat);
    void groom();
    void pet();
}

class Dog implements Animal { // Dog is an Animal because it implements the Animal interface
    boolean feed(boolean timeToEat) {
        return true;
    }
    void groom() {
        System.out.println("Dog is being groomed");
    }
    void pet() {
        System.out.println("Dog is being petted");
    }
}