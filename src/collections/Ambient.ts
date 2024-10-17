import { isAdmin, isEditorAmbiente } from "../middlewares/role.middleware";
import { CollectionConfig } from "payload/types";

const Ambient: CollectionConfig = {
  slug: "ambient",
  // auth: true,
  admin: {
    useAsTitle: "dayRegister",
  },
  access: {
    read: isEditorAmbiente,
    create: isEditorAmbiente,
    update: isEditorAmbiente,
    delete: isAdmin, // Solo los admins pueden eliminar
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

export default Ambient;
