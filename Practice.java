import java.util.ArrayList;
import java.util.Scanner;
import java.nio.file.Paths;

public class Practice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Person> persons = new ArrayList<>();

        String use = "data.txt";

        new readRecordsFromFile(use);

        persons.add(new Person(readRecordsFromFile.getName(), readRecordsFromFile.getAge()));

        for (int i = 0; i < persons.size(); i++) {
            System.out.println(persons);
        }
    }
}
