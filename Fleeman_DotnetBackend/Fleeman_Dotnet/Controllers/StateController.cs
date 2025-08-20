using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Services;
using Fleeman_Dotnet.Dto;

namespace Fleeman_Dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAll")]
    public class StateController : ControllerBase
    {
        private readonly IStateService _stateService;

        public StateController(IStateService stateService)
        {
            _stateService = stateService;
        }

        [HttpGet("State")]
        public async Task<ActionResult<List<StateDto>>> GetStates()
        {
            var states = await _stateService.GetAllStateMasterAsync();

            if (states == null || states.Count == 0)
            {
                return NoContent();
            }

            return Ok(states);
        }
    }
}
