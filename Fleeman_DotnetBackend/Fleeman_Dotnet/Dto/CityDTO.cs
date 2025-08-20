using Fleeman_Dotnet.Dto;

namespace Fleeman_Dotnet.DTOs
{
    public class CityDTO
    {
        public int? cityId { get; set; }
        public string cityName { get; set; }
        
        public StateDto state { get; set; }
    }
}
