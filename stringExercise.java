import java.util.Scanner;

public class stringExercise {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Give a word: ");
        String toBeRepeated = scanner.nextLine();
        repeatWords(toBeRepeated);

        System.out.println("True, False, or Maybe");
        String answer = scanner.nextLine();
        isWordTrue(answer);

        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();
        loginValidation(username, password);

        while (true) {
            String sentence = scanner.nextLine();

            if (sentence.equals("")) {
                break;
            }
            String[] toBeSplit = sentence.split(" ");
            
            sentenceSplitter(toBeSplit);
        }

        while (true) {
            String searchSentence = scanner.nextLine();
            if (searchSentence.equals("")) {
                break;
            }
            String[] toSearch = searchSentence.split(" ");
            wordSearcher(toSearch);
        }

        while (true) {
            String indexSentence = scanner.nextLine();
            if (indexSentence.equals("")) {
                break;
            }

            String[] zeroIndex = indexSentence.split(" ");
            System.out.println(firstIndexPrinter(zeroIndex));
        }

        while (true) {
            String lastSentence = scanner.nextLine();
            if (lastSentence.equals("")) {
                break;
            }

            String[] lastIndex = lastSentence.split(" ");
            System.out.println(lastIndexPrinter(lastIndex));
        }

        int age = 0;
        int oldest = 0;
        String oldestName = "";
        String currName = "";
        String longestName = "";
        int sumYear = 0;
        int totalYear = 0;
        while (true) {
            String nameAge = scanner.nextLine();

            if (nameAge.equals("")) {
                break;
            }

            String[] oldAge = nameAge.split(",");

            age = getAge(oldAge);
            currName = getName(oldAge);
            if (currName.length() > longestName.length()) {
                longestName = currName;
            }

            if (age > oldest) {
                oldest = age;
                oldestName = currName;
            }

            sumYear +=  getYear(oldAge);
            totalYear++;
        }
        System.out.println("Age of the oldest: " + oldest);
        System.out.println("Name of the oldest: " + oldestName);
        System.out.println("Longest Name: " + longestName);
        System.out.println("Average Year: " + ((double) sumYear / totalYear));

    }

    public static void repeatWords(String word) {
        for (int i = 0; i < 3; i++) {
            System.out.print(word);
        }
    }

    public static void isWordTrue(String word) {
        if (word.equals("true") || word.equals("True")) {
            System.out.println("You got it right!");
        } else {
            System.out.println("Try again.");
        }
    }

    public static void loginValidation(String username, String password) {
        if (username.equals("alex")) {
            if (password.equals("sunshine")) {
                System.out.println("You have successfully logged in!");
            } else {
                System.out.println("Incorrect username or password!");
            }
        } else if (username.equals("emma")) {
            if (password.equals("haskell")) {
                System.out.println("You have successfully logged in!");
            } else {
                System.out.println("Incorrect username or password!");
            }
        } else {
            System.out.println("Incorrect username or password!");
        }
    }

    public static void sentenceSplitter(String[] sentence) {
        for (String word: sentence) {
            System.out.println(word);
        }
    }

    public static void wordSearcher(String[] word) {
        for (String words: word) {
            if (words.contains("av")) {
                System.out.println(words);
            }
        }
    }

    public static String firstIndexPrinter(String[] firstIndex) {
        return firstIndex[0];
    }

    public static String lastIndexPrinter(String[] lastIndex) {
        return lastIndex[lastIndex.length - 1];
    }

    public static int getAge(String[] ageFetcher) {
        return Integer.valueOf(ageFetcher[1]);
    }

    public static String getName(String[] nameFetcher) {
        return nameFetcher[0];
    }

    public static int getYear(String[] yearFetcher) {
        return Integer.valueOf(yearFetcher[2]);
    }
}
