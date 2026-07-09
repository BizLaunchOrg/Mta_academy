import React from "react";

type LayeredHeadingProps = {
  backgroundText: string;
  foregroundText: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
};

const LayeredHeading: React.FC<LayeredHeadingProps> = ({
  backgroundText,
  foregroundText,
  eyebrow,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`relative ${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
            dark
              ? "bg-violet-500/20 text-violet-300"
              : "bg-violet-100 text-[#6200EE]"
          }`}
        >
          {eyebrow}
        </span>
      )}

      <div className="relative inline-block w-full max-w-4xl mx-auto">
        <span
          aria-hidden
          className={`block select-none font-black uppercase leading-none tracking-tight ${
            dark ? "text-white/[0.06]" : "text-gray-200"
          } text-[clamp(2.5rem,10vw,5.5rem)]`}
        >
          {backgroundText}
        </span>

        <h2
          className={`absolute inset-0 flex items-center justify-center font-extrabold uppercase tracking-tight text-[clamp(1.1rem,3.5vw,1.75rem)] ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          {foregroundText}
        </h2>
      </div>

      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-sm sm:text-base leading-relaxed ${
            isCenter ? "mx-auto" : ""
          } ${dark ? "text-violet-200" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default LayeredHeading;
