// import java.util.ArrayList;
// import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        // Scanner scanner = new Scanner(System.in);
        // ArrayList<String> strings = new ArrayList<>();

        Debt mortgage = new Debt(120000.0, 1.20);
        mortgage.printBalance();

        mortgage.waitOneYear();
        mortgage.printBalance();

        int years = 0;

        while (years < 20) {
            mortgage.waitOneYear();
            years = years + 1;
        }

        mortgage.printBalance();
    }
}
