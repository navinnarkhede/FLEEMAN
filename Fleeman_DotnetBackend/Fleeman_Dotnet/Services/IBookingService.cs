using Fleeman_Dotnet.Dto;

namespace Fleeman_Dotnet.Services
{
    public interface IBookingService
    {
        Task<List<ReturnCarMasterDetailsFromBooking>> FetchCarDetailsForBooking(string bookcar);
    }
}
