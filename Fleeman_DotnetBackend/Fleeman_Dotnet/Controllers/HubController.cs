using Fleeman_Dotnet.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("api/v1")]
public class HubController : ControllerBase
{
    private readonly IHubService _hubService;

    public HubController(IHubService hubService)
    {
        _hubService = hubService;
    }

    [HttpGet("hub")]
    public async Task<IActionResult> GetAllHubs([FromQuery] string stateName, [FromQuery] string cityName)
    {
        var hubs = await _hubService.GetHubsByCityAndStateAsync(cityName, stateName);

        return Ok(hubs); 
    }


}
