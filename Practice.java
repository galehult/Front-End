// import java.util.ArrayList;
import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // ArrayList<String> strings = new ArrayList<>();

        Song garden = new Song("In The Garden", 10910);

        System.out.println("The song " + garden.name() + " has a length of " + garden.length() + " seconds");

        Film chipmunks = new Film("Alvin and the Chipmunks: The Squekquel", 0);


        System.out.println("How old are you?");
        int age = Integer.valueOf(scanner.nextLine());

        System.out.println();
        if (age >= chipmunks.ageRating()) {
            System.out.println("You may watch the film " + chipmunks.name());
        } else {
            System.out.println("You may not watch the film " + chipmunks.name());
        }
    }
}
