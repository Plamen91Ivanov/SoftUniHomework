using System;
using System.Collections.Generic;
using System.Text;

namespace Interface
{
    public class Citizen : IPerson
    {
        public Citizen(string name, int age) 
            : base(name, age)
        {
            this.Name = name;
            this.Age = age;
        }
         
    }
}
