/* eslint-disable react/style-prop-object */
import React from "react";
import { useTheme } from "../components/ThemeProvider";
import "../styles/Home.css";

function Home() {
  const { theme } = useTheme();

  return (
    <div
      className={`h-screen ${
        theme === "dark" ? "dark" : "light"
      } flex justify-center items-center`}
    >
      <div className="home">
        <div className="about">
          <h2> Hi there, I'm Nadine</h2>
          <div className="prompt">
            <p>
              <span
                style={{ fontFamily: "VT323, monospace", fontSize: "38px" }}
              >
                Pixel Perfectionist
              </span>{" "}
              & <em>Your Go-To UI/UX Alchemist</em>: Crafting User Experiences
              with a Decade of Design, Debugging, and <br />
              Iced Coffee shaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
