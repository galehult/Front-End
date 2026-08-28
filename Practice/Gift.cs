public class Gift {
    private string name;
    private int weight;

    public Gift(string name, int weight) {
        this.name = name;
        this.weight = weight;
    }

    public string GetName() {
        return this.name;
    }

    public int GetWeight() {
        return this.weight;
    }

    public override string ToString() {
        return this.name + " (" + this.weight + " kg)";
    }
}