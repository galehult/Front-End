public class Money
{
    private int pesos;
    private int cents;

    public Money(int pesos, int cents)
    {
        this.pesos = pesos;
        this.cents = cents;
    }

    public int GetPesos()
    {
        return this.pesos;
    }

    public int GetCents()
    {
        return this.cents;
    }

    public int TotalCents()
    {
        return (this.pesos * 100) + this.cents;
    }

    public decimal GetTotal()
    {
        return (decimal) TotalCents() / 100;
    }

    public override string ToString()
    {
        String zero = "";
        if (cents < 10)
        {
            zero = "0";
        }
        return "PHP" + pesos + "." + zero + cents;
    }

    public void Received(Money addition)
    {
        int newPesos = this.pesos + addition.pesos;
        int newCents = this.cents + addition.cents;

        if (newCents >= 100)
        {
            newPesos += newCents / 100;
            newCents = newCents % 100;
        }

        this.pesos = newPesos;
        this.cents = newCents;
    }

    public void Paid(Money decreaser)
    {
        int mergedMoney = (this.pesos * 100) + this.cents;
        int mergedDecreaser = (decreaser.pesos * 100) + decreaser.cents;

        int total = mergedMoney - mergedDecreaser;

        if (total < 0)
        {
            this.pesos = 0;
            this.cents = 0;
        }

        int newPesos = total / 100;
        int newCents = total % 100;

        this.pesos = newPesos;
        this.cents = newCents;
    }

    public Money Difference(Money amount)
    {
        int totalDifference = this.TotalCents() - amount.TotalCents();
        int pesoDifference = totalDifference / 100;
        int centDifference = totalDifference % 100;

        return new Money(pesoDifference, centDifference);
    }
}