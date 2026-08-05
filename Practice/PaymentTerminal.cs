public class PaymentTerminal
{
    private Money initialCashDrawer;
    private Money cashDrawer;
    private decimal cardPayments;
    private int affordableMeals;
    private int heartyMeals;
    private Money affordablePrice;
    private Money heartyPrice;
    
    public PaymentTerminal()
    {
        this.initialCashDrawer = new Money(1000, 0);
        this.cashDrawer = new Money(1000, 0);
        this.cardPayments = 0.00m;
        this.affordableMeals = 20;
        this.heartyMeals = 20;
        this.affordablePrice = new Money(2, 50);
        this.heartyPrice = new Money(4, 30);
    }

    public decimal CashSale()
    {
        return this.cashDrawer.GetTotal() - this.initialCashDrawer.GetTotal();
    }

    public decimal TotalSales()
    {
        return CashSale() + this.cardPayments;
    }

    public Money AffordableFood()
    {
        return this.affordablePrice;
    }

    public Money HeartyFood()
    {
        return this.heartyPrice;
    }

    public Money OrderAffordable(Money payment)
    {
        decimal paymentTotal = payment.GetTotal();
        decimal priceTotal = this.affordablePrice.GetTotal();
        
        if (paymentTotal >= priceTotal && this.affordableMeals > 0)
        {
            this.affordableMeals--;
            this.cashDrawer.Received(payment);
            if (payment.GetTotal() > this.affordablePrice.GetTotal())
            {
                Money change = payment.Difference(affordablePrice);
                this.cashDrawer.Paid(change);
                return change;
            } else
            {
                return new Money(0, 0);
            }
        } else
        {
            return payment;
        }
    }

    public Money OrderHearty(Money payment)
    {
        decimal paymentTotal = payment.GetTotal();
        decimal priceTotal = this.heartyPrice.GetTotal();
        if (paymentTotal >= priceTotal && this.heartyMeals > 0)
        {
            this.heartyMeals--;
            this.cashDrawer.Received(payment);
            if (paymentTotal > priceTotal)
            {
                Money change = payment.Difference(heartyPrice);
                this.cashDrawer.Paid(change);
                return change;
            } else
            {
                return new Money(0, 0);
            }
        } else
        {
            return payment;
        }
    }

    public bool OrderAffordable(PaymentCard card)
    {
        if (card.GetBalance() >= this.affordablePrice.GetTotal())
        {
            card.TakeMoney(this.affordablePrice.GetTotal());
            this.cardPayments += this.affordablePrice.GetTotal();
            this.affordableMeals--;
            return true;
        } else
        {
            return false;
        }
    }

    public bool OrderHearty(PaymentCard card)
    {
        if (card.GetBalance() >= this.heartyPrice.GetTotal())
        {
            card.TakeMoney(this.heartyPrice.GetTotal());
            this.cardPayments += this.affordablePrice.GetTotal();
            heartyMeals--;
            return true;
        } else
        {
            return false;
        }
    }

    public override string ToString()
    {
        return 
        $"Cash Drawer:  {cashDrawer.GetTotal():0.00}\n" + 
        $"Cash Sales: {CashSale():0.00}\n" +
        $"Card Payments: {cardPayments:0.00}\n" + 
        $"Total Sales: {TotalSales():0.00}";
    }
}