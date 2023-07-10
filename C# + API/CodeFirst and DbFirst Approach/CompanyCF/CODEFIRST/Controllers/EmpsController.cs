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
    public class EmpsController : ControllerBase
    {
        private readonly IEmprepo _repository;

        public EmpsController(IEmprepo repository)
        {
            _repository = repository;
        }

        // GET: api/Emps
        [HttpGet]
        public async Task<List<Emp>> GEmps1()
        {
            return await _repository.GEmps1();
        }

        // GET: api/Emps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Emp?>> GEmp0(int id)

        {

            var emp = await _repository.GEmp0(id);

            if (emp == null)
            {
                return NotFound("not matching");
            }

            return Ok(emp);
        }

        // PUT: api/Emps/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Emp>>> PEmp0(int id, Emp emps)
        {
            var emp = await _repository.PEmp0(id, emps);

            if (emp == null)
            {
                return NotFound("not matching");
            }

            return Ok(emp);
        }

        // POST: api/Emps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Emp>> POEmp0(Emp emps)
        {
            var emp = await _repository.POEmp0(emps);

            if (emp == null)
            {
                return NotFound("not matching");
            }

            return Ok(emp);
        }

        // DELETE: api/Emps/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Emp>> DEmp0(int id)
        {
            var emp = await _repository.DEmp0(id);

            if (emp == null)
            {
                return NotFound("not matching");
            }
            return Ok(emp);
        }
    }
}
