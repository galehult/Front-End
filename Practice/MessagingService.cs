public class MessagingService {
    private List<Message> messages;

    public MessagingService(){
        this.messages = new List<Message>();
    }

    public void Add(Message message) {
        if (message.GetContent().Length <= 280) {
            messages.Add(message);
        }
    }

    public List<Message> GetMessages() {
        return messages;
    }
}