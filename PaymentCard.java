public class PaymentCard {
    private double balance;

    public PaymentCard(double openingBalance) {
        this.balance = openingBalance;
    }

    public double balance() {
        return this.balance;
    }

    public void addMoney(double deposit) {
        this.balance += deposit;
    }

    public boolean takeMoney(double amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }

        return false;
    }

    public String toString() {
        return "The card has a balance of " + this.balance + " euros";
    }
}
