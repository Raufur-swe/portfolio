
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group relative flex h-100 flex-col justify-between rounded-[34px] border border-neutral-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Top */}
      <div className="flex items-center justify-between">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div className="rounded-full border border-neutral-300 bg-white px-6 py-3">
          <img
            src={testimonial.logo}
            alt={testimonial.company}
            className="h-7 object-contain"
          />
        </div>
      </div>

      {/* Quote */}
      <div className="space-y-6">

        <FaQuoteLeft
          size={30}
          className="text-blue-300"
        />

        <h2 className="text-xl  font-semibold  text-neutral-900">
          {testimonial.quote}
        </h2>
      </div>

      {/* Bottom */}

      <div className="space-y-7">

        <div className="flex gap-4">

          <div className="w-0.5 bg-neutral-300"></div>

          <div>

            <h3 className="font-semibold text-lg">
              {testimonial.name}
            </h3>

            <p className="text-neutral-600">
              {testimonial.role}, {testimonial.company}
            </p>

            <p className="text-sm text-neutral-400">
              {testimonial.location}
            </p>

          </div>

        </div>

        <a
          href={testimonial.website}
          className="inline-flex items-center gap-2 text-lg font-medium transition-all group-hover:gap-3"
        >
          
          Visit site
        </a>

      </div>

    </div>
  );
};

export default TestimonialCard;