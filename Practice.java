import java.util.ArrayList;
import java.util.Scanner;

public class Practice {
    public static void printStars(int number) {
        for (int i = 0; i < number; i++) {
            System.out.print("*");
        }
        System.out.println("");
    }

    public static void printSquare(int size) {
        for (int i = 0; i < size; i++) {
            printStars(size);
        }
    }

    public static void printRectangle(int width, int height) {
        int count = 0;
        while (count < height) {
            printStars(width);
            count++;
        }
    }

    public static void printTriangle(int size) {
        int count = 0;
        while (count < size) {
            count++;
            printStars(count);
        }
    }

    public static void smallestNumber() {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> numbers = new ArrayList<>();

        int numInput = Integer.valueOf(scanner.nextLine());

        while (numInput != 9999) {
            numbers.add(numInput);
            numInput = Integer.valueOf(scanner.nextLine());
        }

        int smallestNum = numbers.get(0);

        for (int i = 0; i < numbers.size(); i++) {
            if (numbers.get(i) < smallestNum) {
                smallestNum = numbers.get(i);
            }
        }

        System.out.println("Smallest number: " + smallestNum);

        for (int i = 0; i < numbers.size(); i++) {
            if (numbers.get(i) == smallestNum) {
                System.out.println("Fount at index: " + i);
            }
        }

    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Printing Stars: ");
        printStars(5);
        printStars(3);
        printStars(9);

        System.out.println("This is a Square: ");
        printSquare(4);
        System.out.println();
        printSquare(5);

        System.out.println("This is a Rectangle: ");
        printRectangle(17, 3);

        System.out.println("This is a Triangle: ");
        printTriangle(4);
    }
}
