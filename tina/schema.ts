import { defineSchema } from "tinacms";

export default defineSchema({
  collections: [
    {
      label: "Блог",
      name: "blog",
      path: "content/posts",
      format: "md",
      fields: [
        { type: "string", label: "Заголовок", name: "title", isTitle: true, required: true },
        { type: "datetime", label: "Дата", name: "date" },
        { type: "rich-text", label: "Текст", name: "body", isBody: true },
      ],
    },
    {
      label: "Портфолио",
      name: "portfolio",
      path: "content/portfolio",
      format: "md",
      fields: [
        { type: "string", label: "Название проекта", name: "title", isTitle: true, required: true },
        { type: "string", label: "Описание", name: "description" },
        { type: "image", label: "Фото", name: "images", list: true },
        { type: "string", label: "Видео", name: "video" },
      ],
    },
  ],
});