using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExsercisesArrayLINQDICTIONARY
{
    class Program
    {
        static void Main()
        {

            string[] FirstLine = Console.ReadLine().Split(' ');

            string[] SecondLine = Console.ReadLine().Split(' ');

            string[] common = new string[FirstLine.Length];

            int lenght = Math.Min(FirstLine.Length, SecondLine.Length);
            int countL = 0;
            int countR = 0;

            for (int i = 0; i < lenght; i++)
            {
                if (FirstLine[i] == SecondLine[i])
                {
                    countL++;

                }
            }
            var y = 1;
            for (int i = lenght; i > 0; i--)
            {
                 
                if (FirstLine[FirstLine.Length-y] == SecondLine[SecondLine.Length-y])
                {
                    countR++;
                     
                }

                y++;

            }

            if (countL > countR)
            {
                Console.WriteLine(countL);
            }
            else if (countR > countL)
            {
                Console.WriteLine(countR);
            }
            else
            {
                Console.WriteLine("0");
            }





        }
    }
}
