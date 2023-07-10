using SAGOAirlines.Models;

namespace SAGOAirlines.Repository.booking
{
    public interface IFlightbook
    {
        Task<List<FlightBooking>> GetFlightBookings();

        Task<FlightBooking>? GetFlightBooking(int id);
        Task<FlightBooking> PutFlightBooking(int id, FlightBooking flightBooking);
        Task<FlightBooking> PostFlightBooking(FlightBooking flightBooking);
        Task<string> DeleteFlightBooking(int id);
    }
}
