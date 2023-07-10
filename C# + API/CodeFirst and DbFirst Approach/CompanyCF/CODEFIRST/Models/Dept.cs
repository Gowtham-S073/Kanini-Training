using System.ComponentModel.DataAnnotations.Schema;

namespace CdefrstEfApi.Models
{
    public class Dept
    {
        [Key][DatabaseGenerated(DatabaseGeneratedOption.None)] public int Deptid { get; set; }

        [Required]
        public string Deptname { get; set; } = string.Empty;

        //because of creating foreign key virtul for dept for deptno in emp table

        public virtual ICollection<Emp>? Emp { get; set; }



    }
}
