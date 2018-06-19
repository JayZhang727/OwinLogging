using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.ActiveDirectory;
using System;
using System.Configuration;
using Microsoft.IdentityModel.Tokens;

[assembly: OwinStartup(typeof(OwinSampleApi.Startup))]

namespace OwinSampleApi
{
    /// <summary>
    /// Initializes OWIN authentication.
    /// </summary>
    public partial class Startup
    {
        /// <summary>
        /// Initializes OWIN authentication.
        /// </summary>
        /// <param name="app">Web API AppBuilder</param>
        public void Configuration(IAppBuilder app)
        {
            if (app == null)
            {
                throw new ArgumentNullException("app");
            }

            app.UseWindowsAzureActiveDirectoryBearerAuthentication(
                new WindowsAzureActiveDirectoryBearerAuthenticationOptions
                {
                    Tenant = ConfigurationManager.AppSettings["ida:Tenant"],
                    TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidAudience = ConfigurationManager.AppSettings["ida:Tenant"]
                    },
                });
        }
    }
}