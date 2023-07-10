using Microsoft.EntityFrameworkCore;
using SAGOAirlines.Models;

namespace SAGOAirlines.Repository.passDetails
{
    public class PassengerdetailsServices : IPassengerDetails
    {
        private readonly FlightNewContext _flightNewContext;

        public PassengerdetailsServices(FlightNewContext flightNewContext)
        {
            _flightNewContext = flightNewContext;
        }

      public async  Task<List<PassengerDetail>> GetPassengerDetails()
        {
            var PD = await _flightNewContext.PassengerDetails.ToListAsync();
            return PD;
        }
        public async Task<PassengerDetail>? GetPassengerDetail(int id)
        {
            var PD = await _flightNewContext.PassengerDetails.FindAsync(id);
            if (PD is null)
            {
                return null;
            }
            return PD;
        }

        public async Task<PassengerDetail> PutPassengerDetail(int id, PassengerDetail passengerDetail)
        {
            var PD = await _flightNewContext.PassengerDetails.FindAsync(id);
            PD.FlightNo = passengerDetail.FlightNo;
            await _flightNewContext.SaveChangesAsync();
            return PD;

        }
        public async Task<PassengerDetail> PostPassengerDetail(PassengerDetail passengerDetail)
        {
            _flightNewContext.PassengerDetails.Add(passengerDetail);
            _flightNewContext.SaveChanges();
            return passengerDetail;
        }

        public async Task<string> DeletePassengerDetail(int id)
        {
            var PD = await _flightNewContext.PassengerDetails.FindAsync(id);
            _flightNewContext.Remove(PD);
            _flightNewContext.SaveChanges();

            return "Deleted successfully";
        }
    }
}
