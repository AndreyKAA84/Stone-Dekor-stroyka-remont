// tina/config.ts
import { defineConfig } from "tinacms";

// tina/schema.ts
import { defineSchema } from "tinacms";
var schema_default = defineSchema({
  collections: [
    {
      label: "\u0411\u043B\u043E\u0433",
      name: "blog",
      path: "content/posts",
      format: "md",
      fields: [
        { type: "string", label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", name: "title", isTitle: true, required: true },
        { type: "datetime", label: "\u0414\u0430\u0442\u0430", name: "date" },
        { type: "rich-text", label: "\u0422\u0435\u043A\u0441\u0442", name: "body", isBody: true }
      ]
    },
    {
      label: "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
      name: "portfolio",
      path: "content/portfolio",
      format: "md",
      fields: [
        { type: "string", label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430", name: "title", isTitle: true, required: true },
        { type: "string", label: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", name: "description" },
        { type: "image", label: "\u0424\u043E\u0442\u043E", name: "images", list: true },
        { type: "string", label: "\u0412\u0438\u0434\u0435\u043E", name: "video" }
      ]
    }
  ]
});

// tina/config.ts
var config_default = defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "public",
    publicFolder: "public"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "assets/images"
    }
  },
  schema: schema_default
});
export {
  config_default as default
};
