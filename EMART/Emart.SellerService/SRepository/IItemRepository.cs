using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.SRepository
{
    public  interface IItemRepository
    {
        void AddItem(Items itemobj);

        List<Items> ViewItems();

        void DeleteItem(string itemid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string catid);
        void UpdateItem(Items itemobj);

        Items GetItem(string itemid);

    }
}
