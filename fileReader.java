import java.util.Scanner;
import java.util.ArrayList;
import java.nio.file.Paths;

public class fileReader {
    public static void Main(String[] args) {
        Scanner textInput = new Scanner(System.in);
        ArrayList<String> guestList = new ArrayList<>();

        System.out.print("Name of the file: ");
        String toUse = textInput.nextLine();

        try (Scanner guestListing = new Scanner(Paths.get(toUse))) {
            while (guestListing.hasNextLine()) {
                String row = guestListing.nextLine();
                guestList.add(row);
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.println();
        System.out.println("Enter names, an empty line quits.");

        while (true) {
            String guestName = textInput.nextLine();

            if (guestName.isEmpty()) {
                System.out.println("Thank you!");
                break;
            }

            boolean onList = guestList.contains(guestName);

            if (onList) {
                System.out.println("The name is on the list.");
            } else {
                System.out.println("The name is not on the list.");
            }
        }

        // name finder

        ArrayList<String> names = new ArrayList<>();

        System.out.println("Name of the file:");
        toUse = scanner.nextLine();

        System.out.println();
        System.out.println("Search for:");
        String searchName = scanner.nextLine();

        try (Scanner nameFinder = new Scanner(Paths.get(toUse))) {
            while (nameFinder.hasNextLine()) {
                String row = nameFinder.nextLine();
                names.add(row);
            }
        } catch (Exception e) {
            System.out.println("Reading the file " + toUse + " failed.");
        }

        boolean onList = names.contains(searchName);

        if (onList) {
            System.out.println("Found!");
        } else {
            System.out.println("Not found.");
        }

        // Num Finder

        System.out.print("Name of the file:");
        String numFile = scanner.nextLine();

        System.out.println("Lower bound? ");
        int lowBound = Integer.valueOf(scanner.nextLine());
        System.out.print("Upper bound? ");
        int upBound = Integer.valueOf(scanner.nextLine());
        int counter = 0;
        try (Scanner numReader = new Scanner(Paths.get(numFile))) {
            while (numReader.hasNextLine()) {
                int row = Integer.valueOf(numReader.nextLine());
                
                if (row >= lowBound && row <= upBound) {
                    counter++;
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.println("Numbers: " + counter);
    }
}
