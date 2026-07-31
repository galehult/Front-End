public class HealthStation {
    private int weighCounter;

    public HealthStation() {
        this.weighCounter = 0;
    }

    public int weigh(Person person) {
        this.weighCounter++;
        return person.getWeight();
    }

    public void feed(Person person) {
        person.setWeight(person.getWeight() + 1);
    }

    public int weighings() {
        return this.weighCounter;
    }
}
