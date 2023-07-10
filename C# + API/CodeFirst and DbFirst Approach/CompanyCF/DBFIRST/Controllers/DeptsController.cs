using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DbEfApi.Models;
using DbEfApi.Services.Dept_Services;
using Microsoft.VisualBasic;
using Microsoft.AspNetCore.Http.HttpResults;

namespace DbEfApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeptsController : ControllerBase
    {
        private readonly IDept _context;

        public DeptsController(IDept context)
        {
            _context = context;
        }

        // GET: api/Depts
        [HttpGet]
        public async Task<List<Dept?>> GDept1()
        {
            return await _context.GetDepts();

        }

        // GET: api/Depts/5
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Dept?>> GDept0(int id)

        {
        
            var dept = await _context.GetDept(id);

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
            var deptid = await _context.PutDept(id,dept);

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
          var updtdept = await _context.PostDept(dept);
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
            var deledeptid = await _context.DeleteDept(id);

            if (deledeptid == null)
            {
                return NotFound("not matching");
            }

            return Ok(deledeptid);
        }

        
    }
}
