using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SAGOAirlines.Models;

public partial class FlightNewContext : DbContext
{
    public FlightNewContext()
    {
    }

    public FlightNewContext(DbContextOptions<FlightNewContext> options)
        : base(options)
    {
    }

    public virtual DbSet<FlightBooking> FlightBookings { get; set; }

    public virtual DbSet<FlightDetail> FlightDetails { get; set; }

    public virtual DbSet<PassengerDetail> PassengerDetails { get; set; }

    public virtual DbSet<SeatAllocation> SeatAllocations { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("data source = .\\SQLEXPRESS; initial catalog = flightNew; integrated security=SSPI;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("SQL_Latin1_General_CP1_CI_AS");

        modelBuilder.Entity<FlightBooking>(entity =>
        {
            entity.HasKey(e => e.TicketId).HasName("PK__Flight_B__ED7260D980A410B5");

            entity.ToTable("Flight_Booking");

            entity.Property(e => e.TicketId).HasColumnName("Ticket_ID");
            entity.Property(e => e.BookingDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("Booking_Date");
            entity.Property(e => e.Class).HasMaxLength(15);
            entity.Property(e => e.FlightNo)
                .HasMaxLength(15)
                .HasColumnName("Flight_no");
            entity.Property(e => e.SeatNoCofirm)
                .HasMaxLength(7)
                .HasColumnName("Seat_no_cofirm");

            entity.HasOne(d => d.FlightNoNavigation).WithMany(p => p.FlightBookings)
                .HasForeignKey(d => d.FlightNo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Flight_Bo__Fligh__5070F446");
        });

        modelBuilder.Entity<FlightDetail>(entity =>
        {
            entity.HasKey(e => e.FlightNo).HasName("PK__Flight_D__CAC666502EBADD60");

            entity.ToTable("Flight_Details");

            entity.Property(e => e.FlightNo)
                .HasMaxLength(15)
                .HasColumnName("Flight_no");
            entity.Property(e => e.BusinessCost)
                .HasColumnType("money")
                .HasColumnName("Business_cost");
            entity.Property(e => e.DepatureTime).HasColumnName("Depature_Time");
            entity.Property(e => e.EconomyCost)
                .HasColumnType("money")
                .HasColumnName("Economy_cost");
            entity.Property(e => e.FlightName)
                .HasMaxLength(25)
                .HasColumnName("Flight_name");
            entity.Property(e => e.From).HasMaxLength(50);
            entity.Property(e => e.NoOfBusinessSeats).HasColumnName("No_of_business_seats");
            entity.Property(e => e.NoOfEconomySeats).HasColumnName("No_of_economy_seats");
            entity.Property(e => e.ReachTime).HasColumnName("Reach_Time");
            entity.Property(e => e.To).HasMaxLength(50);
        });

        modelBuilder.Entity<PassengerDetail>(entity =>
        {
            entity.HasKey(e => e.PassengerId).HasName("PK__Passenge__3DA82E1A774E767A");

            entity.ToTable("Passenger_Details");

            entity.Property(e => e.PassengerId).HasColumnName("Passenger_ID");
            entity.Property(e => e.ContactNumber).HasColumnName("Contact_number");
            entity.Property(e => e.DateOfBirth)
                .HasColumnType("date")
                .HasColumnName("Date_of_birth");
            entity.Property(e => e.FlightNo)
                .HasMaxLength(15)
                .HasColumnName("Flight_no");
            entity.Property(e => e.Gender).HasMaxLength(8);
            entity.Property(e => e.PassengerName)
                .HasMaxLength(50)
                .HasColumnName("Passenger_Name");
            entity.Property(e => e.PassportNumber)
                .HasMaxLength(50)
                .HasColumnName("Passport_number");
            entity.Property(e => e.TicketId).HasColumnName("Ticket_ID");

            entity.HasOne(d => d.FlightNoNavigation).WithMany(p => p.PassengerDetails)
                .HasForeignKey(d => d.FlightNo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Passenger__Fligh__5165187F");

            entity.HasOne(d => d.Ticket).WithMany(p => p.PassengerDetails)
                .HasForeignKey(d => d.TicketId)
                .HasConstraintName("FK__Passenger__Ticke__52593CB8");
        });

        modelBuilder.Entity<SeatAllocation>(entity =>
        {
            entity.HasKey(e => e.Sno).HasName("PK__Seat_All__CA1EE06C233413C7");

            entity.ToTable("Seat_Allocation");

            entity.Property(e => e.Sno).HasColumnName("SNO");
            entity.Property(e => e.BusinessOrEconomy)
                .HasMaxLength(30)
                .HasColumnName("Business_or_Economy");
            entity.Property(e => e.FlightDate)
                .HasColumnType("date")
                .HasColumnName("Flight_Date");
            entity.Property(e => e.FlightNo)
                .HasMaxLength(15)
                .HasColumnName("Flight_no");
            entity.Property(e => e.SeatNumbers)
                .HasMaxLength(7)
                .HasColumnName("Seat_numbers");
            entity.Property(e => e.SeatStatus)
                .HasMaxLength(20)
                .HasColumnName("Seat_status");

            entity.HasOne(d => d.FlightNoNavigation).WithMany(p => p.SeatAllocations)
                .HasForeignKey(d => d.FlightNo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Seat_Allo__Fligh__534D60F1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
