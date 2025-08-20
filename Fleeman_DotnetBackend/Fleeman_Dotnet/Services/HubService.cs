using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Repository;
using Fleeman_Dotnet.Services;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class HubService : IHubService
{
    private readonly fleet_projectContext _context;

    public HubService(fleet_projectContext context)
    {
        _context = context;
    }

    public async Task<List<HubDto>> GetHubsByCityAndStateAsync(string cityName, string stateName)
    {
        return await _context.hub_masters
            .Include(h => h.city)  // Ensure City is loaded
            .Include(h => h.state) // Ensure State is loaded
            .Where(h => h.city != null && h.state != null && h.city.city_name == cityName && h.state.state_name == stateName)
            .Select(h => new HubDto
            {
                hubId = h.hub_id,
                hubName = h.hub_name,
                hubAddress = h.hub_address_and_details,
                cityId = h.city.city_id,  
                stateId = h.state.state_id,
                cityName = h.city.city_name,
                stateName = h.state.state_name
            })
            .ToListAsync(); 
    }
}
