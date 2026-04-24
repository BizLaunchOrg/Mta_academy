import BootcampsPage from "./BootcampsPage";
import CohortsPage from "./CohortPage";
import HeaderPage from "./HeaderPage";
import { useNavigate } from "react-router-dom";

export default function Program() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-3 relative z-20 lg:hidden">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-violet-700 hover:bg-violet-800 px-4 py-2 rounded-full shadow-md"
        >
          ← Back
        </button>
      </div>
      <section id="header">
        <HeaderPage />
      </section>
      <section id="cohorts">
        <CohortsPage />
      </section>
      <section id="bootcamps">
        <BootcampsPage />
      </section>
    </div>
  );
}