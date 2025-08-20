namespace Fleeman_Dotnet.Dto
{
    public class ReturnCarMasterDetailsFromBooking
    {
        public string CarName { get; set; }
        public string Status { get; set; }
        public bool IsAvailable { get; set; }
        public double Mileage { get; set; }
        public long BookingId { get; set; }
        public string NumberPlate { get; set; }
        public string CarTypeName { get; set; }
        public decimal DailyRate { get; set; }
        public decimal WeeklyRate { get; set; }
        public decimal MonthlyRate { get; set; }
    }
}
