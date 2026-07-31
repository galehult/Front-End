import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Scanner;

public class Records {
    ArrayList<Person> persons = new ArrayList<>();

    public Records(String file) {
        readRecordsFromFile(file);
    }

    public void readRecordsFromFile(String file) {
        try (Scanner fileReader = new Scanner(Paths.get(file))) {
            while (fileReader.hasNextLine()) {
                String fileRecord = fileReader.nextLine();
                String[] recordArray = fileRecord.split(",");

                String name = recordArray[0];
                int age = Integer.valueOf(recordArray[1]);
                persons.add(new Person(name, age));
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public ArrayList<Person> getPersons() {
        return this.persons;
    }
}