using Fleeman_Dotnet.Dto;
using Fleeman_Dotnet.Repository;

namespace Fleeman_Dotnet.Services
{
    public class BookingServices : IBookingService
    {
        public readonly BookingInterface _bookingInterfaceImpl;

        public BookingServices(BookingInterface bookingServiceImpl)
        {
            _bookingInterfaceImpl= bookingServiceImpl;
        }



        public async Task<List<ReturnCarMasterDetailsFromBooking>> FetchCarDetailsForBooking(string bookcar)
        {
           
            return await _bookingInterfaceImpl.GetDetailsForBooking(bookcar);
        }
    }
}
