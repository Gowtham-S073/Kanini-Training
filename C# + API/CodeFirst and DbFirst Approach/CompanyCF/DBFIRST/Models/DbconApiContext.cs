using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DbEfApi.Models;

public partial class DbconApiContext : DbContext
{
    public DbconApiContext()
    {
    }

    public DbconApiContext(DbContextOptions<DbconApiContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Dept> Depts { get; set; }

    public virtual DbSet<Emp> Emps { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Dept>(entity =>
        {
            entity.HasKey(e => e.Deptno).HasName("PK__Dept__BE2C337D1C7CC99F");

            entity.ToTable("Dept");

            entity.Property(e => e.Deptno)
                .ValueGeneratedNever()
                .HasColumnName("deptno");
            entity.Property(e => e.Ename)
                .HasMaxLength(50)
                .HasColumnName("ename");
        });

        modelBuilder.Entity<Emp>(entity =>
        {
            entity.HasKey(e => e.Empno).HasName("PK__Emp__AF4C318A8ED68AE3");

            entity.ToTable("Emp");

            entity.Property(e => e.Empno)
                .ValueGeneratedNever()
                .HasColumnName("empno");
            entity.Property(e => e.Deptno).HasColumnName("deptno");
            entity.Property(e => e.Ename)
                .HasMaxLength(50)
                .HasColumnName("ename");

            entity.HasOne(d => d.DeptnoNavigation).WithMany(p => p.Emps)
                .HasForeignKey(d => d.Deptno)
                .HasConstraintName("FK__Emp__deptno__398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
