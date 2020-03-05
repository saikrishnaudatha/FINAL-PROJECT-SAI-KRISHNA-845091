using Emart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AccountService.ARepository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly EmartDBContext _context;
        public AccountRepository(EmartDBContext context)
        {
            _context = context;
        }
        public Buyer BuyerLogin(string uname, string pwd)
        {
           
                return _context.Buyer.SingleOrDefault(p => p.UserName == uname && p.Password == pwd);
            //if (b != null)
            //{
            //    return true;

            //}
            //else
            //    return false;
        }

        public void BuyerRegister(Buyer bobj)
        {
            _context.Add(bobj);
            _context.SaveChanges();
        }

        public Seller SellerLogin(string uname, string pwd)
        {

            return _context.Seller.SingleOrDefault(p => p.UserName == uname && p.Password == pwd);
            //if (b != null)
            //{
            //    return ;

            //}
            //else
            //    return false;
        }

        public void SellerRegister(Seller sobj)
        {
            _context.Add(sobj);
            _context.SaveChanges();
        }
    }
}
