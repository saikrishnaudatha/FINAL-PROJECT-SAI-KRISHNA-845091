//using Emart.BuyerService.BRepository;
//using Emart.BuyerService.Models;
//using NUnit.Framework;
//using System;
//using System.Collections.Generic;
//using System.Text;

//namespace Emart.Test
//{
//    [TestFixture]
//    class TestBuyerService
//    {
//        BuyerRepository _buyrepo;
//        [SetUp]
//        public void SetUp()
//        {
//            _buyrepo = new BuyerRepository(new EmartDBContext());

//        }



//        [Test]
//        [Description("TestSearchItem()")]
//        public void TestSearchItem()
//        {

//            var result = _buyrepo.SearchItems("FILA");

//            Assert.IsNotNull(result);

//        }



//        //[Test]
//        //[Description("TestBuyItem()")]

//        //public void TestBuyItem()
//        //{
//        //    _buyrepo.BuyItem(new Transactionhistory()
//        //    {

//        //        BuyerId = "1",
//        //        SellerId = "1",
//        //        TransactionId = "1",
//        //        ItemId = "I585",
//        //        NumberOfItems = "2",
//        //        DateTime = DateTime.Now,
//        //        ItemName = "FILA",
//        //        Price = "2999",
//        //        Image = "shoe4.jpg",
//        //        TransactionType = "Credit Card"
//        //    }
//        // );
//        //    var result = _buyrepo.TransactionHistory("1");

//        //    Assert.IsNotNull(result);
//        //}

//        //[Test]
//        //[Description("TestEditProfile")]

//        //public void TestEditProfile()

//        //{
//        //    _buyrepo.EditProfile(new Buyer()
//        //    {

//        //        BuyerId = "1",
//        //        UserName = "SAI",
//        //        Password = "123",
//        //        EmailId = "sai@cts.com",
//        //        MobileNo = "9912897832"
//        //        // CreatedDateTime = DateTime.Now

//        //    });

//        //    var result = _buyrepo.GetProfile("4");

//        //    Assert.IsNotNull(result);
//        //}



//        [Test]
//        [Description("Test GetCategories()")]
//        public void TestGetCategories()
//        {
//            var result = _buyrepo.GetCategory();
//            Assert.IsNotNull(result);
//        }







//        [Test]
//        [Description("Test GetSubCategories()")]
//        public void TestGetSubCategories()
//        {
//            var result = _buyrepo.SubCategory("1");
//            Assert.IsNotNull(result);
//        }
    

////        [Test]
////        [Description("Test AddtoCart()")]
////        public void TestAddtoCart()
////        {
////            _buyrepo.Addtocart(new Cart()
////            {
////                CartId = "CT361",
////                CategoryId = "11",
////                SubcategoryId = "8",
////                SellerId = "1",
////                ItemId = "I585",
////                Itemname = "FILA",
////                Price = "2999",
////                Description = "good",
////                Image = "shoecanvas.jpg"

////            });

////            var result = _buyrepo.ViewCart();
////            Assert.IsNotNull(result);
////        }
////    }
////}
//        [Test]
//[Description("Test Deletefromcart()")]
//public void TestDeletefromcart()
//{
//    _buyrepo.Deletefromcart("CT361");
//    var result = _buyrepo.ViewCart();

//    Assert.IsNotNull(result);
//}

//    }
//}

