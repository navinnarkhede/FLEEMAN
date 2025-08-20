using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("car_master")]
[Index("cartype_id", Name = "FKe7t3ybbd5mnrqomrch1wuyc6m")]
[Index("hub_id", Name = "FKrbd83493vx6lu3vprvkx8qgqh")]
[Index("number_plate", Name = "UKonp0df5km5sg4h2s4w34uc0yn", IsUnique = true)]
public partial class car_master
{
    [Key]
    [JsonPropertyName("carId")]
    public int car_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("Status")]
    public string? status { get; set; }

    [StringLength(255)]
    [JsonPropertyName("carName")]
    public string? car_name { get; set; }

    [Column(TypeName = "enum('N','Y')")]
    [JsonPropertyName("isAvailable")]
    public string? is_available { get; set; }

    [JsonPropertyName("maintenanceDueDate")]
    public DateOnly? maintenance_due_date { get; set; }

    public double? mileage { get; set; }

    [StringLength(50)]
    [JsonPropertyName("numberPlate")]
    public string? number_plate { get; set; }

    public long? cartype_id { get; set; }

    public int? hub_id { get; set; }

    [InverseProperty("car")]
    public virtual ICollection<booking_header_table> booking_header_tables { get; set; } = new List<booking_header_table>();

    [ForeignKey("cartype_id")]
    [InverseProperty("car_masters")]
    public virtual car_type_master? cartype { get; set; }

    [ForeignKey("hub_id")]
    [InverseProperty("car_masters")]
    public virtual hub_master? hub { get; set; }

    [InverseProperty("car")]
    public virtual ICollection<invoice_header_table> invoice_header_tables { get; set; } = new List<invoice_header_table>();
}
