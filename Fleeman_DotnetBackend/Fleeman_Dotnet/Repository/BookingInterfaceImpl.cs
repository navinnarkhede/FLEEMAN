using Fleeman_Dotnet.Repository;
using Microsoft.Data.SqlClient;
using Fleeman_Dotnet.DTO;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;

using Fleeman_Dotnet.Dto;
using MySql.Data.MySqlClient;


namespace Fleeman_Dotnet.Repository;
public class BookingInterfaceImpl : BookingInterface
{
    public readonly fleet_projectContext _context;

    public BookingInterfaceImpl(fleet_projectContext context)
    {
        _context = context;
    }

    public async Task<List<ReturnCarMasterDetailsFromBooking>> GetDetailsForBooking(string bookcar)
    {
        string query = @"
            SELECT 
                c.car_id,
                c.car_name AS CarName, 
                c.status AS Status,  
                CAST(c.is_available AS UNSIGNED) AS IsAvailable, 
                c.mileage AS Mileage,  
                COALESCE(b.booking_id, 'Not Booked') AS BookingId,  
                c.number_plate AS NumberPlate,  
                ct.cartype_name AS CarTypeName,  
                CAST(ct.daily_rate AS DECIMAL(10, 2)) AS DailyRate,  
                CAST(ct.weekly_rate AS DECIMAL(10, 2)) AS WeeklyRate,  
                CAST(ct.monthly_rate AS DECIMAL(10, 2)) AS MonthlyRate  
            FROM car_master c  
            LEFT JOIN booking_header_table b ON c.car_id = b.car_id  
            INNER JOIN car_type_master ct ON c.cartype_id = ct.cartype_id  
            WHERE ct.cartype_name = @Bookcar
            ORDER BY c.car_id ASC  
            LIMIT 1;";

        var bookcarParam = new MySqlParameter("@Bookcar", bookcar);

        var result = await _context.Database
         .SqlQueryRaw<ReturnCarMasterDetailsFromBooking>(query, new[] { new MySqlParameter("@Bookcar", bookcar) })
         .ToListAsync();

        return result;
    }



}


