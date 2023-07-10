using Microsoft.EntityFrameworkCore;

namespace CdefrstEfApi.Models
{
    public class CfApiContxt : DbContext
    {
        public CfApiContxt(DbContextOptions<CfApiContxt> options):base(options) 
        { 
        }
        public DbSet<Dept> Depts { get; set; }
        public DbSet<Emp> Emps { get; set; }

        public DbSet<EmpDetails> EmpDetails { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }
}
