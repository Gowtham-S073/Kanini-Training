using Microsoft.EntityFrameworkCore;
using SAGOAirlines.Models;

namespace SAGOAirlines.Repository.seat_all
{
    public class SeatAllocationservices : ISeatAllocation
    {
        private readonly FlightNewContext _flightNewContext;

        public SeatAllocationservices(FlightNewContext flightNewContext)
        {
            _flightNewContext = flightNewContext;
        }

        public async Task<List<SeatAllocation>> GetSeatAllocations()
        {
            var SA = await _flightNewContext.SeatAllocations.ToListAsync();
            return SA;
        }
        public async Task<SeatAllocation>? GetSeatAllocation(int id)
        {
            var SA = await _flightNewContext.SeatAllocations.FindAsync(id);
            if (SA is null)
            {
                return null;
            }
            return SA;
        }

        public async Task<SeatAllocation> PutSeatAllocation(int id, SeatAllocation seatAllocation)

        {
            var SA = await _flightNewContext.SeatAllocations.FindAsync(id);
            SA.FlightNo = seatAllocation.FlightNo;
            await _flightNewContext.SaveChangesAsync();
            return SA;

        }
        public async Task<SeatAllocation> PostSeatAllocation(SeatAllocation seatAllocation)
        {
            _flightNewContext.SeatAllocations.Add(seatAllocation);
            _flightNewContext.SaveChanges();
            return seatAllocation;
        }

        public async Task<string> DeleteSeatAllocation(int id)
        {
            var SA = await _flightNewContext.SeatAllocations.FindAsync(id);
            _flightNewContext.Remove(SA);
            _flightNewContext.SaveChanges();

            return "Deleted successfully";
        }
    }
}
