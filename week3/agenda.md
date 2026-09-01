### Agenda
 - Create database
    - Create a database server on MongoDb  ✅
    - Create a database on Atlas (MyCollectibles) ✅
    - Create your first collection (test/users) ✅
    - Setup mongoose ORM in project
        - Test connection

 - Authentication
    - Build login and register templates
        - login ejs
        - register ejs
    - Create model/schema for users table
    - Build our routes
        - Create auth router
        - Link our models (users model) to the router
        - Create routes
            - [GET] /login -> route to render the login page
            - [GET] /register -> route to render the register page
            - [POST] /userLogin -> route to handle the user login logic (when the user fills the login form and clicks on login)
            - [POST] /userRegister -> route to handle user registration logic ( when user fills registration form and clicks on register)
        - Implement session management
            - Link middleware (set params)
            - Store user details(after login/register) in session storage
            - Enforce login on certain pages using session
            - Verify RBAC 

