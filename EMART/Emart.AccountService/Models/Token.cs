using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.Models
{
    public class Token
    {
        public string uname { get; set; }
        public string token { get; set; }
        public string sellerId { get; set; }
        public string buyerId { get; set; }
        public string msg { get; set; }
}
}
