using System;

namespace DateModifire
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            string firstDate = Console.ReadLine();
            string secondDate = Console.ReadLine();

            DateModifier dateModifier = new DateModifier();
            double result = dateModifier.DifferenceBetweenDates(firstDate, secondDate);

            Console.WriteLine(result);
        }
    }
}
