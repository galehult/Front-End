public class Person {
    private String name;
    private int age;
    private int year;
    private int weight;
    private int height;
    private Pet pet;

    public Person(String name, int age, int year, int height, int weight, Pet pet) {
        this.name = name;
        this.age = age;
        this.year = year;
        this.height = height;
        this.weight = weight;
        this.pet = pet;
    }

    public Person(String name, Pet pet) {
        this(name, 0, 1996, 0, 0, pet);
    }

    public String toString() {
        return this.name + ", has a friend called " + this.pet;
    }

    // public Person() {
    //     this("Becca",0,1996, 0, 0);
    // }

    public String getName() {
        return this.name;
    }

    public int getWeight() {
        return this.weight;
    }

    public int getHeight() {
        return this.height;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getYear() {
        return this.year;
    }

    public void growOlder() {
        this.age++;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
