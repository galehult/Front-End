public class Menu
{
    private List<string> meals;

    public Menu()
    {
        this.meals = new List<string>();
    }

    public void AddMeal(string meal)
    {
        this.meals.Add(meal);
    }

    public void PrintMeals()
    {
        foreach (string meal in meals)
        {
            Console.WriteLine(meal);
        }
    }

    public void ClearMenu()
    {
        this.meals.Clear();
    }
}