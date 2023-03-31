public class Door {
    public void open() {
        push();
        System.out.println("Door is open");
    }
}

class BankValutDoor extends Door {
    public void open () {
        enterCombination();
        pull;
    }
}