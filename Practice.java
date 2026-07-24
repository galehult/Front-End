import java.util.ArrayList;
import java.util.Scanner;
import java.nio.file.Paths;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> fileNum = new ArrayList<>();

        System.out.println("Name of the file:");
        String toUse = scanner.nextLine();
    
        System.out.print("Lower bound? ");
        int lowBound = Integer.valueOf(scanner.nextLine());
        System.out.print("Upper bound? ");
        int upBound = Integer.valueOf(scanner.nextLine());

        try (Scanner numReader = new Scanner(Paths.get(toUse))) {
            while (numReader.hasNextLine()) {
                String row = numReader.nextLine();
                fileNum.add(row);
            }

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        int numCount = 0;
        for (int i = 0; i < fileNum.size(); i++) {
            if (Integer.valueOf(fileNum.get(i)) >= lowBound && Integer.valueOf(fileNum.get(i)) <= upBound) {
                numCount++;
            }
        }

        System.out.println("Numbers: " + numCount);
    }
}
