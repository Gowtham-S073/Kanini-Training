using DbEfApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DbEfApi.Services.Dept_Services
{
    public interface IDept
    {
        Task<List<Dept?>> GDept1();
        Task<Dept?> GDept0(int id);
        Task<Dept> PDept0(int id, Dept dept);
        Task<Dept> PODept0(Dept dept);
        Task<string> DDept0(int id);
    }
}
