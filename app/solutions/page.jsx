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

    
    <div className="w-full overflow-x-auto mt-10 bg-white p-4 px-10 mb-20">
      <div className="min-w-[1000px] border border-gray-300">
        {/* Header */}
        <div className="bg-[#0f172a] text-white text-center py-4">
        
          <p className="text-md md:text-lg mt-1 text-white">
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

       
      </div>
       <div className="text-sm text-black p-2 ">
          * Direct contact (phone + email) visibility is Inquiry Bazaar's core differentiator — included in ALL plans.
        </div>
    </div>




    <div className="w-full overflow-x-auto bg-white p-6">
      <div className="min-w-[1200px] border border-gray-300">

        {/* Top Header */}
        <div className="bg-[#111827] text-white text-center py-4">
          <h2 className="text-lg font-semibold">
             Business Investment Plans with GST Breakdown
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            GST Rate: 18% | Input Tax Credit available for all registered MSME buyers | Prices in INR (₹)
          </p>
        </div>

        {/* GST Row */} 
     
        {/* 6 Month Plans */}
        <div className="bg-[#1f2937] text-white text-center py-2 font-semibold">
          6-MONTH PLANS
        </div>

        <table className="w-full text-sm border-collapse">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="border p-2">Plan</th>
              <th className="border p-2">Base Price (₹)</th>
              <th className="border p-2">GST Amount (18%)</th>
              <th className="border p-2">Total Payable (₹)</th>
              <th className="border p-2">Effective / Month (₹)</th>
              <th className="border p-2">Annual if Renewed (₹)</th>
              <th className="border p-2">Savings vs Annual</th>
              <th className="border p-2">Best For</th>
              <th className="border p-2">Ideal Customer</th>
            </tr>
          </thead>

          <tbody>
            {[
  ["Starter", "40,000", "7,200", "47,200", "6,667", "72,000", "8,000", "New suppliers", "Small traders, new to digital"],
  ["Growth", "60,000", "10,800", "70,800", "10,000", "94,500", "10,500", "Growing businesses", "Active SMEs scaling up"],
  ["Pro", "95,000", "17,100", "1,12,100", "15,833", "1,62,000", "18,000", "Established suppliers", "Mid-size manufacturers"],
  ["Elite", "1,40,000", "25,200", "1,65,200", "23,333", "2,34,000", "26,000", "Exporters & top brands", "Large exporters, enterprise"],
].map((row, i) => (
              <tr key={i} className="text-center">
                {row.map((cell, j) => (
                  <td key={j} className="border p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* 1 Year Plans */}
        <div className="bg-[#1f2937] text-white text-center py-2 font-semibold mt-6">
          1-YEAR PLANS (Save up to 10% vs renewing 2x 6-month)
        </div>

        <table className="w-full text-sm border-collapse">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="border p-2">Plan</th>
              <th className="border p-2">Base Price (₹)</th>
              <th className="border p-2">GST Amount (18%)</th>
              <th className="border p-2">Total Payable (₹)</th>
              <th className="border p-2">Effective / Month (₹)</th>
              <th className="border p-2">Saving vs 2x 6-month (₹)</th>
              <th className="border p-2">Savings vs Annual</th>
              <th className="border p-2">Best For</th>
              <th className="border p-2">Ideal Customer</th>
            </tr>
          </thead>

          <tbody>
            {[
  ["Starter", "80,000", "14,400", "94,400", "6,667", "72,000", "-8,000", "New suppliers", "Small traders, new to digital"],
  ["Growth", "1,05,000", "18,900", "1,23,900", "8,750", "94,500", "-10,500", "Growing businesses", "Active SMEs scaling up"],
  ["Pro", "1,80,000", "32,400", "2,12,400", "15,000", "1,62,000", "-18,000", "Established suppliers", "Mid-size manufacturers"],
  ["Elite", "2,60,000", "46,800", "3,06,800", "21,667", "2,34,000", "-26,000", "Exporters & top brands", "Large exporters, enterprise"],
].map((row, i) => (
              <tr key={i} className="text-center">
                {row.map((cell, j) => (
                  <td key={j} className="border p-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      
        {/* Footer */}
        <div className="text-sm text-black p-3  mt-3">
          Annual plan subscribers receive: Priority onboarding within 48 hours + 1 month extended validity (13 months for price of 12). 
        </div>
    </div>




    </>
  );
}
