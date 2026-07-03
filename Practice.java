// import java.util.Scanner;

public class Practice {
    public static void printStars(int number) {
        for (int i = 0; i < number; i++) {
            System.out.print("*");
        }
        System.out.println("");
    }

    public static void printSpaces(int number) {
        for (int i = 0; i < number; i++) {
            System.out.print(" ");
        }
    }

    public static void printTriangle(int size) {
        int spaceCounter = size - 1;
        for (int i = 1; i <= size + 3; i+=2) {
            printSpaces(spaceCounter);
            printStars(i);
            spaceCounter--;
        }
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

    public static void christmasTree(int height) {
        printTriangle(height);
        for (int i = 0; i < 2; i++) {
            printSpaces(height - 2);
            printRectangle(3, 1);
        }
    }

    public static void main(String[] args) {
        // Scanner scanner = new Scanner(System.in);

        // printTriangle(4);
        christmasTree(15);
    }
}