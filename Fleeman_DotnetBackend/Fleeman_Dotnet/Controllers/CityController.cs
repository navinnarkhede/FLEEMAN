using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityService _cityService;

        public CityController(ICityService cityService)
        {
            _cityService = cityService;
        }

        [HttpGet("state/{state_id}")]
        public async Task<ActionResult<List<city_master>>> GetCitiesByState(int state_id)
        {
            var cities = await _cityService.GetCitiesByStateAsync(state_id);
            if (cities == null || cities.Count == 0)
            {
                return NotFound("No cities found for this state.");
            }
            return Ok(cities);
        }
  
    }
}
