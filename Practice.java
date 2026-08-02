import java.util.ArrayList;
import java.util.Scanner;
// import java.nio.file.Paths;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    
        Money a = new Money(10, 0);
        Money b = new Money(3, 50);
        Money c = a.minus(b);
        System.out.println();

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

        c = c.minus(a);

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}