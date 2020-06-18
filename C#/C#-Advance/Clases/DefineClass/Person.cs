using System;
using System.Collections.Generic;
using System.Text;

namespace DefineClass
{
    public class Person
    {
        private string name;
        private int age;
        
        public Person()
        {
            this.name = "No name";
            this.age = 10;
        }
        public Person(int age)
            :this()
        {
            this.age = Age;
        }
        public Person(string name , int age) 
        {
            this.Name = name;
            this.Age = age;
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; }
        }
        public int Age
        {
            get { return this.age;}
            set { this.age = value; }
        }
    }
}
