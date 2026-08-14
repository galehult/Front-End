public class Stack
{
    private List<string> stack;

    public Stack()
    {
        this.stack = new List<string>();
    }

    public bool IsEmpty()
    {
        if (stack.Count != 0)
        {
            return false;
        }

        return true;
    }

    public void Add(string value)
    {
        this.stack.Add(value);
    }
    
    public List<string> Values()
    {
        return this.stack;
    }
}