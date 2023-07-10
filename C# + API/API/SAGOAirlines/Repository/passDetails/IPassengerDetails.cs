using SAGOAirlines.Models;

namespace SAGOAirlines.Repository.passDetails
{
    public interface IPassengerDetails
    {
        Task<List<PassengerDetail>> GetPassengerDetails();

        Task<PassengerDetail>? GetPassengerDetail(int id);
        Task<PassengerDetail> PutPassengerDetail(int id, PassengerDetail passengerDetail);
        Task<PassengerDetail> PostPassengerDetail(PassengerDetail passengerDetail);
        Task<string> DeletePassengerDetail(int id);
    }
}
