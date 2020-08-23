using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Panda.Data;

[assembly: HostingStartup(typeof(Panda.Areas.Identity.IdentityHostingStartup))]
namespace Panda.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<PandaContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("PandaContextConnection")));

                services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<PandaContext>();
            });
        }
    }
}