using System.Collections.Generic;

namespace Fleeman_Dotnet.Dto
{
    public class InvoiceEmailDto
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? BookingId { get; set; }
        public string? PickupDate { get; set; }
        public string? ReturnDate { get; set; }
        public string? CarType { get; set; }
        public double? DailyRate { get; set; }
        public double? TotalAmount { get; set; }
        public List<AddOnDto>? Addons { get; set; }
    }

    public class AddOnDto
    {
        public string? AddOnName { get; set; }
        public double? AddOnDailyRate { get; set; }
    }
}