import BootcampsPage from "./BootCampsPage";
import CohortsPage from "./CohortPage";
import HeaderPage from "./HeaderPage";

export default function Program() {
  return (
    <div>
     <section id="header">
        <HeaderPage />
      </section>
       <section id="cohorts">
        < CohortsPage/>
      </section>
         <section id="bootcamps">
        < BootcampsPage/>
      </section>
      </div>
  )
}