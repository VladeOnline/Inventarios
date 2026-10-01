# Pruebas - Incremento 0

## Pruebas previstas

1. Ejecutar pruebas automatizadas del backend.
2. Validar esquema inicial de Prisma.
3. Compilar frontend.
4. Iniciar backend y verificar `GET /api/health`.
5. Iniciar frontend y confirmar pantalla tecnica.
6. Abrir Swagger en `/api/docs`.
7. Probar `GET /api/health` desde Postman.
8. Ejecutar lint del frontend.
9. Revisar auditoria de dependencias de frontend y backend.

## Resultado

- `npm test` en backend: aprobado, 1 archivo de prueba y 1 prueba exitosa.
- `npm run prisma:validate` en backend: aprobado, esquema Prisma valido.
- `npm run build` en frontend: aprobado, build de Vite generado correctamente.
- `GET /api/health`: aprobado, respuesta `{ "status": "ok" }`.
- `/api/docs`: aprobado, Swagger responde con HTTP 200.
- Frontend en Vite: aprobado, pagina inicial responde con HTTP 200.
- `npm run lint` en frontend: aprobado, sin errores reportados.
- `npm audit --json` en frontend y backend: aprobado, 0 vulnerabilidades reportadas.

## Observaciones

- La validacion de Prisma usa un `DATABASE_URL` local de ejemplo en `.env`; el archivo real queda ignorado por Git.
- Las primeras ejecuciones dentro del sandbox fallaron por restricciones `spawn EPERM` y red bloqueada. Al reejecutar con permisos autorizados, las pruebas tecnicas pasaron.
