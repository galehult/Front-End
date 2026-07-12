import java.util.ArrayList;
import java.util.Scanner;

public class array {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] indexing = new int[5];
        indexing[0] = 1;
        indexing[1] = 3;
        indexing[2] = 5;
        indexing[3] = 7;
        indexing[4] = 9;

        int searchNum = Integer.valueOf(scanner.nextLine());
        System.out.println(indexResult(indexing, searchNum));

        int[] sumArray = {5, 1, 3, 4, 2};
        System.out.println(sumOfNumbersInArray(sumArray));
        printNeatly(sumArray);
        printArrayInStars(sumArray);
    }

    public static int indexPrinter(int[] indexArray, int searchNum) {
        int indexNum = -1;

        for (int i = 0; i < indexArray.length; i++) {
            if (indexArray[i] == searchNum) {
                indexNum = i;
            }
        }

        return indexNum;
    }

    public static String indexResult(int[] indexArray, int searchNum) {
        String result = "";
        int index = indexPrinter(indexArray, searchNum);

        if (searchNum == indexArray[index]) {
            result = searchNum + " is at index " + index;
        } else {
            result = searchNum + " was not found.";
        }

        return result;
    }

    public static int sumOfNumbersInArray(int[] sumArray) {
        int sum = 0;
        int index = 0;

        while (index < array.length) {
            sum += array[index];
            index++;
        }
        return sum;
    }

    public static void printNeatly(int[] array) {
        int lastIndex = array.length - 1;
        for (int i = 0; i < array.length; i++) {
            if (i == lastIndex) {
                System.out.print(array[i]);
            } else {
                System.out.print(array[i] + ", ");
            }
        }
    }

    public static void printArrayInStars(int[] array) {
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; i < array[i]; i++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
