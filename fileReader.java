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
        Scanner nameInput = new Scanner(System.in);

        System.out.println("Name of the file:");
        toUse = nameInput.nextLine();

        System.out.println();
        System.out.println("Search for:");
        String searchName = nameInput.nextLine();

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
        Scanner boundScanner = new Scanner(System.in);

        System.out.print("Name of the file: ");
        String numFile = boundScanner.nextLine();

        System.out.println("Lower bound? ");
        int lowBound = Integer.valueOf(boundScanner.nextLine());
        System.out.print("Upper bound? ");
        int upBound = Integer.valueOf(boundScanner.nextLine());
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

        // name age separator

        Scanner fileUsage = new Scanner(System.in);

        System.out.println("Name of the file:");
        String nameAgeRecord = fileUsage.nextLine();

        try (Scanner nameAge = new Scanner(Paths.get(fileUsage))) {
            while (nameAge.hasNextLine()) {
                String dataRecord = nameAge.nextLine();

                String[] dataArray = dataRecord.split(",");
                String name = dataArray[0];
                int age = Integer.valueOf(dataArray[1]);

                if (age == 1) {
                    System.out.println(name + ", age: " + age + " year");
                } else {
                    System.out.println(name + ", age: " + age + " years");
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Game Counter
        Scanner fileInput = new Scanner(System.in);
        System.out.println("File:");
        String gameFile = fileInput.nextLine();
        System.out.println("Team:");
        String team = fileInput.nextLine();
        int gameCount = 0;
        int win = 0;
        int loss = 0;

        try (Scanner gameFinder = new Scanner(Paths.get(gameFile))) {
            while (gameFinder.hasNextLine()) {
                String match = gameFinder.nextLine();
                String[] matchRecord = match.split(",");

                if (matchRecord[0].equals(team) || matchRecord[1].equals(team)) {
                    gameCount++;
                    if (matchRecord[0].equals(team)) {
                        if (Integer.valueOf(matchRecord[2]) > Integer.valueOf(matchRecord[3])) {
                            win++;
                        } else {
                            loss++;
                        }
                    } else {
                        if (Integer.valueOf(matchRecord[2]) < Integer.valueOf(matchRecord[3])) {
                            win++;
                        } else {
                            loss++;
                        }
                    }
                }
            }
        } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }

        System.out.println("Games: " + gameCount);
        System.out.println("Wins: " + win);
        System.out.println("Losses: " + loss);
    }
}
