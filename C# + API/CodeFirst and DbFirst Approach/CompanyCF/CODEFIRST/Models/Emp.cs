using System.ComponentModel.DataAnnotations.Schema;

namespace CdefrstEfApi.Models
{
    public class Emp
    {
        [Key][DatabaseGenerated(DatabaseGeneratedOption.None)] public int Empid { get; set; }
        [Required]
        public string Empname { get; set; }

        //[ForeignKey(nameof(Dept))]
        public int? Deptid { get; set;}
        public virtual Dept? DeptNav { get; set; }

    }
}
