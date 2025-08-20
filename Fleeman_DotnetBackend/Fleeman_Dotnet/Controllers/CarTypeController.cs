using Microsoft.AspNetCore.Mvc;
using Fleeman_Dotnet.Services;
using System.Linq;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Controllers
{
    [Route("api/cartypes")]
    [ApiController]
    public class CarTypeController : ControllerBase
    {
        private readonly ICarTypeService _carTypeService;

        public CarTypeController(ICarTypeService carTypeService)
        {
            _carTypeService = carTypeService;
        }
        
        // New endpoint to get all car types
        [HttpGet]
        public async Task<IActionResult> GetAllCarTypes()
        {
            var carTypes = await _carTypeService.GetAllCarTypesAsync();
            return Ok(carTypes);
        }

        [HttpGet("by-hub/{hubId}")]
        public async Task<IActionResult> GetCarTypesByHub(int hubId)
        {
            var carTypes = await _carTypeService.GetCarTypesByHubAsync(hubId);
            if (carTypes == null || !carTypes.Any())
            {
                return NotFound("No car types found for the selected hub.");
            }
            return Ok(carTypes);
        }
    }
}
