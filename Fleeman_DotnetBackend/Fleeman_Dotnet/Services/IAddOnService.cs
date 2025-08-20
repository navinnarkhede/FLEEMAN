using Fleeman_Dotnet.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Fleeman_Dotnet.Services
{
    /// <summary>
    /// Defines the contract for Add-On related business logic.
    /// </summary>
    public interface IAddOnService
    {
        /// <summary>
        /// Retrieves all add-ons from the database.
        /// </summary>
        /// <returns>A collection of all add-ons.</returns>
        Task<IEnumerable<add_on_master>> GetAllAddOnsAsync();

        /// <summary>
        /// Retrieves a specific add-on by its ID.
        /// </summary>
        /// <param name="id">The ID of the add-on to retrieve.</param>
        /// <returns>The add-on with the specified ID, or null if not found.</returns>
        Task<add_on_master?> GetAddOnByIdAsync(int id);

        /// <summary>
        /// Creates a new add-on.
        /// </summary>
        /// <param name="addOn">The add-on object to create.</param>
        /// <returns>The newly created add-on.</returns>
        Task<add_on_master> CreateAddOnAsync(add_on_master addOn);

        /// <summary>
        /// Updates an existing add-on.
        /// </summary>
        /// <param name="id">The ID of the add-on to update.</param>
        /// <param name="addOn">The updated add-on data.</param>
        /// <returns>A boolean indicating if the update was successful.</returns>
        Task<bool> UpdateAddOnAsync(int id, add_on_master addOn);

        /// <summary>
        /// Deletes an add-on by its ID.
        /// </summary>
        /// <param name="id">The ID of the add-on to delete.</param>
        /// <returns>A boolean indicating if the deletion was successful.</returns>
        Task<bool> DeleteAddOnAsync(int id);
    }
}