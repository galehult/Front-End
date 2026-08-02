public class Money {
    private final int pesos;
    private final int cents;

    public Money(int pesos, int cents) {
        this.pesos = pesos;
        this.cents = cents;
    }

    public int pesos() {
        return this.pesos;
    }

    public int cents() {
        return this.cents;
    }

    @Override
    public String toString() {
        String zero = "";
        if (cents < 10) {
            zero = "0";
        }

        return "PHP " + pesos + "." + zero + cents;
    }

    public Money plus(Money addition) {
        int newPesos = this.pesos + addition.pesos;
        int newCents = this.cents + addition.cents;

        if (newCents >= 100) {
            newPesos += newCents / 100;
            newCents = newCents % 100;
        }

        return new Money(newPesos, newCents);
    }

    public boolean lessThan(Money compared) {
        int mergedMoney = (this.pesos * 100) + this.cents;
        int comparedMoney = (compared.pesos * 100) + compared.cents;

        return mergedMoney < comparedMoney;
    }

    public Money minus(Money decreaser) {
        int mergedMoney = (this.pesos * 100) + this.cents;
        int mergedCompared = (decreaser.pesos * 100) + decreaser.cents;

        int total = mergedMoney - mergedCompared;

        if (total < 0) {
            return new Money(0, 0);
        }

        int newPesos = total / 100;
        int newCents = total % 100;

        return new Money(newPesos, newCents);
    }
}
