# Incremento 0 - Preparacion tecnica

## Objetivo

Crear una base tecnica limpia, ejecutable y documentada para continuar con el desarrollo incremental del sistema.

## Alcance implementado

- Frontend base con React, Vite y Tailwind CSS.
- Backend base con Node.js y Express.js.
- Endpoint tecnico `GET /api/health`.
- Swagger/OpenAPI para endpoints tecnicos existentes.
- Prisma preparado para MySQL mediante `DATABASE_URL`.
- Coleccion inicial de Postman para `GET /api/health`.
- Prueba automatizada tecnica del backend.

## Fuera de alcance en este incremento

- Autenticacion funcional.
- Dashboard definitivo.
- Productos, categorias, proveedores, inventario, movimientos y reportes.
- Modelos comerciales de Prisma.
- Reglas de negocio pendientes de validacion con el cliente.

## Pendiente de validacion con el cliente

- Campos definitivos de entidades comerciales.
- Flujos de inventario.
- Roles y permisos.
- Reportes y filtros.
- Reglas offline y sincronizacion.
- Alcance detallado del asistente hibrido.
