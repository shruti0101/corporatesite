export default function WhatWeDo() {
  return (

    <>
    
    <section className="w-full bg-[#1A4D6E] pt-16 px-6 md:px-24">
      
      {/* Top Left Brand */}
      <div className="flex items-start gap-4 mb-12">
        <div className="w-[3px] h-[42px] bg-white" />
        <div>
          <p className="text-white text-[18px] font-semibold tracking-wide">
            INQUIRY BAZAAR
          </p>
          <p className="text-white text-[14px] mt-[2px]">
            inquirybazaar.com
          </p>
        </div>
      </div>

      {/* Tag */}
      <div className="inline-block bg-yellow-500/30 text-white text-[13px] px-4 py-[6px] rounded-full font-medium mb-6">
        WHAT WE DO
      </div>

      {/* Heading */}
      <h1 className="text-[44px] md:text-[64px] leading-[1.1]  text-white font-semibold tracking-[-0.5px] mb-5">
        Your Number. <br />
        Your Buyer. Direct.
      </h1>

      {/* Subtext */}
      <p className="text-white text-[18px] mb-12">
        No middlemen. No shared leads. No guesswork.
      </p>

      {/* Divider */}
      <div className="border-t border-[#D6DFDA] mb-12"></div>

     
    </section>

    <section className="max-w-7xl mx-auto">
         {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Card */}
        {[ 
          {
            no: "01",
            title: "Your Exclusive\nCatalog Page",
            desc: "A dedicated page with your products, your story, and your real contact details — fully visible."
          },
          {
            no: "02",
            title: "Targeted\nCall Ads",
            desc: "Buyers searching your exact product category see your number and call you — no one else."
          },
          {
            no: "03",
            title: "Limited.\nGenuine. Yours.",
            desc: "Only the leads you can actually handle. Quality over quantity — always."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#F8FBF9] border border-[#E1EAE5] rounded-[14px] p-6"
          >
            {/* Number Badge */}
            <div className="bg-yellow-500/30 text-black text-[13px] font-semibold px-3 py-[4px] rounded-md inline-block mb-4">
              {item.no}
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] leading-snug whitespace-pre-line mb-2">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="text-[16px] text-[#5F6F68] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>



     <section className="w-full px-6 md:px-24 py-12 bg-white">
      
      {/* Quote Box */}
      <div className="relative bg-[#e2eaff] rounded-xl px-10 py-10 mb-10">
        
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 h-full w-[6px] bg-[#c0c9fb] rounded-l-xl" />

        {/* Quote */}
        <p className="text-center text-[28px] md:text-[32px] italic  text-black leading-snug">
          “You run your factory. We bring you the buyer.”
        </p>

        {/* Subtext */}
        <p className="text-center text-[#5F6F68] text-[15px] mt-3">
          — The Inquiry Bazaar Promise
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E3E3E3] mb-8"></div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        
        {[
          {
            no: "01",
            title: "Your catalog. Your identity.",
            desc: "We build a dedicated page around your business — your products, your mobile number, your email ID. Fully visible. Fully yours. Buyers see exactly who they are reaching before they even dial.",
          },
          {
            no: "02",
            title: "Call ads that target your exact buyer.",
            desc: "We run targeted call ads based on your product category and location. When a serious buyer searches, they find your number — not a shared inbox of 10 competing suppliers.",
          },
          {
            no: "03",
            title: "Filtered leads. Zero extra cost.",
            desc: "No extra manpower. No hidden charges. No spam. We send you only as many inquiries as you can handle — quality over quantity. You focus on production. We handle discovery.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative bg-[#F7F7F7] border border-[#E5E5E5] rounded-2xl px-16 py-8"
          >
            
            {/* Big Ghost Number */}
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[48px] font-serif text-[#D6D6D6]">
              {item.no}
            </span>

            {/* Content */}
            <div>
              <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-2">
                {item.title}
              </h3>

              <p className="text-[15px] text-[#5F6F68] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>


     <section className="w-full bg-[#e8eff7] py-16 px-6 md:px-24">
      
      {/* Tag */}
      <div className="inline-block bg-[#D7E8E1] text-[#2C7A67] text-[13px] px-4 py-[6px] rounded-full font-medium mb-6">
        THE COMPARISON
      </div>

      {/* Heading */}
      <h2 className="text-[40px] md:text-[46px] leading-[1.15]  text-[#1A1A1A] font-semibold mb-12 tracking-[-0.5px]">
        Why settle for a listing when you can own the call?
      </h2>

      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-[#E5E5E5] border-collapse">
          
          {/* Header */}
          <thead>
            <tr className="bg-[#121212] text-white text-left">
              <th className="px-6 py-4 text-[15px] font-semibold w-[40%]">
                Feature
              </th>
              <th className="px-6 py-4 text-[15px] font-semibold text-center">
                IndiaMart
              </th>
              <th className="px-6 py-4 text-[15px] font-semibold text-center">
                TradeIndia
              </th>
              <th className="px-6 py-4 text-[15px] font-semibold text-center bg-[#0a3f80]">
                Inquiry Bazaar
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="text-[15px]">
            {[
              ["Real contact visible to buyer", "Hidden", "Hidden", "✔ Always"],
              ["Leads exclusive to you", "Shared (10+)", "Shared", "✔ Yours only"],
              ["Buyer calls you directly", "Via platform", "Via platform", "✔ Direct call"],
              ["Inquiry quality filter", "None", "None", "✔ Genuine only"],
              ["Extra manpower needed", "Yes", "Yes", "✔ Never"],
              ["Dedicated catalog page", "No", "No", "✔ Built for you"],
              ["Transparent pricing", "No", "No", "✔ Always"],
            ].map((row, i) => (
              <tr
                key={i}
                className="border-t border-[#E5E5E5] bg-white"
              >
                {/* Feature */}
                <td className="px-6 py-4 text-[#1A1A1A]">
                  {row[0]}
                </td>

                {/* IndiaMart */}
                <td className="px-6 py-4 text-center text-[#6B6B6B]">
                  {row[1]}
                </td>

                {/* TradeIndia */}
                <td className="px-6 py-4 text-center text-[#6B6B6B]">
                  {row[2]}
                </td>

                {/* Inquiry Bazaar Highlight */}
                <td className="px-6 py-4 text-center bg-[#dfe9f6] text-[#1F7A63] font-medium">
                  {row[3]}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </section>



    <section className="w-full bg-[#F4F6F5] px-6 md:px-24 py-16">

      {/* Heading Line 1 */}
      <h2 className="font-serif text-[36px] md:text-[48px] text-[#1A1A1A] leading-[1.2] mb-2">
        Others give you a listing.
      </h2>

      {/* Heading Line 2 (Italic Green) */}
      <h2 className="font-serif italic text-[36px] md:text-[48px] text-black leading-[1.2] mb-8">
        We give you a direct line to your buyer.
      </h2>

      {/* Divider */}
      <div className="border-t border-[#E2E2E2] mb-8"></div>

      {/* Quote Box */}
      <div className="relative bg-white rounded-xl px-10 py-10 mb-10">
        
        {/* Left Accent */}
        <div className="absolute left-0 top-0 h-full w-[6px] bg-[#d0e2fd] rounded-l-xl" />

        {/* Quote */}
        <p className="text-center font-serif italic text-[26px] md:text-[30px] text-black leading-snug">
          “Stop being invisible. Start getting called.”
        </p>

        {/* Subtext */}
        <p className="text-center text-[#5F6F68] text-[14px] mt-3">
          — Inquiry Bazaar · inquirybazaar.com
        </p>
      </div>

      {/* CTA Button */}
      <div className="w-full">
        <div className="bg-[#1b3774] text-white text-center rounded-2xl py-6 md:py-7 text-[18px] md:text-[20px] font-medium tracking-wide">
          List your business today <span className="mx-2">→</span> www.inquirybazaar.com
        </div>
      </div>

    </section>
    </>


  );
}