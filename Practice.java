// import java.util.ArrayList;
import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // ArrayList<Book> books = new ArrayList<>();

        int counter = 0;

        while (true) {
            String input = scanner.nextLine();

            if (input.equals("end")) {
                break;
            }

            counter++;
        }

        System.out.println(counter);
    }
}
