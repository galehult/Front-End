public class Wallet
{
    private Money cash;
    private PaymentCard debitCard;
    private PaymentCard creditCard;

    public Wallet(Money cash, PaymentCard debitCard, PaymentCard creditCard)
    {
        this.cash = cash;
        this.debitCard = debitCard;
        this.creditCard = creditCard;
    }

    public Money GetCash()
    {
        return this.cash;
    }

    public PaymentCard GetDebit()
    {
        return this.debitCard;
    }

    public PaymentCard GetCredit()
    {
        return this.creditCard;
    }

    public override string ToString()
    {
        return $"Remaining Cash: {GetCash()}, Debit: {GetDebit()}, Credit: {GetCredit()}";
    }
}