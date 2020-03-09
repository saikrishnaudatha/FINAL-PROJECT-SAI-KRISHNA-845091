using Emart.AccountService.ARepository;
using Emart.AccountService.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Emart.Test
{
    [TestFixture]
    class TestAccountService
    {
        AccountRepository _acrepo;
        [SetUp]
        public void SetUp()
        {
            _acrepo = new AccountRepository(new EmartDBContext());

        }
        [Description("Test BuyerLogin")]
        [Test]

        public void TestBuyerLogin()
        {
            var result = _acrepo.BuyerLogin("SAI", "123");
            Assert.IsNotNull(result);

        }
        //        [Description("Test SellerLogin")]
        //        [Test]

        //        public void TestSellerLogin()
        //        {
        //            var result = _acrepo.SellerLogin("KRISH", "1234");
        //            Assert.IsNotNull(result);

        //        }
        //        [Description("Test BuyerRegister")]
        //        [Test]
        //        public void TestRegisterBuyer()

        //        {

        //            _acrepo.BuyerRegister(new Buyer()
        //            {
        //                BuyerId = "B0001",
        //                UserName = "RAJK",
        //                EmailId = "rajk@gmail.com",
        //                Password = "123",
        //                MobileNo="9840990985",
        //                CreatedDateTime=DateTime.Now

        //            });
        //            var result = _acrepo.BuyerLogin("RAJK","123");
        //            Assert.IsNotNull(result);
        //        }
        //        [Description("Test SellerRegister")]
        //        [Test]
        //        public void TestRegisterSeller()

        //        {

        //            _acrepo.SellerRegister(new Seller()
        //            {
        //                SellerId="S0009",
        //      UserName="AKONN",
        //      Password="1234",
        //      CompanyName="ShoeMart1",
        //      Gstin="abcd1234",
        //      BriefDetails="Hight Rated",
        //      PostalAddress="Vijayawada",
        //      Website="www.shoemart.com",
        //      EmailId="akonn@gmail.com",
        //      MobileNo="9988776620"
        //      //CreatedDateTime:"2020-02-25"
        //            });
        //            var result = _acrepo.SellerLogin("AKONN", "1234");
        //            Assert.IsNotNull(result);
        //        }

        //    }
        //}

    }
}