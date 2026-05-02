"use client";

export default function PricingTable() {
  return (

    <>


      <section className="relative sb  w-full h-[50vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] bg-[#1A4D6E] flex items-center overflow-hidden">
      
      {/* Background Circles */}
      <div className="absolute right-[-100px] top-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full"></div>
      <div className="absolute right-[140px] bottom-[10px] w-[300px] h-[300px] bg-white/5 rounded-full"></div>

      {/* Content */}
      <div className=" px-6 md:px-12">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-400/20 text-yellow-400 text-sm font-semibold tracking-wide uppercase mb-3 md:mb-3">
         Open Positions
          </span>

          {/* Heading */}
          <h2 className="text-white text-3xl sc md:text-[50px] font-extrabold leading-tight mb-3 md:mb-3">
       Find the Role That Fits You Best
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-2xl">
         We're growing fast and looking for passionate people across all departments. Explore openings and take the next step in your career.
          </p>

        </div>
      </div>
    </section>

    
    <div className="w-full overflow-x-auto mt-10 bg-white p-4 px-10">
      <div className="min-w-[1000px] border border-gray-300">
        {/* Header */}
        <div className="bg-[#0f172a] text-white text-center py-4">
          <h1 className="text-lg font-semibold tracking-wide">
            INQUIRY BAZAAR PRIVATE LIMITED
          </h1>
          <p className="text-sm mt-1 text-gray-300">
           Subscription Module Packages — Pricing & Features (All prices exclusive of GST @ 18%)
          </p>
        </div>

        {/* Table */}
<table className="pricing-table w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border p-3 bg-[#111827] text-white text-left">
                FEATURE / PLAN
              </th>
              <th className="border p-3 bg-gray-100">Starter</th>
              <th className="border p-3 bg-yellow-100">Growth</th>
              <th className="border p-3 bg-blue-100">Pro</th>
              <th className="border p-3 bg-purple-100">Elite</th>
            </tr>
            <tr className="text-xs">
              <th className="border p-2 bg-gray-800 text-white"></th>
              <th className="border p-2 bg-gray-100 text-gray-600">Entry-level visibility</th>
              <th className="border p-2 bg-yellow-100 text-gray-600">Growth & leads</th>
              <th className="border p-2 bg-blue-100 text-gray-600">Established businesses</th>
              <th className="border p-2 bg-purple-100 text-gray-600">Exporters & top brands</th>
            </tr>
          </thead>

          <tbody>
            {/* Section */}
            <tr>
              <td colSpan={5} className="bg-[#111827] text-white p-2 font-semibold">
                LISTING & VISIBILITY
              </td>
            </tr>

            {[
              ["Product categories", "2 categories", "5 categories", "15 categories", "All categories"],
              ["Catalog / Website", "Static", "Dynamic (Own Website)", "Dynamic Customised (Own Website)", "Fully Customised (Own Website)"],
              ["Product listings", "Up to 12", "Up to 50", "Up to 150", "Up to 400"],
              ["Direct phone visible", "YES", "YES", "YES", "YES"],
              ["Direct email visible", "YES", "YES", "YES", "YES"],
              ["Supplier profile page", "Standard", "Enhanced", "Premium + badge", "Premium + Badge + video"],
              ["Trust badge", "-", "-", "YES", "YES"],
              ["Video profile", "-", "-", "YES", "YES"],
              ["Homepage banner", "-", "YES", "YES", "YES"],
              ["Search result position", "Standard", "Featured in category", "Top featured", "Homepage + #1 search"],
            ].map((row, i) => (
              <tr key={i} className="text-center">
                <td className="border p-2 text-left">{row[0]}</td>
                <td className="border p-2">{row[1]}</td>
                <td className="border p-2">{row[2]}</td>
                <td className="border p-2">{row[3]}</td>
                <td className="border p-2">{row[4]}</td>
              </tr>
            ))}

            {/* Section */}
            <tr>
              <td colSpan={5} className="bg-[#111827] text-white p-2 font-semibold">
                INQUIRIES & LEADS
              </td>
            </tr>

            {[
              ["Buyer inquiries / month", "Up to 50", "Up to 100", "Up to 150", "Unlimited + filtered"],
              ["WhatsApp alerts", "YES", "YES", "YES", "YES"],
              ["SMS alerts", "-", "-", "-", "YES"],
              ["Email alerts", "YES", "YES", "YES", "YES"],
              ["Lead quality filter", "-", "-", "-", "YES"],
              ["Live inquiry dashboard", "-", "Basic", "Basic", "Full analytics"],
            ].map((row, i) => (
              <tr key={i} className="text-center">
                <td className="border p-2 text-left">{row[0]}</td>
                <td className="border p-2">{row[1]}</td>
                <td className="border p-2">{row[2]}</td>
                <td className="border p-2">{row[3]}</td>
                <td className="border p-2">{row[4]}</td>
              </tr>
            ))}

            {/* Section */}
            <tr>
              <td colSpan={5} className="bg-[#111827] text-white p-2 font-semibold">
                MARKETING & PROMOTION
              </td>
            </tr>

            {[
              ["Social media posts/month", "-", "8 posts", "12 posts + 1 reels", "15 posts + 2 reels"],
              ["WhatsApp Business link", "YES", "YES", "YES", "YES"],
              ["Product catalogue PDF", "YES", "YES", "YES", "YES"],
              ["Weekly business report", "-", "-", "YES", "YES"],
              ["Monthly Business report", "YES", "YES", "YES", "YES"],
            ].map((row, i) => (
              <tr key={i} className="text-center">
                <td className="border p-2 text-left">{row[0]}</td>
                <td className="border p-2">{row[1]}</td>
                <td className="border p-2">{row[2]}</td>
                <td className="border p-2">{row[3]}</td>
                <td className="border p-2">{row[4]}</td>
              </tr>
            ))}

            {/* Section */}
            <tr>
              <td colSpan={5} className="bg-[#111827] text-white p-2 font-semibold">
                SUPPORT
              </td>
            </tr>

            {[
              ["Onboarding support", "Yes", "Yes", "Priority (within 15 days)", "Dedicated (10 days)"],
              ["Account manager", "-", "-", "YES", "YES"],
              ["GST invoice (input credit)", "YES", "YES", "YES", "YES"],
              ["Profile photoshoot voucher", "-", "-", "-", "-"],
            ].map((row, i) => (
              <tr key={i} className="text-center">
                <td className="border p-2 text-left">{row[0]}</td>
                <td className="border p-2">{row[1]}</td>
                <td className="border p-2">{row[2]}</td>
                <td className="border p-2">{row[3]}</td>
                <td className="border p-2">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-xs text-gray-600 p-2 border-t">
          * Direct contact (phone + email) visibility is Inquiry Bazaar's core differentiator — included in ALL plans.
        </div>
      </div>
    </div>
    </>
  );
}
