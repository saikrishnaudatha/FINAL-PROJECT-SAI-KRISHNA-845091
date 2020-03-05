using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.ARepository
{
   public  interface IAccountRepository
    {
        Buyer BuyerLogin(string uname, string pwd);
        Seller SellerLogin(string uname, string pwd);
        void SellerRegister(Seller sobj);
        void BuyerRegister(Buyer bobj);

    }
}
