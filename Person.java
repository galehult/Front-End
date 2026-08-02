public class Person {
    private String name;
    private int age;
    private int weight;
    private int height;
    private SimpleDate birthday;

    public Person(String name, int height, int weight, SimpleDate birthday) {
        this.name = name;
        this.age = 9;
        this.height = height;
        this.weight = weight;
        this.birthday = birthday;
    }

    public String toString() {
        return this.name + " is " + getAge() + ", and has a weight of " + getWeight() + ", and a height of " + getHeight(); //+ ", has a friend called "; + this.pet;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
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

    public boolean equals(Object compared) {
        if (this == compared) {
            return true;
        }

        if (!(compared instanceof Person)) {
            return false;
        }

        Person comparedPerson = (Person) compared;

        if (this.name.equals(comparedPerson.name) &&
            this.age == comparedPerson.age &&
            this.weight == comparedPerson.weight &&
            this.height == comparedPerson.height &&
            this.birthday.equals(comparedPerson.birthday)) {
                return true;
        }
        
        return false;
    }
}
