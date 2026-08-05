public class SimpleDate
{
    private int day;
    private int month;
    private int year;

    public SimpleDate(int day, int month, int year)
    {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    public int GetDay()
    {
        return this.day;
    }

    public int GetMonth()
    {
        return this.month;
    }

    public int GetYear()
    {
        return this.year;
    }

    public override bool Equals(object? obj)
    {
        if (this == obj)
        {
            return true;
        }

        if (!(obj is SimpleDate))
        {
            return false;
        }

        SimpleDate comparedDate = (SimpleDate)obj;

        if (this.day == comparedDate.day &&
            this.month == comparedDate.month &&
            this.year == comparedDate.year)
        {
            return true;
        }

        return false;
    }

    public override string ToString()
    {
        return this.day + "." + this.month + "." + this.year;
    }
}