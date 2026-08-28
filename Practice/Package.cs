public class Package {
    private int weight;
    private List<Gift> gifts;

    public Package() {
        this.weight = 0;
        this.gifts = new List<Gift>();
    }

    public void AddGift(Gift gift) {
        this.weight += gift.GetWeight();
        this.gifts.Add(gift);
    }

    public int TotalWeight() {
        return this.weight;
    }
}