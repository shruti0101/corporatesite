import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// ✅ Fetch blog
async function getBlog(slug) {
  if (!slug) {
    console.error("❌ SLUG NOT RECEIVED");
    return null;
  }

  return client.fetch(
    groq`*[_type=="blog" && slug.current==$slug][0]{
      title,
      date,
      excerpt,
      "imageUrl": image.asset->url,
      content,
      metaTitle,
      metaDescription
    }`,
    { slug }
  );
}

// ✅ SEO (FIXED)
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ IMPORTANT

  const blog = await getBlog(slug);

  return {
    title: blog?.metaTitle || blog?.title || "Blog | inquirybazaar Studio",
    description:
      blog?.metaDescription ||
      blog?.excerpt ||
      "Read the latest insights and updates from inquirybazaar Studio.",
  };
}

// ✅ PortableText styles
const components = {
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-black leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

// ✅ PAGE (FIXED)
export default async function BlogDetail({ params }) {
  const { slug } = await params; // ✅ IMPORTANT FIX

  const blog = await getBlog(slug);

  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  return (
    <>
      {/* HERO */}
      <section
        style={{ backgroundImage: "url('/testimonialbg.webp')" }}
        className="relative h-[50vh] md:h-[80vh] bg-center bg-cover overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>

        <h1 className="relative z-[2] text-white text-center max-w-3xl px-3 mx-auto text-2xl md:text-4xl font-bold flex items-center justify-center h-full">
          {blog.title}
        </h1>
      </section>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded my-6"
          />
        )}

        <p className="text-sm text-red-500 mb-3">
          published on:{" "}
          {blog.date
            ? new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date"}
        </p>

        <PortableText value={blog.content} components={components} />
      </div>
    </>
  );
}