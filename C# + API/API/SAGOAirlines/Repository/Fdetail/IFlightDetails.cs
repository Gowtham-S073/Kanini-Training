using SAGOAirlines.Models;

namespace SAGOAirlines.Repository.Fdetail
{
    public interface IFlightDetails
    {
        Task<List<FlightDetail>> GetFlightDetails();

        Task<FlightDetail> GetFlightDetail(string id);
        Task<FlightDetail> PutFlightDetail(string id, FlightDetail flightDetail);
        Task<FlightDetail> PostFlightDetail(FlightDetail flightDetail);
        Task<string> DeleteFlightDetail(string id);
    }
}
