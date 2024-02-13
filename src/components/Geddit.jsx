import GedditApp from "../images/Geddit.png";

export default function Geddit() {
  return (
    <section>
      <div className="projectContainer">
        <figure className="projectScreenshot">
          <h2>GEDDIT APP</h2>

          <img
            src={GedditApp}
            alt="Geddit app screenshot"
            className="projectImage"
          />
        </figure>
        <div className="projectNotes">
          <ul>
            <li>Created a Reddit clone application.</li>
            <li>
              Developed using JavaScript for dynamic interactions and React for
              visually appealing layout.
            </li>
            <li>
              Implemented intuitive components for a smooth user experience.
            </li>
            <li>Entire application relies on an API hosted by Render.</li>
            <li>
              Integrated features such as routing, navigation, getting, posting,
              and patching from API, and responsive design.
            </li>
            <li>
              Employed testing frameworks like Jest for unit and integration
              testing.
            </li>
            <li>
              Integrated error handling and logging to track and resolve issues
              efficiently.
            </li>
            <li>
              Utilized performance optimization techniques like code splitting
              and lazy loading for faster loading times.
            </li>

            <li>
              Access the App
              <a
                id="WeatherAppLink"
                href="https://delightful-baklava-6d63c2.netlify.app/?sortCriteria=date&sortOrder=null"
                target="blank"
              >
                &nbsp;here
              </a>
            </li>
            <li>
              Access the Front-End
              <a
                id="WeatherAppLink"
                href="https://github.com/Geno419/Reddit-Clone-Fe?tab=readme-ov-file"
                target="blank"
              >
                &nbsp;here
              </a>
              .
            </li>
            <li>
              Access the Back-End
              <a
                id="WeatherAppLink"
                href="https://github.com/Geno419/Reddit-clone"
                target="blank"
              >
                &nbsp;here
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
