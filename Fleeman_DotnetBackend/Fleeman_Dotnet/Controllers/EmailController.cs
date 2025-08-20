using Fleeman_Dotnet.Dto;
using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Services;
using Microsoft.AspNetCore.Mvc;

namespace Fleeman_Dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost("sendInvoice")]
        public async Task<IActionResult> SendInvoice([FromBody] InvoiceEmailDto request)
        {
            await _emailService.sendInvoice(request);
            return Ok(new { message = "Invoice sent successfully!" });
        }
    }
}