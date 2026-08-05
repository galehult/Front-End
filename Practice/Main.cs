using System.Xml;

List<Person> person = new List<Person>();

string output = "y";
while (output == "y" || output == "Y")
{
    Console.WriteLine("Input First Name, empty will stop:");
    string firstName = Console.ReadLine();

    if (firstName == "")
    {
        Console.WriteLine("Invalid, First Name cannot be empty!");
        break;
    }

    Console.WriteLine("Input Middle Name:");
    string middleName = Console.ReadLine();
    Console.WriteLine("Input Last Name:");
    string lastName = Console.ReadLine();

    if(lastName == "")
    {
        Console.WriteLine("Invalid Entry, Last Name should not be empty");
        break;
    }

    Console.WriteLine("Input suffix:");
    string suffix = Console.ReadLine();
    Console.WriteLine("Input Birthday (dd/MM/YYYY):");
    string birthday = Console.ReadLine();
    Console.WriteLine("Input height:");
    int height = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Input weight:");
    int weight = Convert.ToInt32(Console.ReadLine());

    string[] date = birthday.Split("/");
    int day = Convert.ToInt32(date[0]);
    int month = Convert.ToInt32(date[1]);
    int year = Convert.ToInt32(date[2]);

    person.Add(new Person(firstName, middleName, lastName, suffix, new SimpleDate(day, month, year), height, weight));

    Console.WriteLine("Do you want to add another Person? (y/n)");
    output = Console.ReadLine();

}

foreach (Person persons in person)
{
    Console.WriteLine(persons);
}

Console.WriteLine();

foreach (Person persons in person)
{
    Console.WriteLine(persons.GetName());
}

Console.WriteLine();

Console.WriteLine("Input Name to find:");
string name = Console.ReadLine();

for (int i = 0; i < person.Count(); i++)
{
    if (person[i].GetName().Contains(name))
    {
        Console.WriteLine("Change to:");
        string newFirstName = Console.ReadLine();
        person[i].SetFirstName(newFirstName);
        Console.WriteLine($"Here is {name} new Name: {person[i].GetName()}");
    }
        Console.WriteLine($"No name with {name} was found");
}

