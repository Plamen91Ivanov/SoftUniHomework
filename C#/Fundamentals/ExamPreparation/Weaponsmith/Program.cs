using System;
using System.Collections.Generic;
using System.Linq;

namespace Weaponsmith
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine()
               .Split('|') 
               .ToList();
            var oddList = new List<string>();
            var evenList = new List<string>();

            string command = Console.ReadLine();

            while (command != "Done")
            {
                var parts = command
                    .Split(" ") 
                    .ToArray();
                if (command == "Done")
                {
                    break;
                }

                string type = parts[0];
                string direction = parts[1];
                int position = 0;

                if (parts.Count() == 3)
                { 
                     position = int.Parse(parts[2]);

                }

                if (type == "Move" && direction == "Left")
                { 
                    if (position > 0 && position < input.Count())
                    { 
                        var part = input.ElementAt(position);
                          input.RemoveAt(position);
                          input.Insert((position - 1), part);
                    }
                     
                }
                else if(type == "Move" && direction == "Right")
                {
                    if (position >= 0 && position < (input.Count()- 1))
                    { 
                         var part = input.ElementAt(position);
                         input.RemoveAt(position);
                         input.Insert((position + 1), part);
                    } 
                }
                else if (command == "Check Even")
                {
                    for (int i = 0; i < input.Count; i++)
                    {
                        if (i % 2 == 0)
                        {
                            oddList.Add(input[i]);
                        }
                    }
                    
                }
                else if(command == "Check Odd")
                {
                    for (int i = 0; i < input.Count; i++)
                    {
                        if (i % 2 != 0)
                        {
                            evenList.Add(input[i]);
                        }
                    }
                     
                }
                 
                command = Console.ReadLine(); 
            } 

            foreach(var item in oddList)
            {
                Console.Write(item + " ");
            }

            Console.WriteLine();

            foreach (var item in evenList)
            {
                

                Console.Write(item + " ",StringSplitOptions.RemoveEmptyEntries);
            } 
            Console.WriteLine(); 

            Console.WriteLine($"You crafted {string.Join("",input)}!"); 
        }
    }
}
