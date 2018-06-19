# OwinLoggingTest

The sample contains 2 folders, navigate to the project folders for instructions on how to run them.

The api project contains 2 endpoints  A non-secure hello world and a secure hello world.

You can hit the 2 endpoints at http://localhost:52526/api/hello/non-secure and http://localhost:52526/api/hello/secure respectively.


I've also provided an app project done in angular, you will need angular cli to run it, this is the project I used locally to hit the 2 endpoints.

The non-secure call succeeds, the secure call returns a 401 unauthorized.  Neither outputs any Owin logging to the console.
