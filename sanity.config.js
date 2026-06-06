// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";


const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },

    // for tags
    {
  name: "tags",
  title: "Tags",
  type: "array",
  of: [
    {
      type: "string",
    },
  ],
  options: {
    layout: "tags",
  },
},


    { name: "date", title: "Publish Date", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },

 
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },



{
  name: "content",
  title: "Content",
  type: "array",
  of: [



{
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
  ],
},


    // normal text blocks
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
              },
            ],
          },





          
          {
            name: "color",
            title: "Text Color",
            type: "object",
            fields: [
              {
                name: "hex",
                title: "Hex Color",
                type: "string",
              },
            ],
          },
        ],
      },





      
    },

    // cta extra
    {
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        {
          name: "text",
          title: "Button Text",
          type: "string",
        },
        {
          name: "url",
          title: "Button URL",
          type: "url",
        },
        {
          name: "style",
          title: "Style",
          type: "string",
          options: {
            list: [
              { title: "Primary", value: "primary" },
              { title: "Secondary", value: "secondary" },
              { title: "Outline", value: "outline" },
            ],
          },
        },
      ],
      preview: {
        select: {
          title: "text",
        },
        prepare({ title }) {
          return {
            title: `🔘 ${title}`,
          };
        },
      },
    },
  ],
}
,





{
  name: "cta",
  title: "Call To Action",
  type: "object",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonUrl",
      title: "Button URL",
      type: "url",
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      initialValue: "#f8f9fa",
    },
  ],
},






    //  SEO Fields
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "SEO title for search engines (max ~60 characters)",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description: "SEO description for search engines (max ~160 characters)",
    },
  ],
};


export default defineConfig({
  name: "inquiry-studio",
  title: "inquiry Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-06-01",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [blog], // ✅ Blog now includes SEO fields
  },
});
