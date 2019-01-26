1. What is the purpose of using _sessions_?

They allow the server to persist data so that information is stored even when a new request is made. For example, authentication can be stored so that a user does not have to login multiple times.

2. What does bcrypt do to help us store passwords in a secure manner.

Bcrypt runs the passwords through a hashing algorithm and then the server stores the hashed password instead of the original password.

3. What does bcrypt do to slow down attackers?

The iteration count can be increased to slow processing down.

4. What are the three parts of the JSON Web Token?

Header
Payload
Signature
