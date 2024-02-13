import weatherAppScreenshot from "../images/weatherApp.png";
export default function WeatherApp() {
  return (
    <section>
      <div className="projectContainer">
        <figure className="projectScreenshot">
          <h2>WEATHER APP</h2>

          <img
            src={weatherAppScreenshot}
            alt="weather app screenshot"
            className="projectImage"
          />
        </figure>
        <div className="projectNotes">
          <ul>
            <li>
              Developed a responsive and user-friendly Weather App for real-time
              weather updates.
            </li>
            <li>
              Utilised JavaScript, HTML, and CSS for frontend development.
            </li>
            <li>
              Integrated with a reliable weather API for accurate data
              retrieval.
            </li>
            <li>
              Applied asynchronous programming for enhanced responsiveness.
            </li>

            <li>
              Access the App
              <a
                id="WeatherAppLink"
                href="https://github.com/Geno419/WeatherApp"
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
