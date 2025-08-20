using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace Fleeman_Dotnet.Models;

[Table("customer_master")]
[Index("email", Name = "UKsnf65l86t4b0xj6v0f9nymegs", IsUnique = true)]
public partial class customer_master
{
    [Key]
    [JsonPropertyName("custId")]
    public int cust_id { get; set; }

    [StringLength(255)]
    [JsonPropertyName("addressLine1")]
    public string? address_line1 { get; set; }

    [StringLength(255)]
    [JsonPropertyName("addressLine2")]
    public string? address_line2 { get; set; }

    [StringLength(255)]
    public string? city { get; set; }

    [StringLength(255)]
    [JsonPropertyName("creditCardNumber")]
    public string? credit_card_number { get; set; }

    [StringLength(255)]
    [JsonPropertyName("creditCardType")]
    public string? credit_card_type { get; set; }

    [JsonPropertyName("dateOfBirth")]
    public DateOnly? date_of_birth { get; set; }

    [StringLength(255)]
    [JsonPropertyName("drivingLicenseNumber")]
    public string? driving_license_number { get; set; }

    public string? email { get; set; }

    [StringLength(255)]
    [JsonPropertyName("firstName")]
    public string? first_name { get; set; }

    [StringLength(255)]
    [JsonPropertyName("idpNumber")]
    public string? idp_number { get; set; }

    [StringLength(255)]
    [JsonPropertyName("issuedByDl")]
    public string? issued_bydl { get; set; }

    [StringLength(255)]
    [JsonPropertyName("lastName")]
    public string? last_name { get; set; }

    [StringLength(255)]
    [JsonPropertyName("mobileNumber")]
    public string? mobile_number { get; set; }

    [JsonPropertyName("passportIssueDate")]
    public DateOnly? passport_issue_date { get; set; }

    [StringLength(255)]
    [JsonPropertyName("passportIssuedBy")]
    public string? passport_issued_by { get; set; }

    [StringLength(255)]
    [JsonPropertyName("passportNumber")]
    public string? passport_number { get; set; }

    [JsonPropertyName("passportValidFrom")]
    public DateOnly? passport_valid_from { get; set; }

    [JsonPropertyName("passportValidThrough")]
    public DateOnly? passport_valid_through { get; set; }

    [StringLength(255)]
    [JsonPropertyName("phoneNumber")]
    public string? phone_number { get; set; }

    [StringLength(255)]
    public string? pincode { get; set; }

    [JsonPropertyName("validThroughDl")]
    public DateOnly? valid_throughdl { get; set; }

    [InverseProperty("cust")]
    public virtual ICollection<booking_header_table> booking_header_tables { get; set; } = new List<booking_header_table>();

    [InverseProperty("cust")]
    public virtual ICollection<invoice_header_table> invoice_header_tables { get; set; } = new List<invoice_header_table>();
}
