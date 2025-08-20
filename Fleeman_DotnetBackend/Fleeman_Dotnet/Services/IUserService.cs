using Fleeman_Dotnet.Dto;
using Fleeman_Dotnet.Models;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services
{
    public interface IUserService
    {
        Task<user?> AddUser(UserDto userDto);
        Task<user?> GetUserByUsernameAndPassword(string username, string password);
        Task<UserDto?> GetUserProfileAsync();
    }
}
