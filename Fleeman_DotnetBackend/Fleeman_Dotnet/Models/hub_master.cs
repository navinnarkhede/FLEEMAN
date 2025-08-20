using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("hub_master")]
[Index("city_id", Name = "FK7rdbu34jsqwuoyuound4e830p")]
[Index("state_id", Name = "FKf94kvk79lamurkcyvj8hhop1q")]
[Index("contact_number", Name = "UKq4cka6kuf15mrgsvs05wj1e87", IsUnique = true)]
public partial class hub_master
{
    [Key]
    [JsonPropertyName("hubId")]
    public int hub_id { get; set; }

    [JsonPropertyName("contactNumber")]
    public long? contact_number { get; set; }

    [Column(TypeName = "text")]
    [JsonPropertyName("hubAddressAndDetails")]
    public string? hub_address_and_details { get; set; }

    [StringLength(255)]
    public string? hub_name { get; set; }

    public int? city_id { get; set; }

    public int? state_id { get; set; }

    [InverseProperty("hub")]
    public virtual ICollection<airport_master> airport_masters { get; set; } = new List<airport_master>();

    [InverseProperty("hub")]
    public virtual ICollection<car_master> car_masters { get; set; } = new List<car_master>();

    [ForeignKey("city_id")]
    [InverseProperty("hub_masters")]
    public virtual city_master? city { get; set; }

    [ForeignKey("state_id")]
    [InverseProperty("hub_masters")]
    public virtual state_master? state { get; set; }
}
