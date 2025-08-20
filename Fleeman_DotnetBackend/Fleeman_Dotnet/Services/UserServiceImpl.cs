using Fleeman_Dotnet.Dto;
using Fleeman_Dotnet.Models;
using Fleeman_Dotnet.Repository;
using Fleeman_Dotnet.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services.Impl
{
    public class UserService : IUserService
    {
        private readonly fleet_projectContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserService(fleet_projectContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<user?> AddUser(UserDto userDto)
        {
            if (await _context.users.AnyAsync(u => u.username == userDto.username))
            {
                return null; // Username exists
            }

            var user = new user
            {
                username = userDto.username,
                email = userDto.email,
                password = BCrypt.Net.BCrypt.HashPassword(userDto.password ?? "")
            };

            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<user?> GetUserByUsernameAndPassword(string username, string password)
        {
            var user = await _context.users.SingleOrDefaultAsync(u => u.username == username);
            if (user == null || !BCrypt.Net.BCrypt.Verify(password, user.password))
            {
                return null;
            }
            return user;
        }

        public async Task<UserDto?> GetUserProfileAsync()
        {
            var userIdString = _httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
            if (!int.TryParse(userIdString, out int userId))
            {
                return null;
            }

            var user = await _context.users.FindAsync(userId);
            if (user == null)
            {
                return null;
            }

            return new UserDto
            {
                username = user.username,
                email = user.email
            };
        }
    }
}
