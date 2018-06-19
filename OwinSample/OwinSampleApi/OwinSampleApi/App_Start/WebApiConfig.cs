using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OwinSampleApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            EnableCors(config);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        /// <summary>
        /// Enabled CORS for a specific domain
        /// </summary>
        /// <param name="config">HTTP configuration.</param>
        public static void EnableCors(HttpConfiguration config)
        {
            if (config == null)
            {
                throw new ArgumentNullException("config");
            }

            // var corsAttr = new EnableCorsAttribute(ConfigurationManager.AppSettings["allowedCORSSites"], "*", "*");
            var corsAttr = new EnableCorsAttribute("http://localhost:55337", "*", "*");            
            config.EnableCors(corsAttr);
        }
    }
}
