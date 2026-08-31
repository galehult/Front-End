public class SimpleCollection {
    private string name;
    private List<string> collection;

    public SimpleCollection (string name) {
        this.name = name;
        this.collection = new List<string>();
    }

    public void Add(string value) {
        this.collection.Add(value);
    }

    public string Longest()
    {
        if (this.collection.Count == 0)
        {
            return null;
        }

        string returnString = this.collection[0];

        foreach (string str in this.collection)
        {
            if (returnString.Length < str.Length)
            {
                returnString = str;
            }
        }

        return returnString;
    }

    public override string ToString() {
        string output = "The collection " + this.name + " has " + this.collection.Count + " elements:\n";
        
        if (this.collection.Count == 0) {
            return "the collection " + this.name + " is empty";
        }

        string collector = "";
        foreach (string collect in collection) {
            collector = collector + collect + "\n";
        }

        return output + collector;
    }
}