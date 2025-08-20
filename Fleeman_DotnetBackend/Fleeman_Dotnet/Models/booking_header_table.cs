using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("booking_header_table")]
[Index("cust_id", Name = "FKdph943hu15r48ahrnkql3lrbl")]
[Index("car_id", Name = "FKmmkg1viclerruhttx06973w3j")]
[Index("cartype_id", Name = "FKopo340pd5jigmo84cahh57cwo")]
public partial class booking_header_table
{
    [Key]
    [JsonPropertyName("bookingId")]
    public long booking_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("Bookcar")]
    public string? book_car { get; set; }

    [StringLength(255)]
    public string? address { get; set; }

    [JsonPropertyName("bookingDate")]
    public DateOnly? booking_date { get; set; }

    [JsonPropertyName("dailyRate")]
    public double? daily_rate { get; set; }

    [StringLength(255)]
    [JsonPropertyName("emailId")]
    public string? email_id { get; set; }

    [JsonPropertyName("endDate")]
    public DateOnly? end_date { get; set; }

    [StringLength(255)]
    [JsonPropertyName("firstName")]
    public string? first_name { get; set; }

    [StringLength(255)]
    [JsonPropertyName("lastName")]
    public string? last_name { get; set; }

    [JsonPropertyName("monthlyRate")]
    public double? monthly_rate { get; set; }

    [StringLength(255)]
    public string? pin { get; set; }

    [JsonPropertyName("startDate")]
    public DateOnly? start_date { get; set; }

    [StringLength(255)]
    public string? state { get; set; }

    [JsonPropertyName("weeklyRate")]
    public double? weekly_rate { get; set; }

    public int? car_id { get; set; }

    public long? cartype_id { get; set; }

    public int cust_id { get; set; }

    [InverseProperty("booking")]
    public virtual ICollection<booking_detail_table> booking_detail_tables { get; set; } = new List<booking_detail_table>();

    [ForeignKey("car_id")]
    [InverseProperty("booking_header_tables")]
    public virtual car_master? car { get; set; }

    [ForeignKey("cartype_id")]
    [InverseProperty("booking_header_tables")]
    public virtual car_type_master? cartype { get; set; }

    [ForeignKey("cust_id")]
    [InverseProperty("booking_header_tables")]
    public virtual customer_master cust { get; set; } = null!;

    [InverseProperty("booking")]
    public virtual ICollection<invoice_header_table> invoice_header_tables { get; set; } = new List<invoice_header_table>();
}
