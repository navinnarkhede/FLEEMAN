using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("invoice_detail_table")]
[Index("addon_id", Name = "FKdxr8d4h98iq24g5944vho0txs")]
[Index("invoice_id", Name = "FKjij1hnrk7hmdm8oq5yguqo8o9")]
public partial class invoice_detail_table
{
    [Key]
    [JsonPropertyName("invdtlId")]
    public long invdtl_id { get; set; }

    [JsonPropertyName("addOnAmt")]
    public double? addon_amt { get; set; }

    public int? addon_id { get; set; }

    public long? invoice_id { get; set; }

    [ForeignKey("addon_id")]
    [InverseProperty("invoice_detail_tables")]
    public virtual add_on_master? addon { get; set; }

    [ForeignKey("invoice_id")]
    [InverseProperty("invoice_detail_tables")]
    public virtual invoice_header_table? invoice { get; set; }
}
