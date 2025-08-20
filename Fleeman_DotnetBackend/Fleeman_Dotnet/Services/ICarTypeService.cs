using System.Collections.Generic;
using System.Threading.Tasks;
using Fleeman_Dotnet.DTO;

namespace Fleeman_Dotnet.Services
{
    public interface ICarTypeService
    {
        Task<IEnumerable<CarTypeDTO>> GetCarTypesByHubAsync(int hubId);

        // New method to get all car types
        Task<IEnumerable<CarTypeDTO>> GetAllCarTypesAsync();
    }
}
