using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RazorViews.ViewModels.Home
{
    public class IndexVIewModel
    {
        public string Message { get; set; }
        
        public int Year { get; set; }

        public IEnumerable<string> Names { get; set; }
    }
}
