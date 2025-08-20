using Fleeman_Dotnet.Dto;



namespace Fleeman_Dotnet.Services
{
    public interface IStateService
    {
        Task<List<StateDto>> GetAllStateMasterAsync();
    }
}
