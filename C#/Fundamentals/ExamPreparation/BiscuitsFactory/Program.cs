using System;

namespace BiscuitsFactory
{
    class Program
    {
        static void Main(string[] args)
        {
            int biscuitPerDay = int.Parse(Console.ReadLine());
            int numberOfWorkers = int.Parse(Console.ReadLine());
            int numberOfBiscuits = int.Parse(Console.ReadLine());

            
            double number = Math.Round((biscuitPerDay / 4.0),2)* numberOfWorkers;

            double numb = (int)((0.25 * biscuitPerDay )* numberOfWorkers);

            double evryThirdDay = (number * 10)  ;
             
            var numbersOfBiscuitsPerMonth = ((numberOfWorkers * biscuitPerDay) * 30) - evryThirdDay;

            var produceCompared = numberOfBiscuits - numbersOfBiscuitsPerMonth; 

            Console.WriteLine($"You have produced {numbersOfBiscuitsPerMonth} biscuits for the past month.");

            var percentageDifference = (produceCompared / numberOfBiscuits) * 100;
            var formatedProcentage =string.Format("{0:0.00}", percentageDifference); 

            if (produceCompared < 0)
            {
                var absPercentage = Math.Abs(decimal.Parse(formatedProcentage));
                Console.WriteLine($"You produce {absPercentage} percent more biscuits.");
            }
            else
            {
                var absPercentage = Math.Abs(decimal.Parse(formatedProcentage));
                Console.WriteLine($"You produce {absPercentage} percent less biscuits.");
            } 
        }
    }
}
