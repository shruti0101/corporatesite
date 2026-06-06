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







  // extra button type
  types: {



  // extra image in doc

  image: ({ value }) => (
  <figure className="my-8">
    <Image
      src={value.asset.url}
      alt={value.alt || "Blog Image"}
      width={500}
      height={500}
      className="w-full rounded-2xl shadow-lg object-contain"
    />

    {value.caption && (
      <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
        {value.caption}
      </figcaption>
    )}
  </figure>
),



    button: ({ value }) => (
      <div className="my-8 text-start">
        <Link
          href={value.url}
          className="inline-block bg-[#F1781B] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          {value.text}
        </Link>
      </div>
    ),



  cta: ({ value }) => (
  <div
    className="relative overflow-hidden rounded-3xl my-10 "
    style={{
      background: value.backgroundColor || "#0F172A",
    }}
  >
    {/* Decorative circles */}
    <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10"></div>
    <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5"></div>

    <div className="relative z-10 px-8 py-10 md:px-12 md:py-14">
      <div className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-5 ">
          🚀 Get Started Today
        </span>

        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5 uppercase animate-pulse">
          {value.heading}
        </h3>

        <p className="text-white/80 text-base md:text-lg leading-8 mb-8">
          {value.description}
        </p>

        <Link
          href={value.buttonUrl}
          className="inline-flex items-center gap-3 rounded-xl bg-[#F1781B] px-7 py-4 text-white font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          {value.buttonText}
          <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  </div>
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
       content[]{
  ...,
  asset->
},
        cta,
        tags,
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
           <p className="text-orange-500 text-sm ">Home /<span className="capitalize">{blog.title}</span>  </p>
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

<PortableText value={blog.content} components={components} />

{blog.cta && (
  <div
    className="relative overflow-hidden rounded-3xl "
    style={{
      background: blog.cta.backgroundColor || "#0F172A",
    }}
  >
    {/* Background Effects */}
    <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-orange-600/15 "></div>
    <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-orange-600/15 opacity-30"></div>

    <div className="relative z-10 px-8 py-8 md:px-12 ">
      <div className="max-w-3xl">
        <span className="inline-flex items-center bg-white/15 text-black text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-5">
          🚀 Get Started Today
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-5">
          {blog.cta.heading}
        </h2>

        <p className="text-black/80 text-lg leading-8 mb-8">
          {blog.cta.description}
        </p>

        <Link
          href={blog.cta.buttonUrl}
          className="inline-flex items-center gap-3 bg-[#C8921C] hover:bg-[#b27e17] transition-all duration-300 text-white font-semibold px-7 py-4 rounded-xl shadow-2xl"
        >
          {blog.cta.buttonText}
          <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  </div>
)}


{blog.tags?.length > 0 && (
  <div className="mt-10">
    <div className="flex flex-wrap gap-3">
      {blog.tags.map((tag, index) => (
        <Link
          key={index}
          href={`/tag/${encodeURIComponent(
            tag.toLowerCase().replace(/\s+/g, "-")
          )}`}
          className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm font-medium hover:bg-[#F1781B] hover:text-white hover:border-[#C8921C] transition-all duration-300"
        >
          {tag}
        </Link>
      ))}
    </div>
  </div>
)}




  </main>

{/* right sidebar */}
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