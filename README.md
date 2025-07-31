# AuthClient 🔐

This is a full-stack authentication application built using **Angular** (frontend) and **ASP.NET Core Web API** (backend), with JWT-based authentication. It demonstrates user registration and login with password confirmation, validation feedback, and toast notifications using `ngx-toastr`.

---

## Features

- 🔐 Secure JWT-based authentication with token storage and API protection

- ✅ User registration and login with full name, email, and password
- 🔒 Strong password rules (min length, symbol requirement)
- 🔁 Password confirmation with custom validator
- ⚠️ Form validation with user-friendly error messages
- 🍞 Success/error toasts using `ngx-toastr`
- 📡 API integration using Angular `HttpClient`
- ✨ Standalone Angular component design

---

## Technologies Used

**Frontend:**

- Angular 17+
- Reactive Forms
- ngx-toastr
- Standalone Components

**Backend:**
- JWT token generation and validation

- ASP.NET Core Web API
- ASP.NET Identity
- Entity Framework Core (SQL Server)
- Swagger (for testing API endpoints)

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Angular CLI
- .NET 7 or 8 SDK
- SQL Server (local or cloud)

---

### Clone the Repo

```bash
git clone https://github.com/ralphcomplido/AuthClient.git
cd AuthClient
```

---

### Frontend Setup

```bash
npm install
ng serve
```

Make sure `ngx-toastr` is set up correctly:

1. `BrowserAnimationsModule` is imported
2. `ToastrModule.forRoot()` or `provideToastr()` is added
3. `node_modules/ngx-toastr/toastr.css` is included in `angular.json`

---

### Backend Setup

1. Go to your ASP.NET Core API folder
2. Update `appsettings.json` with your SQL Server connection string
3. Run:

```bash
dotnet ef database update
dotnet run
```

---

### Sample API Request

**POST** `/api/signup`

```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "fullName": "John Doe"
}
```

---

## Folder Structure (Frontend)

```
src/
├── app/
│   ├── user/
│   │   ├── registration/        <-- Registration component
│   │   └── login/               <-- Login component
│   ├── shared/
│   │   ├── services/            <-- AuthService
│   │   └── pipes/               <-- Custom pipes (e.g., FirstKeyPipe)
│   └── app.config.ts           <-- Angular standalone config
```

---

## Author

**Ralph Complido**  
GitHub: [@ralphcomplido](https://github.com/ralphcomplido)

---

## License

This project is licensed under the MIT License.
