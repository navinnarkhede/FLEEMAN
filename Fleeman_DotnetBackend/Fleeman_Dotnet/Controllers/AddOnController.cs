using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddOnController : ControllerBase
    {
        private readonly IAddOnService _addOnService;

        public AddOnController(IAddOnService addOnService)
        {
            _addOnService = addOnService;
        }

        // GET: api/AddOn
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<add_on_master>), 200)]
        public async Task<IActionResult> GetAllAddOns()
        {
            var addOns = await _addOnService.GetAllAddOnsAsync();
            return Ok(addOns);
        }

        // GET: api/AddOn/5
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(add_on_master), 200)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> GetAddOnById(int id)
        {
            var addOn = await _addOnService.GetAddOnByIdAsync(id);
            if (addOn == null)
            {
                return NotFound($"Add-on with ID {id} not found.");
            }
            return Ok(addOn);
        }

        // POST: api/AddOn
        [HttpPost]
        [ProducesResponseType(typeof(add_on_master), 201)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> CreateAddOn([FromBody] add_on_master addOn)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdAddOn = await _addOnService.CreateAddOnAsync(addOn);

            // Returns a 201 Created status with a Location header pointing to the new resource
            return CreatedAtAction(nameof(GetAddOnById), new { id = createdAddOn.add_on_id }, createdAddOn);
        }

        // PUT: api/AddOn/5
        [HttpPut("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> UpdateAddOn(int id, [FromBody] add_on_master addOn)
        {
            if (id != addOn.add_on_id)
            {
                return BadRequest("ID in URL does not match ID in request body.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var success = await _addOnService.UpdateAddOnAsync(id, addOn);
            if (!success)
            {
                return NotFound($"Add-on with ID {id} not found.");
            }
            return NoContent(); // Indicates success with no content to return
        }

        // DELETE: api/AddOn/5
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> DeleteAddOn(int id)
        {
            var success = await _addOnService.DeleteAddOnAsync(id);
            if (!success)
            {
                return NotFound($"Add-on with ID {id} not found.");
            }
            return NoContent();
        }
    }
}