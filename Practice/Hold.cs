public class Hold
{
    private int maxWeight;
    private List<Suitcase> suitcaseHolder;

    public Hold(int maxWeight)
    {
        this.maxWeight = maxWeight;
        this.suitcaseHolder = new List<Suitcase>();
    }

    public void AddSuitcase(Suitcase suitcase)
    {
        int currWeight = 0;
        foreach (Suitcase suitcases in this.suitcaseHolder)
        {
            currWeight += suitcases.TotalWeight();
        }
        if (this.maxWeight > currWeight)
        {
            this.suitcaseHolder.Add(suitcase);
        }
    }

    public void PrintItems()
    {
        foreach (Suitcase suitcases in this.suitcaseHolder)
        {
            Console.Write(suitcases.PrintItems());
        }
    }

    public override string ToString()
    {
        int totalWeight = 0;
        foreach (Suitcase suitcases in this.suitcaseHolder)
        {
            totalWeight += suitcases.TotalWeight();
        }
        return this.suitcaseHolder.Count + " suitcases (" + totalWeight + " kg)";
    }
}