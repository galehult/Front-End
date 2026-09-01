public class Suitcase
{
    private List<Item> item;
    private int maxWeight;

    public Suitcase(int maxWeight)
    {
        this.item = new List<Item>();
        this.maxWeight = maxWeight;
    }

    public void AddItem(Item item)
    {
        int currWeight = 0;
        foreach (Item items in this.item)
        {
            currWeight += items.GetWeight();
        }
        int totalWeight = item.GetWeight() + currWeight;

        if (this.maxWeight > totalWeight)
        {
            this.item.Add(item);
        }

    }

    public string PrintItems()
    {
        string result = "";
        foreach (Item items in this.item)
        {
            result += items.GetName() + " (" + items.GetWeight() + " kg)\n";
        }

        return result;
    }

    public int TotalWeight()
    {
        int totalWeight = 0;
        foreach (Item items in this.item)
        {
            totalWeight += items.GetWeight();
        }

        return totalWeight;
    }

    public Item HeaviestItem()
    {
        if (this.item.Count == 0)
        {
            return null;
        }

        Item returnObj = this.item[0];

        foreach (Item items in this.item)
        {
            if (items.GetWeight() > returnObj.GetWeight())
            {
                returnObj = items;
            }
        }

        return returnObj;
    }

    public override string ToString()
    {
        int totalWeight = 0;
        foreach (Item items in this.item)
        {
            totalWeight += items.GetWeight();
        }

        if (item.Count == 0)
        {
            return "no items (" + totalWeight + " kg)";
        } else if (item.Count == 1)
        {
            return this.item.Count + " item (" + totalWeight + " kg)";
        }
        return this.item.Count + " items (" + totalWeight + " kg)";
    }
}