import { FiArrowUpRight, FiEye } from "react-icons/fi";

const ProjectCard = ({ project, options = {} }) => {
  // Default Options
  const {
    image: showImage = true,
    description: showDescription = true,
    tech: showTech = true,
    actions: showActions = true,
  } = options;

  const {
    image,
    title,
    description,
    tech,
    details,
    liveLink,
  } = project;

  return (
    <div className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      {showImage && (
        <div className="relative overflow-hidden rounded-b-3xl p-4">
          <img
            src={image}
            alt={title}
            className="aspect-square w-full object-cover sm:h-60 lg:h-70 transition duration-700 group-hover:scale-110 rounded-2xl"
          />

          <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4 p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          {title}
        </h2>

        {/* Description */}
        {showDescription && (
          <p className="line-clamp-2 text-sm leading-6 text-neutral-500">
            {description}
          </p>
        )}

        {/* Tech Stack */}
        {showTech && (
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        {showActions && (
          <div className="flex items-center gap-3 pt-2">

            <a
              href={details}
              className="flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              <FiEye />
              View Details
            </a>

            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:bg-neutral-100"
            >
              Live Demo
              <FiArrowUpRight />
            </a>

          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;