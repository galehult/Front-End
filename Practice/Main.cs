public class Program
{
    public static void Main(string[] args)
    {
        List<Person> person = new List<Person>();

        string output = "y";
        while (output == "y" || output == "Y")
        {
            NewPerson(person);
            Console.Write("Do you want to add another Person? (y/n) ");
            output = Console.ReadLine();

        }

        PrintNames(person);
        Console.WriteLine();

        Console.Write("Are you updating any name (y/n)? ");
        output = Console.ReadLine();
        while (output == "y" || output == "Y")
        {
            ToUpdate(person);
            Console.Write("Update new record? (y/n) ");
            output = Console.ReadLine();
        }

        Console.WriteLine();
        Console.WriteLine("New updated names:");
        PrintNames(person);
        Console.WriteLine("End of Program! Thank you!");
    }

    public static void NewPerson(List<Person> person)
    {
        Console.Write("Input First Name: ");
        string firstName = Console.ReadLine();

        if (firstName == "")
        {
            Console.Write("First Name cannot be empty! Input again: ");
            firstName = Console.ReadLine();
        }

        Console.Write("Input Middle Name: ");
        string middleName = Console.ReadLine();
        Console.Write("Input Last Name: ");
        string lastName = Console.ReadLine();
        
        if (lastName == "")
        {
            Console.Write("Last Name cannot be empty! Input again: ");
            lastName = Console.ReadLine();
        }
        
        Console.Write("Input Suffix: ");
        string suffix = Console.ReadLine();

        Console.Write("Input Birthday (dd/MM/yyyy): ");
        string birthday = Console.ReadLine();
        Console.Write("Input height: ");
        int height = int.Parse(Console.ReadLine());
        Console.Write("Input weight: ");
        int weight = int.Parse(Console.ReadLine());

        string[] date = birthday.Split("/");
        int day = Convert.ToInt32(date[0]);
        int month = Convert.ToInt32(date[1]);
        int year = Convert.ToInt32(date[2]);

        person.Add(new Person(firstName, middleName, lastName, suffix, new SimpleDate(day, month, year), height, weight));
    }

    public static void PrintNames(List<Person> person)
    {
        foreach (var persons in person)
        {
            Console.WriteLine(persons);
        }
    }
  
    public static bool FindPerson(List<Person> person, string name)
    {
        for (int i = 0; i < person.Count(); i ++)
        {
            if (person[i].GetName().Contains(name))
            {
                return true;
            }
        }

        return false;
    }

    public static int GetPerson(List<Person> person, string name) {
            for (int i = 0; i < person.Count(); i++)
            {
                if (person[i].GetName().Contains(name))
                {
                    return i;
                }
            }
        return -1;
    }

    public static void ToUpdate(List<Person> person)
    {
        Console.Write("Who are updating: ");
        string who = Console.ReadLine();
        int indexed = GetPerson(person, who);
        if (indexed == -1)
        {
            Console.WriteLine("Person does not exist");
            return;
        }

        Console.Write("What are we updating [1 - First Name, 2 - Middle Name, 3 - Last Name, 4 - Suffix, 0 - Nothing]: ");
        int chosenField = int.Parse(Console.ReadLine());
        Console.Write("Update to: ");
        string newName = Console.ReadLine();
        UpdatePerson(person, chosenField, who, newName);
    }

    public static void UpdatePerson(List<Person> person, int field, string targetPerson, string changeTo)
    {
        int index = GetPerson(person, targetPerson);
        if (field == 1)
        {
            person[index].SetFirstName(changeTo);
        } else if (field == 2)
        {
            person[index].SetMiddleName(changeTo);
        } else if (field == 3)
        {
            person[index].SetLastName(changeTo);
        } else if (field == 4)
        {
            person[index].SetSuffix(changeTo);

        } else
        {
            Console.WriteLine("No field was updated.");
        }
    }
}