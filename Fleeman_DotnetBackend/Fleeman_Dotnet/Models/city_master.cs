using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("city_master")]
[Index("state_id", Name = "FKfxtjuwt9iqx9n7xl6f8wl6uu4")]
public partial class city_master
{
    [Key]
    [JsonPropertyName("cityId")]
    public int city_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("cityName")]
    public string? city_name { get; set; }

    public int? state_id { get; set; }

    [InverseProperty("city")]
    public virtual ICollection<airport_master> airport_masters { get; set; } = new List<airport_master>();

    [InverseProperty("city")]
    public virtual ICollection<hub_master> hub_masters { get; set; } = new List<hub_master>();

    [ForeignKey("state_id")]
    [InverseProperty("city_masters")]
    public virtual state_master? state { get; set; }
}
