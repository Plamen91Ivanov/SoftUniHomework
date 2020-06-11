using System;
using System.Collections.Generic;
using System.Linq;

namespace WizardPoker
{
    class Program
    {
        static void Main(string[] args)
        {
            var inputCards = Console.ReadLine()
                .Split(":")
                .ToList();

            var deck = new List<string>();
             
             
            var command = Console.ReadLine();

            while(command != "Ready")
            {
                var parts = command
                    .Split(" ") 
                    .ToArray();

                var type = parts[0];
                  
                if (parts.Count() == 2)
                {
                    if (type == "Add")
                    {
                        var cardName = parts[1];

                        if (inputCards.Contains(cardName))
                        {
                           // inputCards.Remove(cardName);
                            deck.Add(cardName);
                        }
                        else
                        {
                            Console.WriteLine("Card not found.");
                        } 
                    }
                    else if (type == "Remove")
                    {
                        var cardName = parts[1];

                        if (deck.Contains(cardName))
                        {
                            deck.Remove(cardName);
                        }
                        else
                        {
                            Console.WriteLine("Card not found.");
                        }
                        

                    }
                    else if (type == "Shuffle")
                    {
                        var cardName = parts[1];

                        if (cardName == "deck")
                        { 
                            deck.Reverse();
                        }
                        
                    }
                     
                }
                else
                {
                    if (type == "Insert")
                    {
                        var cardName = parts[1];
                        var cardIndex = int.Parse(parts[2]);

                        if (inputCards.Contains(cardName))
                        {
                          //  inputCards.Remove(cardName);
                            deck.Insert(cardIndex, cardName);
                        }
                        else
                        {
                            Console.WriteLine("Error!");
                        }
                        

                    }
                    else if (type == "Swap")
                    {
                        var cardFirstName = parts[1];
                        var cardSecName = parts[2];

                        var firstNameIndex = deck.IndexOf(cardFirstName);
                        var secondNameIndex = deck.IndexOf(cardSecName);

                        deck.Remove(cardFirstName);


                        deck.Insert(firstNameIndex, cardSecName);
                         
                        deck.Remove(cardSecName);
                        deck.Insert(secondNameIndex, cardFirstName);
                         
                    }

                }
                command = Console.ReadLine();
            }

            Console.WriteLine(string.Join(" ", deck));
        }
    }
}
