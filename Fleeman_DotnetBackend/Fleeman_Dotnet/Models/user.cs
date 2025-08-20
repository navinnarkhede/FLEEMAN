using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("user")]
[Index("password", Name = "UKkiqfjabx9puw3p1eg7kily8kg", IsUnique = true)]
[Index("email", Name = "UKob8kqyqqgmefl0aco34akdtpe", IsUnique = true)]
[Index("username", Name = "UKsb8bbouer5wak8vyiiy4pf2bx", IsUnique = true)]
public partial class user
{
    [Key]
    [JsonPropertyName("Id")]
    public int id { get; set; }

    public string? email { get; set; }

    public string? password { get; set; }

    public string? username { get; set; }
}
