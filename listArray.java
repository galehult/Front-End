import java.util.ArrayList;
import java.util.Scanner;

public class listArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> numbers = new ArrayList<>();
        ArrayList<Integer> computation = new ArrayList<>();
        ArrayList<String> names = new ArrayList<>();
        ArrayList<Integer> numRange = new ArrayList<>();

        int numInput = Integer.valueOf(scanner.nextLine());

        while (numInput != 9999) {
            numbers.add(numInput);
            numInput = Integer.valueOf(scanner.nextLine());
        }

        smallestNumber(numbers);
        greatestNumber(numbers);

        int toCompute = Integer.valueOf(scanner.nextLine());

        while (toCompute != -1) {
            computation.add(toCompute);
            toCompute = Integer.valueOf(scanner.nextLine());
        }

        System.out.println(computation);

        System.out.print("The sum is: ");
        System.out.println(sum(computation));
        System.out.print("The difference is: ");
        System.out.println(difference(computation));
        System.out.print("The product is: ");
        System.out.println(product(computation));
        System.out.print("The quotient is: ");
        System.out.println(quotient(computation));
        System.out.print("The average is: ");
        System.out.println(average(computation));

        String name = scanner.nextLine();

        while (!name.isEmpty()) {
            names.add(name);
            name = scanner.nextLine();
        }

        System.out.print("Search for? ");
        String findWho = scanner.nextLine();

        System.out.println(findName(names, findWho));

        removeLast(names);
        removeLast(names);
        System.out.println(names);

        int range = Integer.valueOf(scanner.nextLine());

        while (range != 9999) {
            numRange.add(range);
            range = Integer.valueOf(scanner.nextLine());
        }

        printNumberInRange(numRange, 10, 15);

    }

    public static int smallestNumber(ArrayList<Integer> numbers) {
        int smallestNum = numbers.get(0);

        for (int i = 0; i < numbers.size(); i++) {
            if (numbers.get(i) < smallestNum) {
                smallestNum = numbers.get(i);
            }
        }

        return smallestNum;
    }

    public static int smallestIndex(ArrayList<Integer> numbers) {
        int smallest = smallestNumber(numbers);
        int smallIndex = 0;

        for (int i = 0; i < numbers.size(); i++) {
            if (numbers.get(i) == smallest) {
                smallIndex = i;
            }
        }

        return smallIndex;
    }

    public static int greatestNumber(ArrayList<Integer> numbers) {
        int greatestNum = numbers.get(0);

        for (int num : numbers) {
            if (num > greatestNum) {
                greatestNum = num;
            }
        }

        return greatestNum;
    }

    public static int greatestIndex(ArrayList<Integer> numbers) {
        int greatest = greatestNumber(numbers);
        int greatIndex = 0;

        for (int i = 0; i < numbers.size(); i++) {
            if (numbers.get(i) == greatest) {
                greatIndex = i;
            }
        }

        return greatIndex;
    }

    public static int sum(ArrayList<Integer> numbers) {
        int sum = 0;

        for (int toAdd: numbers) {
            sum += toAdd;
        }

        return sum;
    }

    public static int difference(ArrayList<Integer> numbers) {
        int difference = numbers.get(0);

        // for (int toSubtract: numbers) {
        //     difference = difference - toSubtract;
        // }

        for (int i = 1; i < numbers.size(); i++) {
            difference = difference - numbers.get(i);
        }

        return difference;
    }

    public static int product(ArrayList<Integer> numbers) {
        int product = numbers.get(0);
        
        for (int i = 1; i < numbers.size(); i++) {
            product *= numbers.get(i);
        }

        return product;
    }

    public static double quotient(ArrayList<Integer> numbers) {
        double quotient = numbers.get(0);

        for (int i = 1; i < numbers.size(); i++) {
            quotient /= numbers.get(i);
        }

        return quotient;
    }

    public static double average(ArrayList<Integer> numbers) {
        return (double) sum(numbers) / numbers.size();
    }

    public static String findName(ArrayList<String> names, String name) {
        String found = "";

        if (names.contains(name)) {
            found = name + " was found!";
        } else {
            found = name + " was not found";
        }

        return found;
    }

    public static void removeLast(ArrayList<String> strings) {
        if (!strings.isEmpty()) {
            strings.remove(strings.size() - 1);
        }
    }

    public static void printNumberInRange(ArrayList<Integer> numbers, int lowerLimit, int upperLimit) {
        for (int number: numbers) {
            if (lowerLimit <= number && upperLimit >= number) {
                System.out.println(number);
            }
        }
    }
}
