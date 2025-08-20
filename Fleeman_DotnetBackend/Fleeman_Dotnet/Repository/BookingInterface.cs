using Fleeman_Dotnet.Dto;

namespace Fleeman_Dotnet.Repository
{
    public interface BookingInterface
    {
       Task<List<ReturnCarMasterDetailsFromBooking>> GetDetailsForBooking(string bookcar);  
           
    }

}
