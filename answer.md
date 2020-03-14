1. Mention two parts of Express that you learned about this week.

Express is a framwork for node.js, it handles routes, responses, and error messages.
it is a routing and middleware framework

2. Describe Middleware?
Middleware are function that has access to request objects. There are 5 different types of middleware
1. Appication level middleware
2. router level middleware
3. error handling middware
4. built-in middleware
5. thrid party middleware

examples of middleware are express(json)
helmet andd morgan which logs both requsts and reponses.

- [ ] Describe a Resource?
Resources are fundamental in any RESTful api i use. it is a set of methods that is in an object type. It is also associate data with the database.


- [ ] What can the API return to help clients know if a request was successful?
It will return different messages that are set up based on the request. If a client get a successful responds they will get a 201 created or a 200 for ok.

- [ ] How can we partition our application into sub-applications? by setting it apart from the actual server and creating separate routes for each resource.