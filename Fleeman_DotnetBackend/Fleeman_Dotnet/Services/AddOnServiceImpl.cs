using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Repository;
using Fleeman_Dotnet.Services;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services.Impl
{
    /// <summary>
    /// Implements the business logic for managing add-ons.
    /// </summary>
    public class AddOnServiceImpl : IAddOnService
    {
        private readonly fleet_projectContext _context;

        public AddOnServiceImpl(fleet_projectContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<add_on_master>> GetAllAddOnsAsync()
        {
            // FIX: Changed to use the correct property 'add_on_masters'
            return await _context.add_on_masters.ToListAsync();
        }

        public async Task<add_on_master?> GetAddOnByIdAsync(int id)
        {
            // FIX: Changed to use the correct property 'add_on_masters'
            return await _context.add_on_masters.FindAsync(id);
        }

        public async Task<add_on_master> CreateAddOnAsync(add_on_master addOn)
        {
            // FIX: Changed to use the correct property 'add_on_masters'
            _context.add_on_masters.Add(addOn);
            await _context.SaveChangesAsync();
            return addOn;
        }

        public async Task<bool> UpdateAddOnAsync(int id, add_on_master addOn)
        {
            if (id != addOn.add_on_id)
            {
                return false; // ID mismatch
            }

            // FIX: Changed to use the correct property 'add_on_masters'
            var existingAddOn = await _context.add_on_masters.FindAsync(id);
            if (existingAddOn == null)
            {
                return false; // Not found
            }

            _context.Entry(existingAddOn).CurrentValues.SetValues(addOn);
            _context.Entry(existingAddOn).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await AddOnExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }
            return true;
        }

        public async Task<bool> DeleteAddOnAsync(int id)
        {
            // FIX: Changed to use the correct property 'add_on_masters'
            var addOnToDelete = await _context.add_on_masters.FindAsync(id);
            if (addOnToDelete == null)
            {
                return false; // Not found
            }

            // FIX: Changed to use the correct property 'add_on_masters'
            _context.add_on_masters.Remove(addOnToDelete);
            await _context.SaveChangesAsync();
            return true;
        }

        private async Task<bool> AddOnExists(int id)
        {
            // FIX: Changed to use the correct property 'add_on_masters'
            return await _context.add_on_masters.AnyAsync(e => e.add_on_id == id);
        }
    }
}