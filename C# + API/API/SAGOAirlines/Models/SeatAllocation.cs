using System;
using System.Collections.Generic;

namespace SAGOAirlines.Models;

public partial class SeatAllocation
{
    public string FlightNo { get; set; } = null!;

    public string BusinessOrEconomy { get; set; } = null!;

    public string SeatNumbers { get; set; } = null!;

    public string SeatStatus { get; set; } = null!;

    public DateTime FlightDate { get; set; }

    public int Sno { get; set; }

    public virtual FlightDetail FlightNoNavigation { get; set; } = null!;
}
