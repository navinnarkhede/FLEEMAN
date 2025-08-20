using Fleeman_Dotnet.Models;
using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;
using System;
using System.Collections.Generic;

namespace Fleeman_Dotnet.Repository
{
    public partial class fleet_projectContext : DbContext
    {
        public fleet_projectContext()
        {
        }

        public fleet_projectContext(DbContextOptions<fleet_projectContext> options)
            : base(options)
        {
        }

        public virtual DbSet<add_on_master> add_on_masters { get; set; }
        public virtual DbSet<airport_master> airport_masters { get; set; }
        public virtual DbSet<booking_detail_table> booking_detail_tables { get; set; }
        public virtual DbSet<booking_header_table> booking_header_tables { get; set; }
        public virtual DbSet<car_master> car_masters { get; set; }
        public virtual DbSet<car_type_master> car_type_masters { get; set; }
        public virtual DbSet<city_master> city_masters { get; set; }
        public virtual DbSet<customer_master> customer_masters { get; set; }
        public virtual DbSet<hub_master> hub_masters { get; set; }
        public virtual DbSet<invoice_detail_table> invoice_detail_tables { get; set; }
        public virtual DbSet<invoice_header_table> invoice_header_tables { get; set; }
        public virtual DbSet<state_master> state_masters { get; set; }
        public virtual DbSet<user> users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
#warning Move your connection string to appsettings.json for security
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySQL("server=localhost;database=fleet_project;user=root;password=1018");
                // If you want to explicitly set version:
                // optionsBuilder.UseMySQL("server=localhost;database=fleet_project;user=root;password=1018",
                //     new MySqlServerVersion(new Version(8, 0, 37)));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Oracle's MySQL EF Core handles charset/collation from DB by default.
            // You can still set it explicitly if needed:
            modelBuilder.HasCharSet("utf8mb4");

            modelBuilder.Entity<add_on_master>(entity =>
            {
                entity.HasKey(e => e.add_on_id).HasName("PRIMARY");
            });

            modelBuilder.Entity<airport_master>(entity =>
            {
                entity.HasKey(e => e.airport_id).HasName("PRIMARY");

                entity.HasOne(d => d.city)
                    .WithMany(p => p.airport_masters)
                    .HasConstraintName("FKnacm5228qoxi0egygij94kqje");

                entity.HasOne(d => d.hub)
                    .WithMany(p => p.airport_masters)
                    .HasConstraintName("FK9q13ys5sara44e3t8iwsbehe7");

                entity.HasOne(d => d.state)
                    .WithMany(p => p.airport_masters)
                    .HasConstraintName("FKgykh73g2t7b9tyhou2eve5ljf");
            });

            modelBuilder.Entity<booking_detail_table>(entity =>
            {
                entity.HasKey(e => e.booking_detail_id).HasName("PRIMARY");

                entity.HasOne(d => d.addon)
                    .WithMany(p => p.booking_detail_tables)
                    .HasConstraintName("FKl1eiva9sie32vxofv6l7qj0g8");

                entity.HasOne(d => d.booking)
                    .WithMany(p => p.booking_detail_tables)
                    .HasConstraintName("FK8lhwsgs4ew5tdogoed7fpif4a");
            });

            modelBuilder.Entity<booking_header_table>(entity =>
            {
                entity.HasKey(e => e.booking_id).HasName("PRIMARY");

                entity.HasOne(d => d.car)
                    .WithMany(p => p.booking_header_tables)
                    .HasConstraintName("FKmmkg1viclerruhttx06973w3j");

                entity.HasOne(d => d.cartype)
                    .WithMany(p => p.booking_header_tables)
                    .HasConstraintName("FKopo340pd5jigmo84cahh57cwo");

                entity.HasOne(d => d.cust)
                    .WithMany(p => p.booking_header_tables)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FKdph943hu15r48ahrnkql3lrbl");
            });

            modelBuilder.Entity<car_master>(entity =>
            {
                entity.HasKey(e => e.car_id).HasName("PRIMARY");

                entity.HasOne(d => d.cartype)
                    .WithMany(p => p.car_masters)
                    .HasConstraintName("FKe7t3ybbd5mnrqomrch1wuyc6m");

                entity.HasOne(d => d.hub)
                    .WithMany(p => p.car_masters)
                    .HasConstraintName("FKrbd83493vx6lu3vprvkx8qgqh");
            });

            modelBuilder.Entity<car_type_master>(entity =>
            {
                entity.HasKey(e => e.cartype_id).HasName("PRIMARY");
            });

            modelBuilder.Entity<city_master>(entity =>
            {
                entity.HasKey(e => e.city_id).HasName("PRIMARY");

                entity.HasOne(d => d.state)
                    .WithMany(p => p.city_masters)
                    .HasConstraintName("FKfxtjuwt9iqx9n7xl6f8wl6uu4");
            });

            modelBuilder.Entity<customer_master>(entity =>
            {
                entity.HasKey(e => e.cust_id).HasName("PRIMARY");
            });

            modelBuilder.Entity<hub_master>(entity =>
            {
                entity.HasKey(e => e.hub_id).HasName("PRIMARY");

                entity.HasOne(d => d.city)
                    .WithMany(p => p.hub_masters)
                    .HasConstraintName("FK7rdbu34jsqwuoyuound4e830p");

                entity.HasOne(d => d.state)
                    .WithMany(p => p.hub_masters)
                    .HasConstraintName("FKf94kvk79lamurkcyvj8hhop1q");
            });

            modelBuilder.Entity<invoice_detail_table>(entity =>
            {
                entity.HasKey(e => e.invdtl_id).HasName("PRIMARY");

                entity.HasOne(d => d.addon)
                    .WithMany(p => p.invoice_detail_tables)
                    .HasConstraintName("FKdxr8d4h98iq24g5944vho0txs");

                entity.HasOne(d => d.invoice)
                    .WithMany(p => p.invoice_detail_tables)
                    .HasConstraintName("FKjij1hnrk7hmdm8oq5yguqo8o9");
            });

            modelBuilder.Entity<invoice_header_table>(entity =>
            {
                entity.HasKey(e => e.invoice_id).HasName("PRIMARY");

                entity.HasOne(d => d.booking)
                    .WithMany(p => p.invoice_header_tables)
                    .HasConstraintName("FK5dvc2a779phnc8cjjxx94swb5");

                entity.HasOne(d => d.car)
                    .WithMany(p => p.invoice_header_tables)
                    .HasConstraintName("FKt256nitu82j1d1ryxv2h7mx4r");

                entity.HasOne(d => d.cust)
                    .WithMany(p => p.invoice_header_tables)
                    .HasConstraintName("FKskcvkb6nr6713a2rjgy027a97");
            });

            modelBuilder.Entity<state_master>(entity =>
            {
                entity.HasKey(e => e.state_id).HasName("PRIMARY");
            });

            modelBuilder.Entity<user>(entity =>
            {
                entity.HasKey(e => e.id).HasName("PRIMARY");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
