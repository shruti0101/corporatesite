    import { client } from "@/lib/sanity";
    import { groq } from "next-sanity";
    import Link from "next/link";
    import Image from "next/image";


async function getBlogs(tag) {
  const searchTag = decodeURIComponent(tag).replace(/-/g, " ");

  return client.fetch(
    groq`
      *[
        _type == "blog" &&
        tags match $searchTag
      ] | order(date desc){
        title,
        excerpt,
        date,
        "slug": slug.current,
        "imageUrl": image.asset->url
      }
    `,
    {
      searchTag,
    }
  );
}

    export default async function TagPage({ params }) {
    const { slug } = await params;   

    const blogs = await getBlogs(slug);

    return (




        
       <div className="max-w-7xl mx-auto py-10 px-6 md:px-40">








        
  <h1 className="text-4xl font-bold mb-8 capitalize">
    Tag: {slug.replace(/-/g, " ")}
  </h1>

  <div className="grid grid-cols-1 gap-20">
    {blogs.map((blog) => (
      <Link
        key={blog.slug}
        href={`/blogs/${blog.slug}`}
        className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
      >
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={500}
            height={300}
            className="w-full h-120 py-10 object-contain"
          />
        )}

        <div className="p-5">
          <p className="text-sm text-gray-500 mb-2">
            {new Date(blog.date).toLocaleDateString()}
          </p>

          <h2 className="text-xl font-bold mb-3 line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-gray-600 line-clamp-3">
            {blog.excerpt}
          </p>

          <div className="mt-5 text-[#F1781B] font-semibold">
            Read More →
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>
    );
    }