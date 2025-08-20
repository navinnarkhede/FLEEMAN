using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("airport_master")]
[Index("hub_id", Name = "FK9q13ys5sara44e3t8iwsbehe7")]
[Index("state_id", Name = "FKgykh73g2t7b9tyhou2eve5ljf")]
[Index("city_id", Name = "FKnacm5228qoxi0egygij94kqje")]
public partial class airport_master
{
    [Key]
    [JsonPropertyName("airportId")]
    public int airport_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("airportCode")]
    public string? airport_code { get; set; }

    [StringLength(255)]
    [JsonPropertyName("airportName")]
    public string? airport_name { get; set; }

    public int? city_id { get; set; }

    public int? hub_id { get; set; }

    public int? state_id { get; set; }

    [ForeignKey("city_id")]
    [InverseProperty("airport_masters")]
    public virtual city_master? city { get; set; }

    [ForeignKey("hub_id")]
    [InverseProperty("airport_masters")]
    public virtual hub_master? hub { get; set; }

    [ForeignKey("state_id")]
    [InverseProperty("airport_masters")]
    public virtual state_master? state { get; set; }
}
