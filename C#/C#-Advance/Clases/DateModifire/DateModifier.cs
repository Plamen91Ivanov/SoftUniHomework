using System;
using System.Collections.Generic;
using System.Text;

namespace DateModifire
{
    public class DateModifier
    {
        public double DifferenceBetweenDates(string firstDate,string secondDate)
        {
            DateTime startDate = DateTime.Parse(firstDate);
            DateTime endDate = DateTime.Parse(secondDate);

            double result = Math.Abs((endDate - startDate).TotalDays);

            return result;
        }
    }
}
