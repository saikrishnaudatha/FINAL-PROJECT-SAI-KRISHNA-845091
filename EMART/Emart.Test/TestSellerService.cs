using Emart.SellerService.SRepository;
using Emart.SellerService.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _srepo;
        ItemRepository _irepo;
        [SetUp]
        public void SetUp()
        {
            _srepo = new SellerRepository(new EmartDBContext());
            _irepo = new ItemRepository(new EmartDBContext());
        }


        [Test]
        [Description("Test EditProfile()")]
        public void TestEditProfile()
        {
            _srepo.EditProfile(new Seller()
            {
                SellerId = "1",
                UserName = "KRISH",
                Password = "1234",
                CompanyName = "ShoeMart",
                Gstin = "abck123",
                BriefDetails = "Hight Rated",
                PostalAddress = "Vijayawada",
                Website = "www.shoemart.com",
                EmailId = "krish@gmail.com",
                MobileNo = "9988776655"
                //CreatedDateTime="2020-02-25"
            }



           );
            var result = _srepo.GetProfile("1");

            Assert.IsNotNull(result);
        }


        [Test]
        [Description("Test AddItem()")]
        public void TestAddItem()
        {
            _irepo.AddItem(new Items()
            {
               // SellerId = "4",
                ItemId = "I585",
                CategoryId = "16",
                SubcategoryId = "15",
                Price = "3900",
                ItemName = "BATA",
                Image = "shoeshop.jpg",
                Description = "HD Quality",
                StockNumber = "60",
                Remarks = "Good"

            }
           );
            var result = _irepo.GetItem("I074");

            Assert.IsNotNull(result);
        }
    }
}

//[Test]
//[Description("Test ViewItems()")]
//public void TestViewItems()
//{

//    var result = _irepo.ViewItems();

//    Assert.IsNotNull(result);
//}


//[Test]
//[Description("Test DeleteItem()")]
//public void TestDeleteItem()
//{

//    _irepo.DeleteItem("I853");
//    var result = _irepo.GetItem("I853");
//    Assert.IsNull(result);
//}


//[Test]
//[Description("Test UpdateItem()")]
//public void TestUpdateItem()
//{
//    _irepo.UpdateItem(new Items()
//    {
//        SellerId = "1",
//        ItemId = "I074",
//        CategoryId = "1",
//        SubcategoryId = "SC38",
//        Price = "800",
//        ItemName = "Camera",
//        Image = "electronic7",
//        Description = "HD Quality",
//        StockNumber = "70",
//        Remarks = "Good"
//    }
//   );
//    var result = _irepo.GetItem("I074");

//    Assert.IsNotNull(result);
//}

//[Test]
//[Description("Test GetCategories()")]
//public void TestGetCategories()
//{
//    var result = _irepo.GetCategories();
//    Assert.IsNotNull(result);
//}


//[Test]
//[Description("Test GetSubCategories()")]
//public void TestGetSubCategories()
//{
//    var result = _irepo.GetSubCategories("SC38");
//    Assert.IsNotNull(result);
//}


//    }
//}

