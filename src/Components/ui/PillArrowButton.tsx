import React from "react";
import { Link } from "react-router-dom";

type PillArrowButtonProps = {
  children: string;
  variant?: "white" | "purple";
  to?: string;
  href?: string;
  external?: boolean;
  className?: string;
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M4 12L12 4M12 4H6M12 4V10"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const styles = {
  white: {
    pill: "bg-white text-gray-900 border border-gray-200 hover:border-[#6200EE]/40 hover:shadow-md",
    circle: "bg-[#6200EE] text-white group-hover:bg-[#4f00c2]",
  },
  purple: {
    pill: "bg-[#6200EE] text-white border border-[#6200EE] hover:bg-[#4f00c2] hover:border-[#4f00c2] hover:shadow-lg hover:shadow-violet-300/40",
    circle: "bg-white text-[#6200EE] group-hover:scale-105",
  },
};

const PillArrowButton: React.FC<PillArrowButtonProps> = ({
  children,
  variant = "white",
  to,
  href,
  external,
  className = "",
}) => {
  const s = styles[variant];

  const inner = (
    <>
      <span className="font-slab text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] whitespace-nowrap">
        {children}
      </span>
      <span
        className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${s.circle}`}
      >
        <ArrowIcon />
      </span>
    </>
  );

  const baseClass = `group inline-flex items-center justify-between gap-4 sm:gap-6 pl-6 sm:pl-8 pr-1.5 py-1.5 rounded-full transition-all duration-300 min-w-[220px] sm:min-w-[260px] ${s.pill} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={baseClass}
      >
        {inner}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClass}>
      {inner}
    </button>
  );
};

export default PillArrowButton;
