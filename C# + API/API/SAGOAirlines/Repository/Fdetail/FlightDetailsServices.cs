using Microsoft.EntityFrameworkCore;
using SAGOAirlines.Models;

namespace SAGOAirlines.Repository.Fdetail
{
    public class FlightDetailsServices : IFlightDetails
    {
        private readonly FlightNewContext _flightNewContext;

        public FlightDetailsServices(FlightNewContext flightNewContext)
        {
            _flightNewContext = flightNewContext;
        }

        public async Task<List<FlightDetail>> GetFlightDetails()
        {
            var FD = await _flightNewContext.FlightDetails.ToListAsync();
            return FD;
        }
        public async Task<FlightDetail> GetFlightDetail(string id)
        {
            var FD = await _flightNewContext.FlightDetails.FindAsync(id);
            if (FD is null)
            {
                return null;
            }
            return FD;
        }

        public async Task<FlightDetail> PutFlightDetail(string id, FlightDetail flightDetail)
        {
            var FD = await _flightNewContext.FlightDetails.FindAsync(id);
            FD.FlightNo = flightDetail.FlightNo;
            await _flightNewContext.SaveChangesAsync();
            return FD;

        }
        public async Task<FlightDetail> PostFlightDetail(FlightDetail flightDetail)
        {
            _flightNewContext.FlightDetails.Add(flightDetail);
            _flightNewContext.SaveChanges();
            return flightDetail;
        }

        public async Task<string> DeleteFlightDetail(string id)
        {
            var FD = await _flightNewContext.FlightDetails.FindAsync(id);
            _flightNewContext.Remove(FD);
            _flightNewContext.SaveChanges();
            return "Deleted successfully";
        }

    }
}
