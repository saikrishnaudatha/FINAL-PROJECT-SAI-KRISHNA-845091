using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;

namespace Emart.BuyerService.BRepository
{
   public interface IBuyerRepository
    {
        void Addtocart(Cart cartobj);

        void Deletefromcart(string cartid);

        //List<Cart> ViewCart();



        List<Items> SearchItems(string name);
        void BuyItem(Transactionhistory item);
        void EditProfile(Buyer obj);
        Buyer GetProfile(string bid);
        List<Transactionhistory> TransactionHistory(string bid);
        List<Category> GetCategory();
        List<SubCategory> SubCategory(string catid);
        List<Cart> ViewCart(string bid);

       // List<Transactionhistory> PurchaseHistory(string bid);
    }
}
