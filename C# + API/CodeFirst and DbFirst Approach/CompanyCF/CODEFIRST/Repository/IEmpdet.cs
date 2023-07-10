using CdefrstEfApi.Models;
using Microsoft.AspNetCore.Mvc;
namespace CdefrstEfApi.Repository
{
    public interface IEmpdet
    {
        Task<List<EmpDetails>> GEmpDetails0();
        Task<EmpDetails?> GEmpDetails0(int id);
        Task<EmpDetails> PEmpDetails0(int id, EmpDetails empDetails);
        Task<EmpDetails> POEmpDetails0(EmpDetails empDetails);
        Task<string> DEmpDetails0(int id);
    }
}
