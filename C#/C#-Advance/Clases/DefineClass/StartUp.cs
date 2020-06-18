using System;
using System.Linq;

namespace DefineClass
{
    public class StartUp
    {
        static void Main(string[] args)
        {
          // Person firstPerson = new Person();
          // Person secondPerson = new Person(2);
          // Person thrirdPerson = new Person("Pesho",30);

            Family family = new Family();

            int count = int.Parse(Console.ReadLine());

            for (int i =0; i < count; i++)
            {
                string[] personInfo = Console.ReadLine()
                    .Split(' ')
                    .ToArray();

                string name = personInfo[0];
                int age = int.Parse(personInfo[1]);

                Person person = new Person(name, age);

                family.AddMember(person);


            }

            Person oldestMember = family.GetOldestMember();

            Console.WriteLine($"{oldestMember.Name}:{oldestMember.Age}");
            
        }
    }
}
