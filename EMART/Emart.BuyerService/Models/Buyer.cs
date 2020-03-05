using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            TransactionHistory = new HashSet<TransactionHistory>();
        }

        public string BuyerId { get; set; }
        public string UserName { get; set; }
        public string EmailId { get; set; }
        public string Password { get; set; }
        public string MobileNo { get; set; }
        public DateTime CreatedDateTime { get; set; }

        public virtual ICollection<TransactionHistory> TransactionHistory { get; set; }
    }
}
