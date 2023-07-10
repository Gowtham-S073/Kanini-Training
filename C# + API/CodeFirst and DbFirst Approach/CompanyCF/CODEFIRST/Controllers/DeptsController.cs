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
    public class DeptsController : ControllerBase
    {
        private readonly IRepository _repository;

        public DeptsController(IRepository repository)
        {
            _repository = repository;
        }

        // GET: api/Depts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Dept>>> GDepts1()
        {
          return await _repository.GetDepts();
        }
        
        // GET: api/Depts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Dept?>> GDept0(int id)

        {
            var dept = await _repository.GetDept(id);

            if (dept == null)
            {
                return NotFound("not matching");
            }

            return Ok(dept);

        }
        
        // PUT: api/Depts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Dept?>>> PDept0(int id, Dept dept)
        {
            var deptid = await _repository.PutDept(id, dept);

            if (deptid == null)
            {
                return NotFound("not matching");
            }

            return Ok(deptid);
        }
        
        // POST: api/Depts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Dept>> PODept0(Dept dept)
        {
            var updtdept = await _repository.PostDept(dept);
            if (updtdept == null)
            {
                return NotFound("not matching");
            }

            return Ok(updtdept);
        }

        // DELETE: api/Depts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Dept>> DDept0(int id)
        {
            var deledeptid = await _repository.DeleteDept(id);

            if (deledeptid == null)
            {
                return NotFound("not matching");
            }

            return Ok(deledeptid);
        }


    }
}
