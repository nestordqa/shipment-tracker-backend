# 📦 Documentación Backend - API Shipment Tracker

## 1. Introducción

Este backend es una API RESTful construida con Node.js, Express y Sequelize, que permite la gestión completa de envíos (*shipments*). Está diseñada para interactuar con una base de datos SQL Server y es escalable, segura y fácil de mantener.

## 2. Requisitos y configuración inicial

### Instalación de dependencias

Ejecuta para instalar librerías:

```bash
npm install
```

### Variables de entorno

Configura las siguientes variables, suministradas por correo:

| Variable    | Descripción                          |
|-------------|------------------------------------|
| `DB_HOST`   | Dirección de la base de datos       |
| `DB_PORT`   | Puerto de conexión                  |
| `DB_USER`   | Usuario base de datos               |
| `DB_PASS`   | Contraseña base de datos            |
| `DB_NAME`   | Nombre de la base (ej: ShipmentDB) |

*Asegúrate de definirlas en `.env` o en tu entorno.*

## 3. Docker y Base de Datos

### Levantar contenedor SQL Server

Ejecuta comando personalizado:

```bash
npm run db:up
```

### Acceder al contenedor

```bash
npm run open:container
```

### Conectarse con cliente SQL

```bash
/opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P 'YourStrong!Passw0rd' -C
```

### Crear base de datos

En consola SQL:

```sql
CREATE DATABASE ShipmentDB;
GO
EXIT
```

## 4. Modelos y Migraciones

### Generar modelo Shipment

Atributos:

- `trackingCode` (string): Código único de seguimiento  
- `origin` (string): Ciudad origen  
- `destination` (string): Ciudad destino

Comando:

```bash
npx sequelize-cli model:generate --name Shipment --attributes trackingCode:string,origin:string,destination:string
```

### Ejecutar migraciones

```bash
npx sequelize-cli db:migrate
```

*Esto crea la estructura de tablas en la base de datos.*

## 5. API Endpoints

| Método | Ruta               | Descripción               | Body (JSON)                                   | Respuesta (JSON)                      |
|--------|--------------------|--------------------------|-----------------------------------------------|--------------------------------------|
| GET    | `/shipments`       | Listar todos los envíos  | N/A                                           | Array de objetos Shipment             |
| POST   | `/shipments`       | Crear un envío           | `{ trackingCode, origin, destination }`       | Objeto Shipment creado                |

## 6. Ejemplo de uso

### Crear un envío (POST `/shipments`)

#### Solicitud

```json
{
  "trackingCode": "ABC123",
  "origin": "Buenos Aires",
  "destination": "Santiago"
}
```

#### Respuesta

```json
{
  "id": 1,
  "trackingCode": "ABC123",
  "origin": "Buenos Aires",
  "destination": "Santiago",
  "createdAt": "2025-07-22T12:00:00.000Z",
  "updatedAt": "2025-07-22T12:00:00.000Z"
}
```

## 7. Levantar servidor

Ejecuta el servidor backend con:

```bash
npm run dev
```

*Asegúrate de que el contenedor de la base de datos esté activo.*

## 8. Recursos útiles

- [Documentación Sequelize](https://sequelize.org/master/)  
- [Documentación SQL Server](https://docs.microsoft.com/en-us/sql/sql-server/)  
- [Introducción a APIs REST](https://restfulapi.net/)  
- [Swagger para documentar APIs](https://swagger.io/)  
