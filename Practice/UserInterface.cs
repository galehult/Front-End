public class UserInterface
{
    private Input input;
    private List<string> words;

    public UserInterface(Input input)
    {
        this.input = input;
        this.words = new List<string>();
    }

    public void Start()
    {
        while (true)
        {
            Console.Write("Enter a word: ");
            string word = input.ReadLine();

            if (AlreadyEntered(word))
            {
                break;
            }

            this.words.Add(word);
        }
        Console.WriteLine("You gave the same word twice!");
    }

    public bool AlreadyEntered(string word)
    {
        return this.words.Contains(word);
    }
}