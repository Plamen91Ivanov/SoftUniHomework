using System;

namespace RecursionBasics
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            int result = Pow(2, 3);
            int factorialResult = Factorial(5);
            Console.WriteLine(factorialResult);
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
