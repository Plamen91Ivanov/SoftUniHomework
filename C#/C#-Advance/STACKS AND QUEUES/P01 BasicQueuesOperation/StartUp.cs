﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace P01_BasicQueuesOperation
{
    class StartUp
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            int[] numbersToEnqueue = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray();

            Queue<int> numbers = new Queue<int>();

            int n = input[0];
            int s = input[1];
            int x = input[2];

            FillQueue(numbersToEnqueue, numbers, n);
            DeleteFromQueue(numbers, s);

            if (numbers.Contains(x))
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine(numbers.Count > 0 ? numbers.Min() : 0);
            }

        }

        private static void DeleteFromQueue(Queue<int> numbers, int s)
        {
            for (int i = 0; i < s; i++)
            {
                numbers.Dequeue();
            }
        }

        private static void FillQueue(int[] numbersToEnqueue, Queue<int> numbers, int n)
        {
            for (int i = 0; i < n; i++)
            {
                numbers.Enqueue(numbersToEnqueue[i]);
            }
        }
    }
}
