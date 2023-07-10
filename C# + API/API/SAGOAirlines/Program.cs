using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using SAGOAirlines.Models;
using SAGOAirlines.Authentication;
using SAGOAirlines.Repository.booking;
using SAGOAirlines.Repository.Fdetail;
using SAGOAirlines.Repository.passDetails;
using SAGOAirlines.Repository.seat_all;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
ConfigurationManager configuration = builder.Configuration;

// For Identity
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<AuthorizationDbContext>()
    .AddDefaultTokenProviders();

// Adding Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})

// Adding Jwt Bearer
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = configuration["JWT:ValidAudience"],
        ValidIssuer = configuration["JWT:ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Secret"]))
    };
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IFlightbook, FlightBookServices>();
builder.Services.AddScoped<IFlightDetails, FlightDetailsServices>();
builder.Services.AddScoped<IPassengerDetails,PassengerdetailsServices>();
builder.Services.AddScoped<ISeatAllocation, SeatAllocationservices>();
builder.Services.AddDbContext<FlightNewContext>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "SQLConnection")));
builder.Services.AddDbContext<AuthorizationDbContext>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "JWTConstr")));
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
