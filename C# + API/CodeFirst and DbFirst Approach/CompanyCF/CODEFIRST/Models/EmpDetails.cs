using System.ComponentModel.DataAnnotations.Schema;

namespace CdefrstEfApi.Models
{
    public class EmpDetails
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int empno { get; set; }

        public long aadharno { get; set; }

        public string panno { get; set; }=string.Empty;
    }
}
