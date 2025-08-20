using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("add_on_master")]
public partial class add_on_master
{
    [Key]
    [JsonPropertyName("addOnId")]
    public int add_on_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("addOnName")]
    public string? add_on_name { get; set; }

    [JsonPropertyName("addonDailyRate")]
    public double? add_on_daily_rate { get; set; }

    [MaxLength(6)]
    [JsonPropertyName("rateValidUntil")]
    public DateTime? rate_valid_until { get; set; }

    [InverseProperty("addon")]
    public virtual ICollection<booking_detail_table> booking_detail_tables { get; set; } = new List<booking_detail_table>();

    [InverseProperty("addon")]
    public virtual ICollection<invoice_detail_table> invoice_detail_tables { get; set; } = new List<invoice_detail_table>();
}
