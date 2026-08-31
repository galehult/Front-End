public class Room
{
    private List<Person> person;

    public Room()
    {
        this.person = new List<Person>();
    }

    public void Add(Person person)
    {
        this.person.Add(person);
    }

    public bool IsEmpty()
    {
        if (this.person.Count == 0)
        {
            return true;
        }

        return false;
    }

    public List<Person> GetPersons()
    {
        return this.person;
    }

    public Person Shortest()
    {
        if (this.person.Count == 0)
        {
            return null;
        }

        Person returnPerson = this.person[0];

        foreach (Person prs in person)
        {
            if (prs.GetHeight() < returnPerson.GetHeight())
            {
                returnPerson = prs;
            }
        }

        return returnPerson;
    }

    public Person Take()
    {
        if (this.person.Count == 0)
        {
            return null;
        }
        Person removePerson = Shortest();
        this.person.Remove(removePerson);

        return removePerson;
    }
}