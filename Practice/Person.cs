public class Person
{
    private string firstName;
    private string middleName;
    private string lastName;
    private string suffix;
    private SimpleDate birthday;
    private int height;
    private int weight;

    public Person(string firstName, string middleName, string lastName, string suffix, SimpleDate birthday, int height, int weight)
    {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.suffix = suffix;
        this.height = height;
        this.weight = weight;
    }

    public string GetName()
    {
        if (this.suffix == "" && this.middleName == "")
        {
            return  this.lastName + ", " + this.firstName;
        } else if (this.suffix == "" && this.middleName != "")
        {
            return this.lastName + ", " + this.firstName + " " + this.middleName;
        } else if (this.suffix != "" && this.middleName == "")
        {
            return this.lastName + ", " + this.firstName + " " + this.suffix;
        } else
        {
            return this.lastName + ", " + this.firstName + " " + this.middleName + " " + this.suffix;
        }
    }

    public void SetFirstName(string firstName)
    {
        this.firstName = firstName;
    }

    public void SetLastName(string lastName)
    {
        this.lastName = lastName;
    }

    public void SetMiddleName(string middleName)
    {
        this.middleName = middleName;
    }

    public void SetSuffix(string suffix)
    {
        this.suffix = suffix;
    }

    public SimpleDate GetBirthday()
    {
        return this.birthday;
    }

    public void SetBirthday(SimpleDate birthday)
    {
        this.birthday = birthday;
    }

    public int GetWeight()
    {
        return this.weight;
    }

    public int GetHeight()
    {
        return this.height;
    }

    public void SetWeight(int weight)
    {
        this.weight = weight;
    }

    public void SetHeight(int height)
    {
        this.height = height;
    }

    public override string ToString()
    {
        return "Name: " + GetName() + ", Born on: " + GetBirthday() + ", Height: " + GetHeight() + ", Weight: " + GetWeight();
    }

    public override bool Equals(object compared)
    {
        if (this == compared)
        {
            return true;
        }

        if (!(compared is Person)) {
            return false;
        }

        Person comparedPerson = (Person) compared;

        if (this.firstName == comparedPerson.firstName &&
            this.middleName == comparedPerson.middleName &&
            this.lastName == comparedPerson.lastName &&
            this.suffix == comparedPerson.suffix &&
            this.weight == comparedPerson.weight &&
            this.height == comparedPerson.height)
        {
            return true;
        }

        return false;
    }
}