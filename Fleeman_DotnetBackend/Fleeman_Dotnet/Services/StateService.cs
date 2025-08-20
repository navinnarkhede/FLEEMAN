
using Fleeman_Dotnet.Models;
using Microsoft.EntityFrameworkCore;
using Fleeman_Dotnet.Repository;
using Fleeman_Dotnet.Dto;

namespace Fleeman_Dotnet.Services
{
    public class StateService : IStateService
    {
        private readonly fleet_projectContext _context;

        public StateService(fleet_projectContext context)
        {
            _context = context;
        }

        public async Task<List<StateDto>> GetAllStateMasterAsync()
        {
            return await _context.state_masters.Select(state => new StateDto
            {
                stateId = state.state_id,
                stateName = state.state_name
            }).ToListAsync();
        }


    }
}
