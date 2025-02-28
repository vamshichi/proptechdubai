import SpeakerCard from "./SpeakerCard";

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black pt-24 relative z-10">
          Meet Our Speakers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-8">
          {/* Amit Puri */}
          <SpeakerCard
            name="Amit Puri"
            jobTitle="Group CEO"
            companyName="BNW Developments"
            linkedIn="https://www.linkedin.com/in/amitpuri75"
            speakerImage="/image/speakers/AmitPuri.JPG"
            companyLogo="/image/speakersCompanyLogo/BnW Developments - Stack Logo.png"
            fullBio="Qualified as an Architect MBA, Amit has been working to contribute to the global real estate sector for two and a half decades. He has spent a decade in the region curating stories for mixed-use and retail assets. He believes in focusing on growing value through his varied expertise and network. He is currently the CEO at BNW Developments, where he sets direction with the Board to achieve profitable growth for his team of 300+ professionals. He oversees the function of sales, marketing, project design and delivery, HR, legal, technology, property management and experiential customer service. He is helping expand the company's market presence as well as share in the luxury branded residences domain and fostering partnerships with key stakeholders."
          />

          {/* Sam Achampong */}
          <SpeakerCard
            name="Sam Achampong"
            jobTitle="Regional Managing Director Asia, Middle East & Africa (AMEA)"
            companyName="Chartered Institute of Procurement & Supply (CIPS)"
            linkedIn="https://www.linkedin.com/in/samachampong/"
            speakerImage="/image/speakers/Sam Achampong photo pic.jpg"
            companyLogo="/image/speakersCompanyLogo/CIPS_Logo_Blue_RGB.jpg"
            fullBio="Sam is a senior executive with extensive experience across the Europe, Middle East and Africa (EMEA) region. He has held senior roles at Land Securities, Abu Dhabi Municipality, and MTN. He is an alumnus of the University of Oxford Business School and holds multiple degrees, including an MSc in International Procurement from the University of South Wales. Sam is a Fellow of the Chartered Institute of Procurement & Supply (CIPS) and a strong advocate for professional standards, diversity & inclusion, ESG, and sustainable supply chain practices."
          />
        </div>
      </div>
    </div>
  );
}
