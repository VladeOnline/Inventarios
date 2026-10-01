# Decisiones Tecnicas

Este documento registra decisiones tecnicas importantes, su justificacion y su estado.

## DT-001 - Anteproyecto como fuente principal de alcance

- Fecha: 2026-10-01
- Estado: Aprobada
- Decision: Usar el anteproyecto aprobado como fuente principal para definir el alcance del sistema.
- Justificacion: El proyecto corresponde a una Practica Empresarial Supervisada y debe mantenerse alineado con el alcance aprobado.
- Impacto: Cualquier funcionalidad no incluida en el anteproyecto debe tratarse como fuera de alcance o quedar pendiente para una version futura.

## DT-002 - Proceso formal por etapas

- Fecha: 2026-10-01
- Estado: Aprobada
- Decision: Trabajar siguiendo las etapas ANALISIS, DISENO, DESARROLLO, IMPLEMENTACION, PRUEBAS y ENTREGA.
- Justificacion: El anteproyecto define objetivos y alcances por etapa, y el usuario solicito mantener trazabilidad formal.
- Impacto: No se programaran modulos funcionales antes de completar la validacion necesaria de requerimientos.

## DT-003 - Trazabilidad obligatoria

- Fecha: 2026-10-01
- Estado: Aprobada
- Decision: Mantener trazabilidad entre requerimiento, diseno, implementacion, prueba y evidencia.
- Justificacion: Permite justificar cada cambio frente al anteproyecto y facilita la entrega academica/profesional del proyecto.
- Impacto: Cada modulo futuro debera asociarse a requerimientos identificables.

## DT-004 - Tecnologias base establecidas

- Fecha: 2026-10-01
- Estado: Aprobada
- Decision: Usar React, Vite, Tailwind CSS, Node.js, Express.js, API REST, MySQL, Prisma ORM, JWT, Service Workers, IndexedDB, Chart.js, Git, GitHub, Postman y Swagger.
- Justificacion: Estas tecnologias estan indicadas por el usuario y coinciden con el anteproyecto aprobado.
- Impacto: La arquitectura tecnica se disenara alrededor de estas herramientas.

## DT-005 - No asumir reglas de negocio durante ANALISIS

- Fecha: 2026-10-01
- Estado: Aprobada
- Decision: Marcar como PENDIENTE DE VALIDACION CON EL CLIENTE cualquier regla, campo, permiso, reporte, calculo o flujo no confirmado.
- Justificacion: El usuario realizara una reunion de levantamiento de requerimientos y solicito explicitamente no inventar decisiones de negocio.
- Impacto: El modelo de datos, endpoints, pantallas y pruebas funcionales definitivas se definiran despues de la validacion.

## DT-006 - Inicializar Git desde el inicio

- Fecha: 2026-10-01
- Estado: Aprobada
- Decision: Inicializar un repositorio Git local desde la etapa de ANALISIS.
- Justificacion: El anteproyecto establece Git y GitHub como herramientas del proyecto, y el control temprano permite trazabilidad desde la planificacion.
- Impacto: Los cambios documentales y tecnicos podran registrarse en commits desde el inicio.

## DT-007 - Mantener dependencias propuestas como decisiones tecnicas

- Fecha: 2026-10-01
- Estado: Aprobada para Incremento 0
- Decision: Tratar React Router, Axios, Dexie.js, bcrypt, Testing Library y otras librerias no indicadas directamente por el anteproyecto como propuestas tecnicas, no como imposiciones.
- Justificacion: El usuario indico que no deben agregarse dependencias innecesarias ni asumir tecnologias fuera del anteproyecto.
- Impacto: No se instalaron React Router, Axios, Dexie.js, bcrypt ni Testing Library en el Incremento 0.

## DT-008 - Usar Tailwind CSS con plugin oficial de Vite

- Fecha: 2026-10-01
- Estado: Aprobada para Incremento 0
- Decision: Integrar Tailwind CSS mediante `tailwindcss` y `@tailwindcss/vite`.
- Justificacion: El anteproyecto establece Tailwind CSS y el proyecto frontend se basa en Vite.
- Impacto: El frontend puede verificar estilos base sin disenar una interfaz definitiva.

## DT-009 - Usar Express con CORS y dotenv como infraestructura base

- Fecha: 2026-10-01
- Estado: Aprobada para Incremento 0
- Decision: Configurar Express con `cors` y `dotenv`.
- Justificacion: Express es parte del anteproyecto; `dotenv` permite variables de entorno y `cors` facilita la ejecucion local separada entre frontend y backend.
- Impacto: El backend queda preparado para desarrollo local sin endpoints comerciales.

## DT-010 - Usar Swagger solo para endpoints existentes

- Fecha: 2026-10-01
- Estado: Aprobada para Incremento 0
- Decision: Configurar Swagger/OpenAPI con `swagger-jsdoc` y `swagger-ui-express`, documentando solamente `GET /api/health`.
- Justificacion: El usuario solicito no documentar endpoints futuros como si existieran.
- Impacto: La documentacion tecnica inicial esta disponible en `/api/docs`.

## DT-011 - Preparar Prisma para MySQL sin modelos comerciales

- Fecha: 2026-10-01
- Estado: Aprobada para Incremento 0
- Decision: Configurar Prisma con datasource MySQL y `DATABASE_URL`, sin modelos de productos, categorias, proveedores, inventario, movimientos, usuarios comerciales ni reportes.
- Justificacion: Los campos y relaciones dependen de validacion con el cliente.
- Impacto: Prisma queda preparado, pero el modelo de datos comercial permanece pendiente.

## DT-012 - Usar Vitest y Supertest para prueba tecnica del backend

- Fecha: 2026-10-01
- Estado: Aprobada para Incremento 0
- Decision: Instalar `vitest` y `supertest` para validar tecnicamente `GET /api/health`.
- Justificacion: Permite verificar el backend sin incorporar reglas de negocio.
- Impacto: Existe una prueba automatizada inicial limitada al endpoint tecnico.
