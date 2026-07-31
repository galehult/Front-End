// import java.util.ArrayList;
import java.util.Scanner;
// import java.nio.file.Paths;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Pet lucy = new Pet("Lucy", "Golden Retriever");
        Person leo = new Person("Leo", lucy);

        System.out.println(leo);
    }
}