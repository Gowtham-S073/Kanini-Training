using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SAGOAirlines.Models;
using SAGOAirlines.Repository.booking;

namespace SAGOAirlines.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightBookingsController : ControllerBase
    {
        private readonly IFlightbook _context;

        public FlightBookingsController(IFlightbook context)
        {
            _context = context;
        }

        // GET: api/FlightBookings
        [HttpGet]
        public async Task<IEnumerable<FlightBooking>> GetFlightBookings()
        {
          return await _context.GetFlightBookings();
        }

        // GET: api/FlightBookings/5
        [HttpGet("{id}")]
        public async Task<FlightBooking>? GetFlightBooking(int id)
        {
            return await _context.GetFlightBooking(id);
        }

        // PUT: api/FlightBookings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize]
        public async Task<FlightBooking> PutFlightBooking(int id, FlightBooking flightBooking)
        {
           

            return await _context.PutFlightBooking(id,flightBooking);
        }

        // POST: api/FlightBookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<FlightBooking> PostFlightBooking(FlightBooking flightBooking)
        {
            return await _context.PostFlightBooking(flightBooking);
        }

        // DELETE: api/FlightBookings/5
        [HttpDelete("{id}")]
        public async Task<string> DeleteFlightBooking(int id)
        {
            return await _context.DeleteFlightBooking(id);
        }

        
    }
}
