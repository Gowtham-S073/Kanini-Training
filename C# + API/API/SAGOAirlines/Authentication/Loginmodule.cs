using System.ComponentModel.DataAnnotations;

namespace SAGOAirlines.Authentication
{
    public class Loginmodule
    {
        [Required(ErrorMessage = "Uername required")] public string User_name { get; set; }
        [Required(ErrorMessage = "Password required")] public string Password { get; set; }
    }
}
