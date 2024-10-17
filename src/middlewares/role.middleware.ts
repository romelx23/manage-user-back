import { Access } from "payload/config";

export const isAdmin: Access = ({ req: { user } }) => {
  return user?.role === "ADMIN_ROLE";
};

export const isEditorCatalogo: Access = ({ req: { user } }) => {
  return user?.role === "CATALOG_ROLE" || user?.role === "ADMIN_ROLE";
};

export const isEditorAmbiente: Access = ({ req: { user } }) => {
  return user?.role === "AMBIENT_ROLE" || user?.role === "ADMIN_ROLE";
};
