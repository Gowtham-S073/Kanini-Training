using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SAGOAirlines.Models;
using SAGOAirlines.Repository.seat_all;

namespace SAGOAirlines.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SeatAllocationsController : ControllerBase
    {
        private readonly ISeatAllocation _context;

        public SeatAllocationsController(ISeatAllocation context)
        {
            _context = context;
        }

        // GET: api/SeatAllocations
        [HttpGet]
        public async Task<List<SeatAllocation>> GetSeatAllocations()
        {
         
            return await _context.GetSeatAllocations();
        }

        // GET: api/SeatAllocations/5
        [HttpGet("{id}")]
        public async Task<SeatAllocation>? GetSeatAllocation(int id)
        {

            return await _context.GetSeatAllocation(id);
        }

        // PUT: api/SeatAllocations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<SeatAllocation> PutSeatAllocation(int id, SeatAllocation seatAllocation)
        {
            return await _context.PutSeatAllocation(id, seatAllocation);
        }

        // POST: api/SeatAllocations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<SeatAllocation> PostSeatAllocation(SeatAllocation seatAllocation)
        {
          

            return await _context.PostSeatAllocation(seatAllocation);
        }

        // DELETE: api/SeatAllocations/5
        [HttpDelete("{id}")]
        public async Task<string> DeleteSeatAllocation(int id)
        {
            return await _context.DeleteSeatAllocation(id);
        }

   
    }
}
