import { defineConfig } from "tinacms";
import schema from "./schema";

export default defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "public",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "assets/images",
    },
  },
  schema,
});