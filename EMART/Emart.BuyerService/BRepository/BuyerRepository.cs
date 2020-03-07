using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;

namespace Emart.BuyerService.BRepository
{
        public class BuyerRepository : IBuyerRepository
        {
            private readonly EmartDBContext _context;
            public BuyerRepository(EmartDBContext context)
            {
                _context = context;
            }
            public void BuyItem(TransactionHistory item)
            {

                _context.TransactionHistory.Add(item);
                _context.SaveChanges();
            }

        public void Addtocart(Cart cartobj)
        {
            _context.Cart.Add(cartobj);
            _context.SaveChanges();
        }

        public void Deletefromcart(string cartid)
        {
            Cart cartobj = _context.Cart.Find(cartid);
            _context.Remove(cartobj);
            _context.SaveChanges();
        }

        public List<Cart> ViewCart()
        {
            return _context.Cart.ToList();
        }
    
    public void EditProfile(Buyer obj)
            {
                _context.Buyer.Update(obj);
                _context.SaveChanges();
            }

            public List<Category> GetCategory()
            {
                return _context.Category.ToList();
            }

            public Buyer GetProfile(string bid)
            {
                return _context.Buyer.Find(bid);

            }

            public List<Items> SearchItems(string name)
            {
                return _context.Items.Where(res => res.ItemName == name).ToList();
            }

            public List<SubCategory> SubCategory(string catid)
            {
                return _context.SubCategory.Where(res => res.CategoryId == catid).ToList();
            }

            public List<TransactionHistory> TransactionHistory(string bid)
            {
                return _context.TransactionHistory.Where(res => res.BuyerId == bid).ToList();

            }
        }
    }

    

