using Fleeman_Dotnet.Dto;
using Fleeman_Dotnet.Models;
using Microsoft.Extensions.Configuration;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task sendInvoice(InvoiceEmailDto invoiceDto)
        {
            var senderEmail = _configuration["EmailSettings:SenderEmail"];
            var senderPassword = _configuration["EmailSettings:SenderPassword"];
            var smtpServer = _configuration["EmailSettings:SmtpServer"];
            var port = int.Parse(_configuration["EmailSettings:Port"]);
            var enableSsl = bool.Parse(_configuration["EmailSettings:EnableSSL"]);

            var client = new SmtpClient(smtpServer)
            {
                Port = port,
                Credentials = new NetworkCredential(senderEmail, senderPassword),
                EnableSsl = enableSsl
            };

            var mailMessage = new MailMessage
            {
                From = new MailAddress(senderEmail, "Fleeman Car Rentals"),
                Subject = $"Invoice for Booking #{invoiceDto.BookingId}",
                IsBodyHtml = true,
                Body = BuildInvoiceHtml(invoiceDto)
            };

            mailMessage.To.Add(invoiceDto.Email);

            await client.SendMailAsync(mailMessage);
        }

        private string BuildInvoiceHtml(InvoiceEmailDto invoice)
        {
            var htmlBuilder = new StringBuilder();
            htmlBuilder.Append("<h1>Fleeman Car Rentals - Invoice</h1>");
            htmlBuilder.Append($"<p>Dear {invoice.FirstName} {invoice.LastName},</p>");
            htmlBuilder.Append("<p>Thank you for your booking! Here is a summary of your rental invoice:</p>");

            htmlBuilder.Append("<table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>");
            htmlBuilder.Append("<tr><td style='border: 1px solid #ddd; padding: 8px; font-weight: bold;'>Booking ID:</td><td style='border: 1px solid #ddd; padding: 8px;'>" + invoice.BookingId + "</td></tr>");
            htmlBuilder.Append("<tr><td style='border: 1px solid #ddd; padding: 8px; font-weight: bold;'>Car Type:</td><td style='border: 1px solid #ddd; padding: 8px;'>" + invoice.CarType + "</td></tr>");
            htmlBuilder.Append("<tr><td style='border: 1px solid #ddd; padding: 8px; font-weight: bold;'>Pickup Date:</td><td style='border: 1px solid #ddd; padding: 8px;'>" + invoice.PickupDate + "</td></tr>");
            htmlBuilder.Append("<tr><td style='border: 1px solid #ddd; padding: 8px; font-weight: bold;'>Return Date:</td><td style='border: 1px solid #ddd; padding: 8px;'>" + invoice.ReturnDate + "</td></tr>");
            htmlBuilder.Append("</table>");

            // Add Add-ons section
            if (invoice.Addons != null && invoice.Addons.Count > 0)
            {
                htmlBuilder.Append("<h3 style='margin-top: 30px;'>Add-ons</h3>");
                htmlBuilder.Append("<ul style='list-style: none; padding: 0;'>");
                foreach (var addon in invoice.Addons)
                {
                    htmlBuilder.Append($"<li style='padding: 5px 0;'>- {addon.AddOnName}: Rs.{addon.AddOnDailyRate}</li>");
                }
                htmlBuilder.Append("</ul>");
            }

            // Add Total
            htmlBuilder.Append("<h3 style='margin-top: 30px;'>Total Amount: <span style='color: #007bff;'>Rs." + invoice.TotalAmount + "</span></h3>");
            htmlBuilder.Append("<p>Thank you for choosing Fleeman Car Rentals!</p>");

            return htmlBuilder.ToString();
        }
    }
}