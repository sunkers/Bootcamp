public class Main {
    public static void main(String[] args) {
        // Hello World
        System.out.println("Hello World!");
        
        // Method Arguments
        if (args.length > 0) System.out.println(args[0]); // args[0] is the first argument when calling java Main "argument1" 
        
        // Variables
        int a = 1; // int is a 32-bit integer
        double b = 2.0; // double is a 64-bit floating point number
        float c = 3.0f; // float is a 32-bit floating point number
        char d = 'a'; // char is a 16-bit unicode character
        String s1 = "Hello"; // String is a sequence of characters
        String s2 = new String("Hello"); // String is a sequence of characters
        String s3 = s1 + s2; // Concatenation
        String s = "I have " + a + " apple"; // "I have 1 apple"

        // Conditions
        boolean f = a == 1; // f is true
        if (!f) {
            System.out.println("f is false");
        } else if (a == 1) {
            System.out.println("a is 1");
        } else {
            // do something
        }

        // Opérateur ternaire
        int result = a == 1 ? 1 : 0; // result is 1

        // Egalité de 2 chaines de charactères
        boolean r1 = s1 == s2; // r1 is false
        boolean r2 = s1.equals(s2); // r2 is true
        String sames1 = s1;
        boolean r3 = s1 == sames1; // r3 is true

        // Array
        int [] arr;
        arr = new int[10]; // arr is an array of 10 integers
        System.out.println(arr.length); // 10
        arr[0] = 4;
        arr[1] = arr[0] +5;
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]); // 4, 9, 0, 0, 0, 0, 0, 0, 0, 0
        }

        // boucle for
        for (int i = 0; i < 10; i++) {
            System.out.println(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        }

        // boucle while
        while (a < 10) {
            System.out.println(a); // 1, 2, 3, 4, 5, 6, 7, 8, 9
            a++;
        }

        do {
            System.out.println(a); // 10
            a++;
        } while (a < 10); // do while is executed at least once

        


    }
}
