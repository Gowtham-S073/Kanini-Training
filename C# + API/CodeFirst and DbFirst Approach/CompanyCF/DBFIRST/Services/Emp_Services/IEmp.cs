using DbEfApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DbEfApi.Services.Emp_Services
{
    public interface IEmp
    {
        Task<List<Emp>> GEmp1();
        Task<Emp?> GEmp0(int id);
        Task<Emp> PEmp0(int id, Emp emp);
        Task<Emp> POEmp0(Emp emps);
        Task<string> DEmp0(int id);
    }
}
