
---

### ✅ `README.md`

````markdown
# AuthClient 🔐

A full-stack authentication application built with **Angular** (frontend) and **ASP.NET Core Web API** (backend), demonstrating user registration, password validation, custom error handling, and toast notifications using `ngx-toastr`.

---

## 🚀 Features

- 🔐 User registration with full name, email, and password
- ✅ Password confirmation with custom validator
- 📏 Strong password pattern enforcement (including symbols)
- ⚠️ Real-time form validation feedback
- 🧪 Reactive Forms with `FormBuilder` and custom validators
- 🍞 Success and error toasts using `ngx-toastr`
- 📡 RESTful API integration with `HttpClient`
- 🧹 Clean standalone Angular component design

---

## 🛠 Technologies Used

### Frontend
- [Angular 17+](https://angular.io/)
- [Reactive Forms](https://angular.io/guide/reactive-forms)
- [ngx-toastr](https://www.npmjs.com/package/ngx-toastr)
- [Standalone components](https://angular.io/guide/standalone-components)

### Backend
- ASP.NET Core Web API
- ASP.NET Core Identity
- Entity Framework Core (SQL Server)
- Swagger (for API testing)

---

## 📸 Screenshots

| Registration Form | Form Validation |
|-------------------|-----------------|
| ![Registration Form](docs/screenshot-registration.png) | ![Validation](docs/screenshot-validation.png) |

---

## ⚙️ Getting Started

### 🔧 Prerequisites

- Node.js (v18+)
- Angular CLI (`npm install -g @angular/cli`)
- .NET 7 or 8 SDK
- SQL Server (local or cloud)
- Git

---

### 🔽 Clone the Repo

```bash
git clone https://github.com/ralphcomplido/AuthClient.git
cd AuthClient
````

---

### 🖥️ Frontend Setup

```bash
npm install
ng serve --open
```

> Make sure `ngx-toastr` and `toastr.css` are properly configured in `angular.json` and `main.ts`.

---

### 🖧 Backend Setup

1. Navigate to your ASP.NET Core API project
2. Update `appsettings.json` with your SQL Server connection string
3. Run migrations (if applicable)

```bash
dotnet ef database update
```

4. Launch the Web API:

```bash
dotnet run
```

---

## 📬 API Endpoint (Sample)

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | `/api/signup` | Register new user |

**Sample request body:**

```json
{
  "email": "test@example.com",
  "password": "My$ecurePass123",
  "fullName": "Test User"
}
```

---

## 📂 Project Structure

```
AuthClient/
├── src/
│   └── app/
│       ├── user/
│       │   └── registration/        # Registration component
│       ├── shared/
│       │   ├── services/            # AuthService (API calls)
│       │   └── pipes/               # Custom pipes
│       └── app.config.ts            # Angular standalone config
├── angular.json
├── main.ts
└── README.md
```

---

## ✨ Credits

Built by [Ralph Complido](https://github.com/ralphcomplido)

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

```

---

```
