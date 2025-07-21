import React from 'react'

const Services = () => {
  return (
    <>
      <h1>welcome to services</h1>
      <p>The Service Layer in a MERN (MongoDB, Express, React, Node.js) project is responsible for handling the business logic of the application. It acts as a bridge between the controllers (route handlers) and the database layer (models), ensuring that the logic of your application remains clean, organized, and reusable.</p>
      <p>Purpose of the Service Layer
Separation of Concerns: It keeps the route controllers simple by moving complex logic into dedicated service functions.

Reusability: Service functions can be reused across different controllers or even in scheduled jobs and background workers.

Testability: Isolating logic in services makes unit testing easier and more effective.

Maintainability: Updating or modifying business logic is easier when it's centralized in the service layer.

</p>
    </>
  )
}

export default Services;
