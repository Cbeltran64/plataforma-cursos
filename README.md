# 🎓 Plataforma de Cursos – Avys

Sistema LMS basado en Moodle con roles Administrador, Coordinador, Profesor y Estudiante.

## ⚙️ Instalación rápida (Windows)

```powershell
npm run install:all
npm run dev

# Frontend: http://localhost:5173
# Backend : http://localhost:5000 
---

### 4️⃣ Llenar `PLATAFORMA-CURSOS/railway.toml`
```toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "npm start"
healthcheckPath = "/api/health"
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10

[env]
NODE_ENV = "production"