using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.SRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _iitemrepo;
        public ItemController(IItemRepository iitemrepo)
        {
            _iitemrepo = iitemrepo;
        }

        [HttpPost]
        [Route("AddItem")]
        public IActionResult AddItem(Items itemobj)
        {
            try
            {
                _iitemrepo.AddItem(itemobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }


        [HttpGet]
        [Route("ViewItems")]
        public IActionResult ViewItems()
        {
            try
            {

                return Ok(_iitemrepo.ViewItems());
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }


        [HttpDelete]
        [Route("DeleteItem/{itemid}")]
        public IActionResult DeleteItem(string itemid)
        {
            try
            {
                _iitemrepo.DeleteItem(itemid);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut]
        [Route("UpdateItem")]
        public IActionResult UpdateItem(Items iobj)
        {
            try
            {

                _iitemrepo.UpdateItem(iobj);
                return Ok();
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet]
        [Route("GetItem/{itemid}")]
        public IActionResult GetItem(string itemid)
        {
            try
            {

                return Ok(_iitemrepo.GetItem(itemid));
            }

            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }





        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_iitemrepo.GetCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }



        [HttpGet]
        [Route("GetSubCategories/{catid}")]
        public IActionResult GetSubCategories(string catid)
        {
            try
            {
                return Ok(_iitemrepo.GetSubCategories(catid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}