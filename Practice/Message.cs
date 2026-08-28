public class Message 
{
    private string sender;
    private string content;

    public Message(string sender, string content){
        this.sender = sender;
        this.content = content;
    }

    public string GetSender()
    {
        return this.sender;
    }

    public string GetContent(){
        return this.content;
    }
}