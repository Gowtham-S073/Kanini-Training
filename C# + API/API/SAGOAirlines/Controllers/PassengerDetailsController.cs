using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SAGOAirlines.Models;
using SAGOAirlines.Repository.passDetails;

namespace SAGOAirlines.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassengerDetailsController : ControllerBase
    {
        private readonly IPassengerDetails _context;

        public PassengerDetailsController(IPassengerDetails context)
        {
            _context = context;
        }

        // GET: api/PassengerDetails
        [HttpGet]
        public async Task<List<PassengerDetail>> GetPassengerDetails()
        {
          
            return await _context.GetPassengerDetails();
        }

        // GET: api/PassengerDetails/5
        [HttpGet("{id}")]
        public async Task<PassengerDetail>? GetPassengerDetail(int id)
        {
            return await _context.GetPassengerDetail(id);
        }

        // PUT: api/PassengerDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<PassengerDetail> PutPassengerDetail(int id, PassengerDetail passengerDetail)
        {
            

            return await _context.PutPassengerDetail(id,passengerDetail);
        }

        // POST: api/PassengerDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<PassengerDetail> PostPassengerDetail(PassengerDetail passengerDetail)
         {

            return await _context.PostPassengerDetail(passengerDetail);
        }

        // DELETE: api/PassengerDetails/5
        [HttpDelete("{id}")]
        public async Task<string> DeletePassengerDetail(int id)
        {
            return await _context.DeletePassengerDetail(id);
        }

       
    }
}
