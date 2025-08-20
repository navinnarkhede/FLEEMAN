using Fleeman_Dotnet.Models;

namespace Fleeman_Dotnet.Services
{
    public interface IAirportService
    {
        Task<List<object>> GetHubByAirportAsync(string airportCode);
    }
}