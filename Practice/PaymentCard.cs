public class PaymentCard
{
    private decimal balance;

    public PaymentCard(decimal openingBalance)
    {
        this.balance = openingBalance;
    }

    public decimal GetBalance()
    {
        return this.balance;
    }

    public void Deposit(decimal deposit)
    {
        this.balance += deposit;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount <= this.balance)
        {
            this.balance -= amount;
            return true;
        }

        return false;
    }

    public override string ToString()
    {
        return "Card Balance: P" + GetBalance();
    }
}