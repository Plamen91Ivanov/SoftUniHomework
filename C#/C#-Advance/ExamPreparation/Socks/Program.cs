using System;
using System.Collections;
using System.Collections.Generic;

namespace ClubParty
{
    public class Program
    {
        static void Main(string[] args)
        {
            int maxCapacity = int.Parse(Console.ReadLine());
            string[] input = Console.ReadLine().Split();

            Stack<string> element = new Stack<string>(input);
            Queue<string> halls = new Queue<string>();
            List<int> allGroups = new List<int>();

            int currentCapacity = 0;

            while(element.Count > 0)
            { 
                string currentElement = element.Pop();

                bool isNumber = int.TryParse(currentElement, out int parsedNumber);

                if(!isNumber)
                {
                    halls.Enqueue(currentElement);
                }
                else
                {
                    if (halls.Count == 0 )
                    {
                        continue;
                    }
                    if (currentCapacity + parsedNumber > maxCapacity)
                    {
                        Console.WriteLine($"{halls.Dequeue()} -> {string.Join(", ",allGroups)}");
                        allGroups.Clear();
                        currentCapacity = 0;
                    }
                    if (halls.Count > 0)
                    {
                        allGroups.Add(parsedNumber);
                        currentCapacity += parsedNumber;
                    }
                    
                }
            }
        }
    }
}
