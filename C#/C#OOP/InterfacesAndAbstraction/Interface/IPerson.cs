using System;
using System.Collections.Generic;
using System.Text;

namespace Interface
{
    public class IPerson  
    {
        public string Name;
        public int Age;

        public IPerson(string name , int age)
        {
            this.Name = name;
            this.Age = age;
        }
    }
}
