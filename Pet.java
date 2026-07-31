public class Pet {
    private String name;
    private String breed;
    // private int age;

    public Pet(String name, String breed) {
        this.name = name;
        this.breed = breed;
        // this.age = age;
    }

    // public Pet(String name) {
    //     this(name,0);
    // }

    // public Pet(int age) {
    //     this("Bella", age);
    // }

    @Override
    public String toString() {
        return this.name + " (" + this.breed + ")";
    }
}
