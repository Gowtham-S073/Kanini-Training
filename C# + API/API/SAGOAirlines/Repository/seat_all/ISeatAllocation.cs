using SAGOAirlines.Models;

namespace SAGOAirlines.Repository.seat_all
{
    public interface ISeatAllocation
    {
        Task<List<SeatAllocation>> GetSeatAllocations();

        Task<SeatAllocation>? GetSeatAllocation(int id);
        Task<SeatAllocation> PutSeatAllocation(int id, SeatAllocation seatAllocation);
        Task<SeatAllocation> PostSeatAllocation(SeatAllocation seatAllocation);
        Task<string> DeleteSeatAllocation(int id);
    }
}
