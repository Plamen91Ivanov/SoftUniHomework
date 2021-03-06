﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DefineClass
{
    public class Family
    {
        private List<Person> people;

        public Family()
        {
            this.people = new List<Person>();
        }

        public void AddMember(Person person)
        {
            this.people.Add(person);
        }

       public Person GetOldestMember() 
       => people.OrderByDescending(a => a.Age).FirstOrDefault();
         
    }
}
