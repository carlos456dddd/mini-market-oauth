# 🚀 Mini-Market (Microservicios con Node + Docker + PostgreSQL)

Proyecto académico que implementa una arquitectura de microservicios con:

- ✅ **Gateway API** con Express y proxy reverso
- ✅ **Servicios independientes**: `users`, `products`
- ✅ **Bases de datos separadas** con PostgreSQL
- ✅ **Orquestación con Docker Compose**
- ✅ **Manejo de migraciones con Prisma**
- ✅ **Sincronización de volúmenes para desarrollo**

## 🧪 Tecnologías
- Node.js + Express
- Docker & Docker Compose
- PostgreSQL
- Prisma ORM
- Git + GitHub Actions (pronto)

## 🏁 Levantar todo
```bash
git clone https://github.com/tu-usuario/mini-market.git
cd mini-market
docker-compose up --build
```

## 🔍 Endpoints
| Servicio | URL                              |
| -------- | -------------------------------- |
| Gateway  | <http://localhost:3000>          |
| Users    | <http://localhost:3000/users>    |
| Products | <http://localhost:3000/products> |

