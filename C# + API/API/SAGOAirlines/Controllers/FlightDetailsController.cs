using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SAGOAirlines.Models;
using SAGOAirlines.Repository.Fdetail;

namespace SAGOAirlines.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class FlightDetailsController : ControllerBase
    {
        private readonly IFlightDetails _context;

        public FlightDetailsController(IFlightDetails context)
        {
            _context = context;
        }

        // GET: api/FlightDetails
        [HttpGet]
        public async Task<List<FlightDetail>> GetFlightDetails()
        {
            return await _context.GetFlightDetails();
        }

        // GET: api/FlightDetails/5
        [HttpGet("{id}")]
        public async Task<FlightDetail> GetFlightDetail(string id)
        {
            return await _context.GetFlightDetail(id);
        }

        // PUT: api/FlightDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<FlightDetail> PutFlightDetail(string id, FlightDetail flightDetail)
        {

            return await _context.PutFlightDetail(id,flightDetail);
        }

        // POST: api/FlightDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<FlightDetail> PostFlightDetail(FlightDetail flightDetail)
        {
            return await _context.PostFlightDetail(flightDetail);
        }

        // DELETE: api/FlightDetails/5
        [HttpDelete("{id}")]
        public async Task<string> DeleteFlightDetail(string id)
        {
            return await _context.DeleteFlightDetail(id);
        }

       
    }
}
