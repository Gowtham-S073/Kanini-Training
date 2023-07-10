using System;
using System.Collections.Generic;

namespace SAGOAirlines.Models;

public partial class FlightDetail
{
    public string FlightNo { get; set; } = null!;

    public string FlightName { get; set; } = null!;

    public string From { get; set; } = null!;

    public string To { get; set; } = null!;

    public decimal EconomyCost { get; set; }

    public decimal BusinessCost { get; set; }

    public int? NoOfEconomySeats { get; set; }

    public int? NoOfBusinessSeats { get; set; }

    public TimeSpan? DepatureTime { get; set; }

    public TimeSpan? ReachTime { get; set; }

    public virtual ICollection<FlightBooking> FlightBookings { get; set; } = new List<FlightBooking>();

    public virtual ICollection<PassengerDetail> PassengerDetails { get; set; } = new List<PassengerDetail>();

    public virtual ICollection<SeatAllocation> SeatAllocations { get; set; } = new List<SeatAllocation>();
}
