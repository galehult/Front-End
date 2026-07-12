import java.util.ArrayList;
import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> strings = new ArrayList<>();

        Account myAccount = new Account("My Account", 100.00);

        myAccount.deposit(20);
        System.out.println("New Balance: " + myAccount.balance());
        System.out.println(myAccount);

    }
}
