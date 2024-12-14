// src/components/about/AboutUs.jsx
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/Images/AboutUs.jpg"
              alt="Doctor"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              ABOUT US
            </h2>
            <p className="text-gray-700 leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don&apos;t look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything
              embarrassing hidden in the middle of text. All
            </p>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;