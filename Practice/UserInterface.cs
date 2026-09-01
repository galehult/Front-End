public class UserInterface
{
    private Input input;
    private List<string> inputWord;

    public UserInterface(Input input)
    {
        this.input = input;
        this.inputWord = new List<string>();
    }

    public void Start()
    {
        while (true)
        {
            Console.WriteLine("Enter a word: ");
            string word = input.ReadLine();

            if (AlreadyEntered(word))
            {
                break;
            }
        }
        Console.WriteLine("You gave the same word twice!");
    }

    public bool AlreadyEntered(string word)
    {
        for (int i = 0; i <= this.inputWord.Count; i++)
        {
            if (this.inputWord[i].Equals(word))
            {
                return true;
            } else
            {
                this.inputWord.Add(word);
            }
        }
        return false;
    }
}