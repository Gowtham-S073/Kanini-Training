using System;
using System.Collections.Generic;

namespace SAGOAirlines.Models;

public partial class FlightBooking
{
    public int TicketId { get; set; }

    public string FlightNo { get; set; } = null!;

    public string Class { get; set; } = null!;

    public string SeatNoCofirm { get; set; } = null!;

    public DateTime? BookingDate { get; set; }

    public virtual FlightDetail FlightNoNavigation { get; set; } = null!;


    public virtual ICollection<PassengerDetail> PassengerDetails { get; set; } = new List<PassengerDetail>();
    
}
