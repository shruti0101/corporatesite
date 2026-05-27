import { client } from "@/lib/sanity";
import { groq, PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

// PORTABLE TEXT
const components = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },

  block: {
    normal: ({ children }) => (
      <p className="text-black leading-8 mb-5">{children}</p>
    ),

    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-xl font-semibold mb-3">{children}</h3>
    ),
  },

  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {children}
      </a>
    ),
  },
};

// SINGLE BLOG
async function getBlog(slug) {
  return client.fetch(
    groq`
      *[_type=="blog" && slug.current==$slug][0]{
        title,
        date,
        excerpt,
        content,
        metaTitle,
        metaDescription,
        "imageUrl": image.asset->url
      }
    `,
    { slug }
  );
}

async function getFeaturedBlogs(currentSlug) {
  return client.fetch(
    groq`
      *[
        _type == "blog" &&
        slug.current != $currentSlug
      ]
      | order(date desc)[0...5]{
        title,
        "slug": slug.current,
        "imageUrl": image.asset->url
      }
    `,
    { currentSlug }
  );
}

export default async function BlogDetail({ params }) {

  const { slug } = await params;

  const blog = await getBlog(slug);
  const featuredBlogs = await getFeaturedBlogs(slug);

  if (!blog) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  return (
    <>
    <section
    
        className="w-full h-[7vh] md:h-[10vh]  relative"
      >
     
        <div className="flex flex-col pl-10 pt-5 items-start justify-start">
           <p className="text-orange-500 text-sm ">Home /{blog.title} </p>
          <h2 className="text-white text-5xl md:text-xl font-bold z-10 ">
           
          </h2>
        </div>
      </section>  
    <div className="max-w-7xl mx-auto px-6 py-6">

      <h1 className="text-xl md:text-4xl font-bold mb-10">
        {blog.title}
      </h1>

      <div className="grid lg:grid-cols-4 gap-10">

  {/* BLOG CONTENT */}
  <main className="lg:col-span-3 order-2 lg:order-1">

    {blog.imageUrl && (
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={1200}
        height={600}
        className="w-full rounded-xl mb-8"
      />
    )}

    <p className="text-red-500 mb-6">
      Published on{" "}
      {blog.date
        ? new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "No date"}
    </p>

    <PortableText
      value={blog.content}
      components={components}
    />

  </main>

  {/* RIGHT SIDEBAR */}
  <aside className="lg:col-span-1 hidden md:block order-1 lg:order-2">

    <div className="sticky top-24">

      <h2 className="text-xl font-bold mb-5 border-b pb-3">
        Our Recent Blogs
      </h2>

      <div className="space-y-5">
  {featuredBlogs?.length > 0 ? (
    featuredBlogs.map((item) => (
      <Link
        key={item.slug}
        href={`/blogs/${item.slug}`}
        className="block rounded-xl border overflow-hidden hover:shadow-lg"
      >
        {item.imageUrl && (
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={400}
            height={220}
            className="w-full h-40 object-cover"
          />
        )}

        <div className="p-3">
          <h3 className="font-medium">
            {item.title}
          </h3>
        </div>
      </Link>
    ))
  ) : (
    <p className="text-gray-500">No featured blogs found</p>
  )}
</div>

    </div>

  </aside>

</div>
    </div>
    </>
  );
}