using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Emart.AccountService.ARepository;
using Emart.AccountService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Emart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        private readonly IAccountRepository _context;

        private readonly IConfiguration configuration;
        public AccountController(IAccountRepository context, IConfiguration configuration)
        {
            _context = context;
            this.configuration = configuration;
        }

        private string GenerateJwtToken(string username)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, username),
                new Claim(ClaimTypes.Role,username)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            //var response = new Token
            //{
            //    username = username,
            //    token = new JwtSecurityTokenHandler().WriteToken(token)
            //};
            return new JwtSecurityTokenHandler().WriteToken(token);
        }














        [HttpGet]
        [Route("BuyerLogin/{uname}/{pwd}")]

        public IActionResult BuyerLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {
                Buyer buyer = _context.BuyerLogin(uname, pwd);
                if (buyer != null)
                {
                    token = new Token()
                    {
                        BuyerId= buyer.BuyerId,
                        token = GenerateJwtToken(uname),
                        msg = "success"
                    };
                }
                else
                {
                    token = new Token()
                    {
                        token = "",
                        msg = "unsuccess"
                    };
                }
                return Ok(token);
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SellerLogin/{uname}/{pwd}")]

        public IActionResult SellerLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {
                Seller seller = _context.SellerLogin(uname, pwd);
                if (seller != null)
                {
                    token = new Token()
                    {
                        BuyerId = seller.SellerId,
                        token = GenerateJwtToken(uname),
                        msg = "success"
                    };
                }
                else
                {
                    token = new Token()
                    {
                        token = "",
                        msg = "unsuccess"
                    };
                }
                return Ok(token);
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("BuyerRegister")]
        public IActionResult Post(Buyer item)
        {
            try
            {
                _context.BuyerRegister(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);

            }

        }
        [HttpPost]
        [Route("SellerRegister")]
        public IActionResult Post(Seller item)
        {
            try
            {
                _context.SellerRegister(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);

            }

        }
    }
}