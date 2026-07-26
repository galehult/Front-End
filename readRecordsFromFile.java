import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Scanner;

public class readRecordsFromFile {
    private String name;
    private int age;
    ArrayList<Person> persons = new ArrayList<>();

    public readRecordsFromFile(String file) {
        try (Scanner fileReader = new Scanner(Paths.get(file))) {
            while (fileReader.hasNextLine()) {
                String holder = fileReader.nextLine();
                String[] arrayHolder = holder.split(",");

                this.name = arrayHolder[0];
                this.age = Integer.valueOf(arrayHolder[1]);

                persons.add(new Person(this.name, this.age));
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public String getName() {
        for (int i = 0; i < persons.size(); i++) {
            String returnedName = this.persons.get(i).name;
            return returnedName;
        }
    }

    public int getAge() {
        for (int i = 0; i < persons.size(); i++) {
            int returnedAge = this.persons.get(i).age;
            return returnedAge;
        }
    }
}
