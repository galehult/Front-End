public class TimeMachine {
    private Person traveler;

    public TimeMachine(Person person) {
        this.traveler = person;
    }

    public void travelInTime(int years) {
        this.traveler.setYear(this.traveler.getYear() + years);
    }
}
