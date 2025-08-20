using Fleeman_Dotnet.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Fleeman_Dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirportController : ControllerBase
    {
        private readonly IAirportService _airportService;

        public AirportController(IAirportService airportService)
        {
            _airportService = airportService;
        }

        [HttpGet("airport")]
        public async Task<IActionResult> GetHubByAirportCode([FromQuery] string airportCode)
        {
            try
            {
                var hubList = await _airportService.GetHubByAirportAsync(airportCode);
                if (hubList == null )
                {
                    return NotFound("No hub found for the given airport code.");
                }

                return Ok(hubList);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Unexpected error occurred.");
            }
        }
    }
}

