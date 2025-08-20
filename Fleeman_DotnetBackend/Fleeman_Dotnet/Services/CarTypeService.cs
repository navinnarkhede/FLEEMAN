using Fleeman_Dotnet.DTO;
using Fleeman_Dotnet.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services
{
    public class CarTypeService : ICarTypeService
    {
        private readonly fleet_projectContext _context;

        public CarTypeService(fleet_projectContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CarTypeDTO>> GetCarTypesByHubAsync(int hubId)
        {
            var carTypes = await _context.car_type_masters
               .Where(ct => ct.car_masters.Any(c => c.hub_id == hubId))
               .Select(ct => new CarTypeDTO
               {
                   CarTypeId = ct.cartype_id,
                   CarTypeName = ct.cartype_name,
                   DailyRate = ct.daily_rate,
                   WeeklyRate = ct.weekly_rate,
                   MonthlyRate = ct.monthly_rate,
                   ImagePath = ct.image_path
               })
               .Distinct()
               .ToListAsync();

            return carTypes;
        }

        // New method implementation
        public async Task<IEnumerable<CarTypeDTO>> GetAllCarTypesAsync()
        {
            var carTypes = await _context.car_type_masters
               .Select(ct => new CarTypeDTO
               {
                   CarTypeId = ct.cartype_id,
                   CarTypeName = ct.cartype_name,
                   DailyRate = ct.daily_rate,
                   WeeklyRate = ct.weekly_rate,
                   MonthlyRate = ct.monthly_rate,
                   ImagePath = ct.image_path
               })
               .ToListAsync();

            return carTypes;
        }
    }
}
