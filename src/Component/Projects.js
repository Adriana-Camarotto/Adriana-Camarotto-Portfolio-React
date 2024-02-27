import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Notes from "../Assets/screenshotNotes.png";
import MySpotify from "../Assets/screenshoSpotify.png";
import Brigadeiro from "../Assets/ScreenshotBrigadeiro.png";
import Tea from "../Assets/ScreenshotTeaRecipe.png";
import NWL from "../Assets/ScreenshotNLWeSports.png";
import Horiseon from "../Assets/ScreenshotHoriseon.png";
import WeekendFuntimes from "../Assets/WeekendFuntimes.png";
import Odyssey from "../Assets/Odyssey.png";
import CodingQuiz from "../Assets/CodingQuiz.png";
import Myteam from "../Assets/Myteam.jpeg";

function Projects() {
  return (
    <Container>
      <section className="projects">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 jumbotron mb-3 team-heading">
              <h1 className="text-center">My Projects</h1>
            </div>
          </div>
        </div>
        <div className="row">
        <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={MySpotify}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">My Spotify</Card.Title>
              <Card.Text className="cardText">
                Users can create new notes effortlessly. 
                Existing notes can be edited or deleted as needed.
                Ever struggled to find a specific note?
                Fear not! This includes a powerful search feature that lets
                you find notes by typing in keywords. It uses the Local Storage feature to store data locally in
                your browser. Even if you close the app, your precious notes
                will remain accessible.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="N"
                href="https://my-spotfy.netlify.app"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="MySpotify"
                href="https://github.com/Adriana-Camarotto/myspotify_react"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>
        
          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={Notes}
              style={{  width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">Notes</Card.Title>
              <Card.Text className="cardText">
                Users can create new notes effortlessly. 
                Existing notes can be edited or deleted as needed.
                Ever struggled to find a specific note?
                Fear not! This includes a powerful search feature that lets
                you find notes by typing in keywords. It uses the Local Storage feature to store data locally in
                your browser. Even if you close the app, your precious notes
                will remain accessible.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="N"
                href="https://notes-expert-nlw.netlify.app/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="Notes"
                href="https://github.com/Adriana-Camarotto/nlw-expert-notes"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={Odyssey}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">Odissey</Card.Title>
              <Card.Text className="cardText">
                Provides current details on attractions, events, and more for
                tourists to make informed choices. Users can access detailed
                descriptions and photos via search.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://lovely-torrone-a23b28.netlify.app/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/odyssey-travel-companion"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={WeekendFuntimes}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">Weekend Funtimes</Card.Title>
              <Card.Text className="cardText">
                The Weekend Funtimes Planner lets event planners choose themes
                with APIs to filter movie options and camping locations based on
                weather forecasts, perfect for event planning companies.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WWeekend"
                href="https://abuttle2.github.io/weekend-funtimes/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/weekend-funtimes"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={CodingQuiz}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">Code Quiz </Card.Title>
              <Card.Text className="cardText">
                Here's a fun way to learn! Take a timed coding quiz on
                JavaScript fundamentals multiple-choice questions, and store
                your high scores to gauge your progress compared to your peers.
                Spend some time learning and have fun!
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WCodeQuiz"
                href="https://adriana-camarotto.github.io/Code-Quiz/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/Code-Quiz"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={Myteam}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">
                Team Profile Generator
              </Card.Title>
              <Card.Text className="cardText">
                A command-Line application that takes in information about
                employess on a software engineering team and generates an HTML
                webpage that displays summaries for each person.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WmyTeam"
                href="https://github.com/Adriana-Camarotto/Team-profile-generator"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/Team-profile-generator"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={Brigadeiro}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">Brigadeiro Recipe</Card.Title>
              <Card.Text className="cardText">
                Know how to make the perfect brigadeiro, the famous Brazilian
                sweet. Learn the recipe step-by-step and create the perfect
                treat to you and your loved ones.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btnbrigadeiro"
                href="https://adriana-camarotto.github.io/Brigadeiro-Recipe/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/Brigadeiro-Recipe"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={Tea}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">Tea Recipe</Card.Title>
              <Card.Text className="cardText">
                Learn how to make a perfect tea whit my project done in "The 5
                Day Coding Challenge" Event were held by Code Institute.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btnbrigadeiro"
                src="WbrigadeiroW"
                href="https://adriana-camarotto.github.io/5DCC/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/5DCC"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={NWL}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">NWL - Challenge</Card.Title>
              <Card.Text className="cardText">
                Project built during the Next Level Week - eSports. Event held
                by Rocketseat. Where was developed a brilliant project of the
                universe of games, to learn new skills and technologies and
                accelerate the career as dev.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="Wnwl"
                href="https://adriana-camarotto.github.io/NLW-sports-explorer/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/NLW-sports-explorer"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>

          <Card className="Card-body" style={{ width: "640px" }}>
            <Card.Img
              variant="top"
              src={Horiseon}
              style={{ width: "580px", height: "350px" }}
            />
            <Card.Body>
              <Card.Title className="cardTitle">Horiseon</Card.Title>
              <Card.Text className="cardText">
                This is a code refactor for Horiseon webpage. It was On-the-job
                ticket challenge proposed from the Front End Web Development
                Bootcamp from edX.
              </Card.Text>
              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WHoriseon"
                href="https://adriana-camarotto.github.io/Horiseon-Code-Refactor/"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>

              <a
                className="btn btn-outline-warning"
                id="btn"
                src="WOdyssey"
                href="https://github.com/Adriana-Camarotto/Horiseon-Code-Refactor"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Card.Body>
          </Card>
        </div>
      </section>
    </Container>
  );
}

export default Projects;
