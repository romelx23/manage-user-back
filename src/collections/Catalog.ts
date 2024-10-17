import { isAdmin, isEditorCatalogo } from "../middlewares/role.middleware";
import { CollectionConfig } from "payload/types";

const Catalog: CollectionConfig = {
  slug: "catalog",
  // auth: true,
  admin: {
    useAsTitle: "nameItem",
  },
  access: {
    read: isEditorCatalogo,
    create: isEditorCatalogo,
    update: isEditorCatalogo,
    delete: isAdmin, // Solo los admins pueden eliminar
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

export default Catalog;
