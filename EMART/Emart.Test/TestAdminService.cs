using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    [TestFixture]
    class TestAdminService
    {
        AdminRepository _amrepo;
        [SetUp]
        public void SetUp()
        {
            _amrepo = new AdminRepository(new EmartDBContext());

        }
        //[Test]
        //[Description("TestAddCategory()")]
        //public void TestAddCategory()
        //{
        //    _amrepo.AddCategories(new Category()
        //    {
        //        CategoryId = "C0021",
        //        CategoryName = "Sandels",
        //        BriefDetails = "Run Walk"

        //    }
        //        );


        //    var result = _amrepo.GetCatById("C0021");
        //    Assert.IsNotNull(result);
        //}


        //[Test]
        //[Description("TestAddSubCategory()")]
        //public void TestAddSubCategory()
        //{
        //    _amrepo.AddSubCategories(new SubCategory()
        //    {

        //        SubcategoryId = "SC001",
        //        SubcategoryName = "Flexy",
        //        CategoryId = "C0021",
        //        BriefDetails = "Good",
        //        Gst = "abcde123"
        //    }
        //        );


        //    var result = _amrepo.GetSubCatById("SC001");
        //    Assert.IsNotNull(result);
        //}




        //[Test]
        //[Description("TestEditCategory")]
        //public void TestEditCategory()
        //{
        //    _amrepo.EditCategories(new Category()
        //    {

        //        CategoryId = "C0021",
        //        CategoryName = "Sandels",
        //        BriefDetails = "Strong"

        //    });

        //    var result = _amrepo.GetCatById("C0021");
        //    Assert.IsNotNull(result);
        //}






        //[Test]
        //[Description("TestEditSubCategory")]
        //public void TestEditSubCategory()
        //{
        //    _amrepo.EditSubCategories(new SubCategory()
        //    {
        //        SubcategoryId = "SC001",
        //        SubcategoryName = "Flexy",
        //        CategoryId = "C0021",
        //        BriefDetails = "highEnd",
        //        Gst = "ab123"

        //    });

        //    var result = _amrepo.GetSubCatById("SC001");
        //    Assert.IsNotNull(result);
        //}







        //[Test]
        //[Description("TestGetAllCategories()")]
        //public void TestGetAllCategories()
        //{
        //    var result = _amrepo.GetCategories();
        //    Assert.IsNotNull(result);
        //    Assert.Greater(result.Count, 2);

        //}



        //[Test]
        //[Description("TestGetAllSubCategories()")]
        //public void TestGetAllSubCategories()
        //{
        //    var result = _amrepo.ViewSubCategories();
        //    Assert.IsNotNull(result);
        //    Assert.Greater(result.Count, 2);

        //}





        [Test]
        [Description("TestDeleteSubCategory()")]
        public void TestDeleteSubCategory()
        {
            _amrepo.DeleteSubCategories("91");
            var result = _amrepo.GetSubCatById("91");
            Assert.IsNull(result);

        }

        [Test]
        [Description("TestDeleteCategory()")]
        public void TestDeleteCategory()
        {
            _amrepo.DeleteCategories("c123");
            var result = _amrepo.GetCatById("c123");
            Assert.IsNull(result);

        }





    }


}