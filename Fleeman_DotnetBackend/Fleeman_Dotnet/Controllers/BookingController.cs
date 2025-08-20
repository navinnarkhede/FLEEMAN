using Fleeman_Dotnet.Dto;
using Fleeman_Dotnet.DTO;
using Fleeman_Dotnet.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Fleeman_Dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _services;
        public BookingController(IBookingService _servicesController)
        {
            _services = _servicesController;
        }

        [HttpGet("details/{bookcar}")]
        public async Task<ActionResult<List<ReturnCarMasterDetailsFromBooking>>> GetDetails(string bookcar)
        {

            var result = await _services.FetchCarDetailsForBooking(bookcar);

            if (result == null)
            {
                return NotFound("No car details found for the provided booking.");
            }

            return Ok(result);



        }

    }
}
