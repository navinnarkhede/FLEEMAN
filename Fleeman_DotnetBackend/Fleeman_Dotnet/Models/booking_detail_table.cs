using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("booking_detail_table")]
[Index("booking_id", Name = "FK8lhwsgs4ew5tdogoed7fpif4a")]
[Index("addon_id", Name = "FKl1eiva9sie32vxofv6l7qj0g8")]
public partial class booking_detail_table
{
    [Key]
    [JsonPropertyName("bookingDetailId")]
    public long booking_detail_id { get; set; }

    [JsonPropertyName("addonRate")]
    public double? addon_rate { get; set; }

    public int? addon_id { get; set; }

    public long? booking_id { get; set; }

    [ForeignKey("addon_id")]
    [InverseProperty("booking_detail_tables")]
    public virtual add_on_master? addon { get; set; }

    [ForeignKey("booking_id")]
    [InverseProperty("booking_detail_tables")]
    public virtual booking_header_table? booking { get; set; }
}
