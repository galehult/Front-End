import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int sum = 1;

        System.out.print("First number? ");
        int firstNum = Integer.valueOf(scanner.nextLine());

        for (int i = 1; i <= firstNum; i++) {
            sum = sum * i;
        }

        System.out.println("The sum is " +  sum);
    }
}