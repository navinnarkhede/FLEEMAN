using Fleeman_Dotnet.Dto;
using Fleeman_Dotnet.DTOs;
using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Service
{
    public class CityService : ICityService
    {
        private readonly fleet_projectContext _context;

        public CityService(fleet_projectContext context)
        {
            _context = context;
        }

        public async Task<List<CityDTO>> GetCitiesByStateAsync(int state_id)
        {
            return await _context.city_masters.Select(CityDTO => new CityDTO
            {
                cityId = CityDTO.city_id,
                cityName = CityDTO.city_name,
                state = new StateDto
                {
                    stateId = CityDTO.state.state_id,
                    stateName = CityDTO.state.state_name
                }
            }).Where(CityDTO => CityDTO.state.stateId == state_id).ToListAsync();
        }

        

       
    }
}