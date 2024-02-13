import snakeGameScreenshot from "../images/snakeGame.png";

export default function Snake() {
  return (
    <section>
      <h2>SNAKE GAME</h2>

      <div className="projectContainer">
        <figure className="projectScreenshot">
          <img
            src={snakeGameScreenshot}
            alt="Snake game screenshot"
            className="projectImage"
          />
        </figure>
        <div className="projectNotes">
          <ul>
            <li>Created an engaging Snake Game with accessible game-play.</li>
            <li>
              Developed using JavaScript for dynamic interactions and HTML/CSS
              for a visually appealing layout.
            </li>
            <li>Implemented intuitive controls and smooth user experience.</li>
            <li>
              Integrated features such as scoring, level progression, and
              responsive design.
            </li>
            <li>
              Access the game
              <a
                id="WeatherAppLink"
                href="https://github.com/Geno419?tab=overview&from=2023-11-01&to=2023-11-30"
                target="blank"
              >
                &nbsp;here
              </a>
            </li>
            <li>
              Access the App
              <a
                id="WeatherAppLink"
                href="https://github.com/Geno419?tab=overview&from=2023-11-01&to=2023-11-30"
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
