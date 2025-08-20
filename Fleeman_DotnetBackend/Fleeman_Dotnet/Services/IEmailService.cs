using Fleeman_Dotnet.Dto;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services
{
    public interface IEmailService
    {
        Task sendInvoice(InvoiceEmailDto invoiceDto);
    }
}