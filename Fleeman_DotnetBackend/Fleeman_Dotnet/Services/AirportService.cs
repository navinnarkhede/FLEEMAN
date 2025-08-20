using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Repository;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Services
{
    public class AirportService : IAirportService
    {
        private readonly fleet_projectContext _context;

        public AirportService(fleet_projectContext context)
        {
            _context = context;
        }

        public async Task<List<object>> GetHubByAirportAsync(string airportCode)
        {
            if (string.IsNullOrWhiteSpace(airportCode))
            {
                throw new ArgumentException("Airport code cannot be empty.");
            }

            var result = await (from airport in _context.airport_masters
                                join city in _context.city_masters on airport.city_id equals city.city_id
                                join state in _context.state_masters on airport.state_id equals state.state_id
                                join hub in _context.hub_masters on airport.state_id equals hub.hub_id
                                where airport.airport_code == airportCode
                                select new
                                {
                                    hubAdress= hub.hub_address_and_details,
                                    hubName = hub.hub_name,
                                    cityId = airport.city_id,
                                    hubId = airport.hub_id,
                                    stateId = airport.state_id,
                                    cityName = city.city_name,
                                    stateName = state.state_name
                                }).ToListAsync();

            return result.Cast<object>().ToList();
        }


    }
}