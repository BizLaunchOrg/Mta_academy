import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaPenNib } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

type CourseStatus = "ACTIVE" | "ENROLLING" | "UPCOMING";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  nextCohort: string;
  availability: string;
  availabilityHighlight?: boolean;
  status: CourseStatus;
  icon: ReactNode;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Public Speaking Cohort 12",
    description:
      "Master the art of the stage through psychological anchoring and vocal mastery.",
    duration: "8 Weeks",
    nextCohort: "Oct 1st",
    availability: "Few seats remaining",
    availabilityHighlight: true,
    status: "ACTIVE",
    icon: <FaUsers />,
  },
  {
    id: 2,
    title: "Advanced Algorithmia",
    description:
      "Theoretical computation and practical system design for elite architects.",
    duration: "12 Weeks",
    nextCohort: "Nov 15th",
    availability: "Open for enrollment",
    status: "ENROLLING",
    icon: <MdComputer />,
  },
  {
    id: 3,
    title: "Creative Narrative Design",
    description:
      "Building worlds and narrative loops for next-generation immersive experiences.",
    duration: "6 Weeks",
    nextCohort: "Jan 2026",
    availability: "Waitlist available",
    status: "UPCOMING",
    icon: <FaPenNib />,
  },
];

const statusStyles: Record<CourseStatus, { badge: string; dot?: string }> = {
  ACTIVE: {
    badge:
      "bg-violet-100 text-violet-700 border border-violet-200 font-semibold",
  },
  ENROLLING: {
    badge: "bg-gray-100 text-gray-600 border border-gray-200 font-semibold",
  },
  UPCOMING: {
    badge: "bg-gray-100 text-gray-500 border border-gray-200 font-semibold",
  },
};

function CourseCard({ course }: { course: Course }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-pointer"
      style={{
        boxShadow: hovered
          ? "0 20px 60px rgba(124, 58, 237, 0.15), 0 4px 20px rgba(0,0,0,0.08)"
          : "0 2px 16px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        minHeight: 360,
      }}
    >
      {/* Status badge */}
      <div className="flex justify-between items-start">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
          style={{ background: "#f3f0ff" }}
        >
          <span>{course.icon}</span>
        </div>
        <span
          className={`text-xs px-3 py-1 rounded-full ${statusStyles[course.status].badge}`}
        >
          {course.status}
        </span>
      </div>

      {/* Title + description */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2">
          {course.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Meta rows */}
      <div className="flex flex-col gap-2 text-sm border-t border-gray-100 pt-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Duration:</span>
          <span className="font-bold text-gray-900">{course.duration}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Next Cohort:</span>
          <span className="font-bold text-gray-900">{course.nextCohort}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Availability:</span>
          <span
            className={
              course.availabilityHighlight
                ? "font-bold text-red-500"
                : "font-bold text-gray-900"
            }
          >
            {course.availability}
          </span>
        </div>
      </div>

      <Link
        to="/enrollment"
        state={{ prefillProgram: course.title, prefillType: "cohort" }}
        className="mt-auto inline-flex items-center justify-center w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-colors"
      >
        Enroll Now
      </Link>
    </div>
  );
}

export default function CohortPage() {
  return (
    <div
      className="min-h-screen flex items-start justify-center p-6 md:p-8 pt-4 md:pt-6"
      style={{ background: "#f0eef8" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}