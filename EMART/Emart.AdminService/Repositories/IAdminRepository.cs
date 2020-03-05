using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
  public interface IAdminRepository
    {
        public void AddCategories(Category catobj);
        public void AddSubCategories(SubCategory subcatobj);
        List<Category> GetCategories();
        List<Category> ViewCategories();
        List<SubCategory> ViewSubCategories();
        public void EditCategories(Category catobj);
        public void EditSubCategories(SubCategory subcatobj);
        public void DeleteCategories(string catid);

        public void DeleteSubCategories(string subcatid);
        public Category GetCatById(string catid);
        public SubCategory GetSubCatById(string subcatid);

    }
}
