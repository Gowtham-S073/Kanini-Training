using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CdefrstEfApi.Models;
using CdefrstEfApi.Repository;

namespace CdefrstEfApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpDetailsController : ControllerBase
    {
        private readonly IEmpdet _context;

        public EmpDetailsController(IEmpdet context)
        {
            _context = context;
        }

        // GET: api/Emps
        [HttpGet]
        public async Task<List<EmpDetails>> GEmpDetails1()
        {
            return await _context.GEmpDetails1();
        }

        // GET: api/Emps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmpDetails?>> GEmpDetails0(int id)

        {

            var emp = await _context.GEmpDetails0(id);

            if (emp == null)
            {
                return NotFound("not matching");
            }

            return Ok(emp);
        }

        // PUT: api/Emps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<List<EmpDetails>>> PEmpDetails0(int id, EmpDetails empDetails)
        {
            var emp = await _context.PEmpDetails0(id, empDetails);

            if (emp == null)
            {
                return NotFound("not matching");
            }

            return Ok(emp);
        }

        // POST: api/Emps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmpDetails>> POEmpDetails0(EmpDetails empDetails)
        {
            var emp = await _context.POEmpDetails0(empDetails);

            if (emp == null)
            {
                return NotFound("not matching");
            }

            return Ok(emp);
        }

        // DELETE: api/Emps/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmpDetails>> DEmpDetails0(int id)
        {
            var emp = await _context.DEmpDetails0(id);

            if (emp == null)
            {
                return NotFound("not matching");
            }
            return Ok(emp);
        }
    }
}
