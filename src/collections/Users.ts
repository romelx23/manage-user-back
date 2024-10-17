import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    create: ({ req: { user, body } }) => {
      // Permitir que cualquier usuario pueda crear un usuario, excepto si el rol asignado es 'ADMIN_ROLE'
      if (body.role === "ADMIN_ROLE") {
        // Bloquear si están intentando crear un usuario con el rol ADMIN_ROLE
        return false;
      }
      return true; // Permitir creación si no es ADMIN_ROLE
    },
    // Opcionalmente, puedes definir permisos para otras operaciones (leer, actualizar, eliminar)
    read: () => true, // Permitir que todos los usuarios lean la colección
  },
  fields: [
    // Email added by default
    // Add more fields as needed
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

export default Users;
