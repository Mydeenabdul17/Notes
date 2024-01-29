# Notes Web Application

This is a simple web application for managing notes. Users can create, delete, and modify notes. The application is built using Java for the backend, with Servlets for handling HTTP requests, and MySQL database for storing notes data. Hibernate is used as the ORM framework for database interaction.
## Branch 
- please change to Master Branch to view Code

## Features

- Create a new note with a title and content.
- View all existing notes.
- Edit the title and content of a note.
- Delete a note.

## Technologies Used

- Java
- Servlets
- MySQL
- Hibernate

## Setup Instructions

1. **Clone the Repository:**

```bash
git clone https://github.com/Mydeenabdul17/Notes.git
```


2. **Import Project into IDE:**
Import the project into your preferred IDE (Eclipse, IntelliJ IDEA, etc.).

3. **Setup Database:**
- Install MySQL and create a database named `notes_db`.
- Update the database configurations in `hibernate.cfg.xml` located in `src/main/resources`.

4. **Build and Run:**
Build and run the project from your IDE. Alternatively, you can deploy the project to a servlet container like Apache Tomcat.

5. **Access the Application:**
Open your web browser and navigate to `http://localhost:8080/notes-web-application`.

## Project Structure

- `src/main/java`: Contains Java source files.
- `com.notesApp.controller`: Servlet classes for handling HTTP requests.
- `com.notesApp.dto`: Data Transfer Object (DTO) classes.
- `com.notesApp.dao`: Data Access Object (DAO) classes for database interaction.
- `src/main/webapp`: Contains web resources.
- `WEB-INF/web.xml`: Deployment descriptor.
- `WEB-INF/pages`: JSP files for views.
- `src/main/resources`: Contains configuration files.
- `hibernate.cfg.xml`: Hibernate configuration.

## License

This project is licensed under the [MIT License](LICENSE).
