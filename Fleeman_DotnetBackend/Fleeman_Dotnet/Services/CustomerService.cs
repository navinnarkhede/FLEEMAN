using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Repository;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly fleet_projectContext _context;

        public CustomerService(fleet_projectContext context)
        {
            _context = context;
        }

        public async Task<customer_master> AddCustomerAsync(customer_master customer)
        {
            var existingCustomer = await _context.customer_masters
                .FirstOrDefaultAsync(c => c.email == customer.email);
            if (existingCustomer != null)
            {
                return null;
            }

            await _context.customer_masters.AddAsync(customer);
            await _context.SaveChangesAsync();
            return customer;
        }

        public async Task<customer_master> GetCustomerByEmail(string email)
        {
            return await _context.customer_masters.FirstOrDefaultAsync(c => c.email == email);
        }
    }
}