using Fleeman_Dotnet.Repository;
using Fleeman_Dotnet.Service;
using Fleeman_Dotnet.Services;
using Fleeman_Dotnet.Services.Impl;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace Fleeman_Dotnet
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // ✅ Configure MySQL EF Core
            builder.Services.AddDbContext<fleet_projectContext>(options =>
                options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection"))
            );

            // ✅ Dependency Injection for services
            builder.Services.AddHttpContextAccessor();
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<IStateService, StateService>();
            builder.Services.AddScoped<ICityService, CityService>();
            builder.Services.AddScoped<ICarTypeService, CarTypeService>();
            builder.Services.AddScoped<IHubService, HubService>();
            builder.Services.AddScoped<IAirportService, AirportService>();
            builder.Services.AddScoped<IBookingService, BookingServices>();
            builder.Services.AddScoped<BookingInterface, BookingInterfaceImpl>();
            builder.Services.AddScoped<IEmailService, EmailService>();
            builder.Services.AddScoped<ICustomerService, CustomerService>();
            builder.Services.AddScoped<IAddOnService, AddOnServiceImpl>();

            // Needed for IHttpContextAccessor injection in UserService
            builder.Services.AddHttpContextAccessor();

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();

            // ✅ Swagger with JWT Auth support
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Fleeman API", Version = "v1" });

                var securityScheme = new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "Enter 'Bearer {token}'"
                };
                c.AddSecurityDefinition("Bearer", securityScheme);

                c.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    { securityScheme, new string[] { } }
                });
            });

            // ✅ CORS Policy - Allow all origins
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });

            // ✅ JWT Authentication setup
            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(option =>
                {
                    option.RequireHttpsMetadata = false; // Set to true in production
                    option.SaveToken = true;
                    option.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidAudience = builder.Configuration["Jwt:Audience"],
                        ValidIssuer = builder.Configuration["Jwt:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
                    };
                });

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("AllowAll");

            app.UseHttpsRedirection();

            app.UseAuthentication(); // Must come before UseAuthorization
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
