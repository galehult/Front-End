public class PaymentTerminal {
    private double money;
    private int affordableMeals;
    private int heartyMeals;

    public PaymentTerminal() {
        this.money = 1000;
        this.affordableMeals = 0;
        this.heartyMeals = 0;
    }

    public double eatAffordably(double payment) {
        if (payment >= 2.50) {
            money += 2.50;
            this.affordableMeals++;
            if (payment > 2.50) {
                return payment - 2.50;
            } else {
                return 0;
            }
        } else {
            return payment;
        }
    }

    public double eatHeartily(double payment) {
        if (payment >= 4.30) {
            money += 4.30;
            this.heartyMeals++;
            if (payment > 4.30) {
                return payment - 4.30;
            } else {
                return 0;
            } 
        } else {
            return payment;
        }
    }

    public boolean eatAffordably(PaymentCard card) {
        if (card.balance() >= 2.50) {
            card.takeMoney(2.50);
            affordableMeals++;
            return true;
        } else {
            return false;
        }
    }

    public boolean eatHeartily(PaymentCard card) {
        if (card.balance() >= 4.30) {
            card.takeMoney(4.30);
            heartyMeals++;
            return true;
        } else {
            return false;
        }
    }

    public void addMoneyToCard(PaymentCard card, double sum) {
        card.addMoney(sum);
        money += sum;
    }

    public String toString() {
        return "money: " + money + ", number of sold affordable meals: " + this.affordableMeals + ", number of sold hearty meals: " + this.heartyMeals;
    }
}
