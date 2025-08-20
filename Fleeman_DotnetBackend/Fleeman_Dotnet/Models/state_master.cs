using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("state_master")]
public partial class state_master
{
    [Key]
    [JsonPropertyName("stateId")]
    public int state_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("stateName")]
    public string? state_name { get; set; }

    [InverseProperty("state")]
    public virtual ICollection<airport_master> airport_masters { get; set; } = new List<airport_master>();

    [InverseProperty("state")]
    public virtual ICollection<city_master> city_masters { get; set; } = new List<city_master>();

    [InverseProperty("state")]
    public virtual ICollection<hub_master> hub_masters { get; set; } = new List<hub_master>();
}
