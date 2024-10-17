# Backend API Documentation - Payload CMS

Este proyecto utiliza **Payload CMS** para administrar y gestionar las colecciones y los datos. Se han definido varias colecciones con diferentes reglas de acceso, incluyendo roles como `Admin`, `Editor de Catálogo`, y `Editor de Ambiente`.

## Contenido

1. [Instalación](#instalación)
2. [Configuración de colecciones](#configuración-de-colecciones)
   - [Ambient](#ambient)
   - [Catalog](#catalog)
   - [Users](#users)
3. [Roles y permisos](#roles-y-permisos)
4. [Middleware](#middleware)
5. [Licencia](#licencia)

## Instalación

Para instalar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno necesarias según la documentación oficial de Payload CMS.
4. Inicia el servidor:

   ```bash
   npm run dev
   ```

## Configuración de colecciones

### 1. Ambient

La colección **Ambient** contiene información relacionada con registros de ambientes, como fechas y cantidades.

- **Slug:** `ambient`
- **Campos:**

  - `dayRegister` (Date): Fecha de registro. **Requerido.**
  - `quantity` (Number): Cantidad de algún ítem relacionado con el ambiente. **Requerido.**

- **Reglas de acceso:**
  - Lectura: Permiso para usuarios con el rol `Editor de Ambiente`.
  - Creación: Permiso para usuarios con el rol `Editor de Ambiente`.
  - Actualización: Permiso para usuarios con el rol `Editor de Ambiente`.
  - Eliminación: Solo permitido para administradores (`Admin`).

```typescript
const Ambient: CollectionConfig = {
  slug: "ambient",
  admin: {
    useAsTitle: "dayRegister",
  },
  access: {
    read: isEditorAmbiente,
    create: isEditorAmbiente,
    update: isEditorAmbiente,
    delete: isAdmin,
  },
  fields: [
    {
      name: "dayRegister",
      type: "date",
      required: true,
    },
    {
      name: "quantity",
      type: "number",
      required: true,
    },
  ],
};
```

Aquí tienes un archivo README.md documentando las funciones de tu backend usando Payload CMS. Esta documentación describe las colecciones Ambient, Catalog, y Users, junto con las reglas de acceso según los roles definidos.

markdown
Copiar código

# Backend API Documentation - Payload CMS

Este proyecto utiliza **Payload CMS** para administrar y gestionar las colecciones y los datos. Se han definido varias colecciones con diferentes reglas de acceso, incluyendo roles como `Admin`, `Editor de Catálogo`, y `Editor de Ambiente`.

## Contenido

1. [Instalación](#instalación)
2. [Configuración de colecciones](#configuración-de-colecciones)
   - [Ambient](#ambient)
   - [Catalog](#catalog)
   - [Users](#users)
3. [Roles y permisos](#roles-y-permisos)
4. [Middleware](#middleware)
5. [Licencia](#licencia)

## Instalación

Para instalar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno necesarias según la documentación oficial de Payload CMS.

```bash
   DATABASE_URI=mongodb://127.0.0.1/manage-user
   PAYLOAD_SECRET=secret:payload234234534
```

4. Inicia el servidor:

   ```bash
   npm run dev
   ```

## Configuración de colecciones

### 1. Ambient

La colección **Ambient** contiene información relacionada con registros de ambientes, como fechas y cantidades.

- **Slug:** `ambient`
- **Campos:**

  - `dayRegister` (Date): Fecha de registro. **Requerido.**
  - `quantity` (Number): Cantidad de algún ítem relacionado con el ambiente. **Requerido.**

- **Reglas de acceso:**
  - Lectura: Permiso para usuarios con el rol `Editor de Ambiente`.
  - Creación: Permiso para usuarios con el rol `Editor de Ambiente`.
  - Actualización: Permiso para usuarios con el rol `Editor de Ambiente`.
  - Eliminación: Solo permitido para administradores (`Admin`).

```typescript
const Ambient: CollectionConfig = {
  slug: "ambient",
  admin: {
    useAsTitle: "dayRegister",
  },
  access: {
    read: isEditorAmbiente,
    create: isEditorAmbiente,
    update: isEditorAmbiente,
    delete: isAdmin,
  },
  fields: [
    {
      name: "dayRegister",
      type: "date",
      required: true,
    },
    {
      name: "quantity",
      type: "number",
      required: true,
    },
  ],
};
```

### 2. Catalog

La colección Catalog gestiona elementos de un catálogo con nombre y precio.

- **Slug:** `catalog`
- **Campos:**

  - `nameItem` (Text): Nombre del ítem. **Requerido.**
  - `price` (Number): Precio del ítem. **Requerido.**

- **Reglas de acceso:**
  - Lectura: Permiso para usuarios con el rol `Editor de Catálogo`.
  - Creación: Permiso para usuarios con el rol `Editor de Catálogo`.
  - Actualización: Permiso para usuarios con el rol `Editor de Catálogo`.
  - Eliminación: Solo permitido para administradores (`Admin`).

```typescript
const Catalog: CollectionConfig = {
  slug: "catalog",
  admin: {
    useAsTitle: "nameItem",
  },
  access: {
    read: isEditorCatalogo,
    create: isEditorCatalogo,
    update: isEditorCatalogo,
    delete: isAdmin,
  },
  fields: [
    {
      name: "nameItem",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
  ],
};
```

### 3. Users

La colección Users contiene información de los usuarios registrados en la aplicación.

- **Slug:** `users`
- **Campos:**

  - `name` (Text): Nombre del usuario. **Requerido.**
  - `email` (Text): Correo electrónico del usuario. **Requerido.**
  - `role` (Text): Rol del usuario. **Requerido.**

- **Reglas de acceso:**
  - Lectura: Solo permitido para administradores (`Admin`).
  - Creación: Solo permitido para administradores (`Admin`).
  - Actualización: Solo permitido para administradores (`Admin`).
  - Eliminación: Solo permitido para administradores (`Admin`).

```typescript
const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      options: [
        { label: "Admin", value: "ADMIN_ROLE" },
        { label: "Editor Catálogo", value: "CATALOG_ROLE" },
        { label: "Editor Ambiente", value: "AMBIENT_ROLE" },
      ],
    },
  ],
};
```

## Roles y permisos

Los roles definidos en este proyecto son:

- `Admin`: Tiene acceso total a todas las colecciones.
- `Editor de Catálogo`: Tiene acceso a la colección `Catalog`.
- `Editor de Ambiente`: Tiene acceso a la colección `Ambient`.

## Middleware

Se han definido middleware para verificar los roles de los usuarios y restringir el acceso a las colecciones según los permisos asignados.

```typescript
const isAdmin = ({ req }: { req: Request }) => {
  return req.user?.role === "ADMIN_ROLE";
};

const isEditorCatalogo = ({ req }: { req: Request }) => {
  return req.user?.role === "CATALOG_ROLE";
};

const isEditorAmbiente = ({ req }: { req: Request }) => {
  return req.user?.role === "AMBIENT_ROLE";
};
```

## Licencia

Este `README.md` cubre la configuración básica de tus colecciones y roles, y te proporciona una estructura clara para extenderla si decides añadir más colecciones o reglas.
