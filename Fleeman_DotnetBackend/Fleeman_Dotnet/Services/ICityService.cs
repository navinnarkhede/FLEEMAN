using Fleeman_Dotnet.DTOs;
using Fleeman_Dotnet.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Service
{
    public interface ICityService
    {
        Task<List<CityDTO>> GetCitiesByStateAsync(int state_id);
        

    }
}
