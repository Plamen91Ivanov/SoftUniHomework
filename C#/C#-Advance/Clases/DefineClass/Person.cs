using System;
using System.Collections.Generic;
using System.Text;

namespace DefineClass
{
    public class Person
    {
        private string name;
        private int age;

        public Person(string name , int age)
        {
            this.name = Name;
            this.age = Age;
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
