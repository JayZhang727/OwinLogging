using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace OwinSampleApi.Controllers
{
    [RoutePrefix("api")]
    public class HelloWorldController : ApiController
    {

        /// <summary>
        /// Gets the hello
        /// </summary>
        /// <returns>string</returns>
        [HttpGet]
        [Authorize]
        [Route("hello/secure")]
        public string GetHello()
        {
            try
            {
                var result = "we hit it securely";
                return result;
            }
            catch (Exception ex)
            {
                var msg = "not hit saddd.....";
                var error = new Exception(msg, ex);
                throw error;
            }
        }

        /// <summary>
        /// Gets the hello
        /// </summary>
        /// <returns>string</returns>
        [HttpGet]
        [Route("hello/non-secure")]
        public string GetHelloNonSecure()
        {
            try
            {
                var result = "we hit it yay!!!!!!!!!!!!!!!";
                return result;
            }
            catch (Exception ex)
            {
                var msg = "not hit saddd.....";
                var error = new Exception(msg, ex);
                throw error;
            }
        }
    }
}