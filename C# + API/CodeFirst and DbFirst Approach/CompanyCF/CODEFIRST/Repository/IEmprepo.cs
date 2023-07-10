using CdefrstEfApi.Models;
using Microsoft.AspNetCore.Mvc;
namespace CdefrstEfApi.Repository
{
    public interface IEmprepo
    {
        Task<List<Emp>> GEmps1();
        Task<Emp?> GEmp0(int id);
        Task<Emp> PEmp0(int id, Emp emp);
        Task<Emp> POEmp0(Emp emps);
        Task<string> DEmp0(int id);
    }
}
