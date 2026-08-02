public class Book {
    private String title;
    private int publicationYear;

    public Book(String title, int publicationYear) {
        this.title = title;
        this.publicationYear = publicationYear;
    }

    public boolean equals(Object compared) {
        if (this == compared) {
            return true;
        }

        if (!(compared instanceof Book)) {
            return false;
        }

        Book comparedBook = (Book) compared;

        if (this.title.equals(comparedBook.title) &&
            this.publicationYear == comparedBook.publicationYear) {
            return true;
        }

        return false;
    }

    public String toString() {
        return "Book title: " + this.title + ", Year Published: " + this.publicationYear;
    }
}
