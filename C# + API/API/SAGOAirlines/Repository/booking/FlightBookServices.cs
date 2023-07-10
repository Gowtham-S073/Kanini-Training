using SAGOAirlines.Models;
using Microsoft.EntityFrameworkCore;


namespace SAGOAirlines.Repository.booking
{
    public class FlightBookServices : IFlightbook
    {
        private readonly FlightNewContext _flightNewContext;

        public FlightBookServices(FlightNewContext flightNewContext)
        {
            _flightNewContext = flightNewContext;
        }

        public async Task<List<FlightBooking>> GetFlightBookings()
        {
            var FlightBooking = await _flightNewContext.FlightBookings.ToListAsync();
            return FlightBooking;
        }
        public async Task<FlightBooking>? GetFlightBooking(int id)
        {
            var flightbook = await _flightNewContext.FlightBookings.FindAsync(id);
            if (flightbook is null)
            {
                return null;    
            }
            return flightbook;
        }

        public async Task<FlightBooking> PutFlightBooking(int id, FlightBooking flightBooking)

        {
            var FB = await _flightNewContext.FlightBookings.FindAsync(id);
            FB.FlightNo = flightBooking.FlightNo;
            await _flightNewContext.SaveChangesAsync();
            return  FB;

        }
        public async Task<FlightBooking> PostFlightBooking(FlightBooking flightBooking)
        {
             _flightNewContext.FlightBookings.Add(flightBooking);
             _flightNewContext.SaveChanges();
            return  flightBooking;
        }

        public async Task<string> DeleteFlightBooking(int id)
        {
            var flightBooking = await _flightNewContext.FlightBookings.FindAsync(id);
            _flightNewContext.Remove(flightBooking);
            _flightNewContext.SaveChanges();

            return "Deleted successfully";
        }
    }
}

