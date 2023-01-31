import React from "react";
import "./index.scss";
const testPage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#welcome">Welcome</a>
            </li>
          </ul>
        </nav>
        <h1 id="welcome">Welcome to my Simple Text Page</h1>
      </header>
      <main>
        <section>
          <h2>Introduction</h2>
          <p>This is a simple HTML page with text.</p>
        </section>
        <section>
          <h2>Using HTML for Web Pages</h2>
          <p>
            You can use HTML to create web pages and add content like text,
            images, and links.
          </p>
        </section>
        <section>
          <h2>Learning HTML</h2>
          <p>
            This is a great way to learn the basics of HTML and start building
            your own website.
          </p>
        </section>
      </main>
      <footer>
        <p>Copyright © 2023 by Your Name</p>
      </footer>
    </div>
  );
};

export default testPage;
