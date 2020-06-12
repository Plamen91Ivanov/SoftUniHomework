using System;

namespace RecursionBasics
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Test(0);
        }


        
        public static void Test(int x)
        {
            if (x == 10)
            {
                return;
            }

            Console.WriteLine($"Pre: {x}");

            Test(x + 1);

            Console.WriteLine($"Post : {x}");
        }

        public static int Factorial(int x)
        {
            if (x == 1)
            {
                return x;
            }
            return x * Factorial(x - 1);
        }
        public static int Pow(int x, int n)
        {
            if (n == 1)
            {
                return x;
            }

            return x * Pow(x, n - 1); 
        }
    }
}
