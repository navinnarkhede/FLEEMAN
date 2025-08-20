using System.Collections.Generic;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IHubService
    {
        Task<List<HubDto>> GetHubsByCityAndStateAsync(string cityName, string stateName);

    }

}
