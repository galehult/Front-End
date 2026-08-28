public class AmusementParkRide {
    private string name;
    private int lowestHeight;
    private int visitors;
    private List<Person> riding;

    public AmusementParkRide(string name, int lowestHeight) {
        this.name = name;
        this.lowestHeight = lowestHeight;
        this.visitors = 0;
        this.riding = new List<Person>();
    }

    public bool IsAllowedOn(Person person) {
        if (person.GetHeight() < this.lowestHeight) {
            return false;
        }

        this.visitors++;
        this.riding.Add(person);
        return true;
    }

    public void RemoveEveryoneOnRide() {
        this.riding.Clear();
    }

    public double AverageHeightOfPeopleOnRide() {
        if (riding.Count == 0) {
            return -1;
        }

        int sumOfHeights = 0;
        foreach (Person per in riding) {
            sumOfHeights += per.GetHeight();
        }

        return 1.0 * sumOfHeights / riding.Count;
    }

    public override string ToString() {
        string printOutput = this.name + ", minimum height requirement: " + this.lowestHeight + ", visitors: " + this.visitors + "\n";

        if (riding.Count == 0) {
            return printOutput + "no one is on the ride.";
        }

        string peopleOnRide = "";
        foreach (Person person in riding) {
            peopleOnRide = peopleOnRide + person.GetName() + "\n";
        }

        return printOutput + "\n" + "on the ride:\n" + peopleOnRide;
    }
}