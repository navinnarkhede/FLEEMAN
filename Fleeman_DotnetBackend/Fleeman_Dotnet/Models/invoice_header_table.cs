using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("invoice_header_table")]
[Index("booking_id", Name = "FK5dvc2a779phnc8cjjxx94swb5")]
[Index("cust_id", Name = "FKskcvkb6nr6713a2rjgy027a97")]
[Index("car_id", Name = "FKt256nitu82j1d1ryxv2h7mx4r")]
public partial class invoice_header_table
{
    [Key]
    [JsonPropertyName("invoiceId")]
    public long invoice_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("customerDetails")]
    public string? customer_details { get; set; }

    
    public DateOnly? date { get; set; }

    [JsonPropertyName("handoverDate")]
    public DateOnly? handover_date { get; set; }

    [StringLength(255)]
    public string? rate { get; set; }

    [JsonPropertyName("rentalAmt")]
    public double? rental_amt { get; set; }

    [JsonPropertyName("returnDate")]
    public DateOnly? return_date { get; set; }

    [JsonPropertyName("totalAddOnAmt")]
    public double? total_addon_amt { get; set; }

    [JsonPropertyName("totalAmt")]
    public double? total_amt { get; set; }

    public long? booking_id { get; set; }

    public int? car_id { get; set; }

    public int? cust_id { get; set; }

    [ForeignKey("booking_id")]
    [InverseProperty("invoice_header_tables")]
    public virtual booking_header_table? booking { get; set; }

    [ForeignKey("car_id")]
    [InverseProperty("invoice_header_tables")]
    public virtual car_master? car { get; set; }

    [ForeignKey("cust_id")]
    [InverseProperty("invoice_header_tables")]
    public virtual customer_master? cust { get; set; }

    [InverseProperty("invoice")]
    public virtual ICollection<invoice_detail_table> invoice_detail_tables { get; set; } = new List<invoice_detail_table>();
}
