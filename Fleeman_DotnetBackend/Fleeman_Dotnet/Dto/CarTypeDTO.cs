namespace Fleeman_Dotnet.DTO
{
    /// <summary>
    /// Data Transfer Object for Car Types.
    /// </summary>
    public class CarTypeDTO
    {
        public long CarTypeId { get; set; }
        public string? CarTypeName { get; set; }
        public double? DailyRate { get; set; }
        public double? WeeklyRate { get; set; }
        public double? MonthlyRate { get; set; }
        public string? ImagePath { get; set; } // Added image path
    }
}
