using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace Panda.Domain
{
    public class PandaUser : IdentityUser
    {
        public PandaUser()
        {
            this.Packages = new List<Package>();
            this.Receipts = new List<Receipt>();
        }

       public ICollection<Package> Packages { get; set; }

       public ICollection<Receipt> Receipts { get; set; }
            
         
    }
}
