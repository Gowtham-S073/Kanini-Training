using CdefrstEfApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace CdefrstEfApi.Repository
{
    public interface IRepository
    {
        Task<ActionResult<IEnumerable<Dept>>> GDepts1();
        Task<Dept?> GDept0(int id);
        Task<Dept> PDept0(int id, Dept dept);
        Task<Dept> PODept0(Dept dept);
        Task<string> DDept0(int id);
        


    }
}
