global using System.ComponentModel.DataAnnotations;
using CdefrstEfApi.Models;
using CdefrstEfApi.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IRepository, DeptSer>();
builder.Services.AddScoped<IEmprepo,EmpSer>();
builder.Services.AddScoped<IEmpdet, DmpdetailsSer>();
builder.Services.AddDbContext<CfApiContxt>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "Codefrst")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
