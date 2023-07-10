using System;
using System.Collections.Generic;

namespace SAGOAirlines.Models;

public partial class PassengerDetail
{
    public string FlightNo { get; set; } = null!;

    public int PassengerId { get; set; }

    public string PassengerName { get; set; } = null!;

    public string? PassportNumber { get; set; }

    public int? Age { get; set; }

    public string Gender { get; set; } = null!;

    public DateTime DateOfBirth { get; set; }

    public long ContactNumber { get; set; }

    public int? TicketId { get; set; }

    public virtual FlightDetail FlightNoNavigation { get; set; } = null!;

    public virtual FlightBooking? Ticket { get; set; }
}
