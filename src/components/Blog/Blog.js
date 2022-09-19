import { Button } from "react-bootstrap";
import "./Blog.scss";

function blogLinkClick(link) {
  const url = link;
  window.open(url, "_blank");
}

function Blog() {
  return (
    <div className="Blog" id="blogs">
      <h1 className="about-header" style={{ textAlign: "center" }}>
        Blogs
      </h1>
      <hr
        className="divider"
        style={{
          margin: "auto"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 auto"
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="https://www.joshwcomeau.com/assets/me-light.png"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">Why React Re-Renders</h4>
            <p className="blog-desc">
              I think this is true for lots of React developers. We understand
              enough to get by, but if you ask a group of React developers a
              question like “What triggers a re-render in React?”, you'll likely
              get a handful of different hand-wavy answers...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://www.joshwcomeau.com/react/why-react-re-renders/"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="https://miro.medium.com/max/630/1*Iq_xUySrcOf8k4ZwSeMzDw.jpeg"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">
              10 articles every ReactJS developer should read
            </h4>
            <p className="blog-desc">
              Welcome! If you’re reading this, you have probably been told that
              React is the best library for FrontEnd guys 👍.
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://samflab.medium.com/inserting-node-into-a-sorted-doubly-linked-list-67c638c4ec21"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="images/blog3.jpeg"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">Responsive Text in Flutter</h4>
            <p className="blog-desc">
              Have you ever come across a situation where you realized you have
              to resize your text according to different screen sizes?
              Unfortunately...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://samflab.medium.com/responsive-text-in-flutter-744fc830a9cd"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="https://miro.medium.com/max/875/0*iGLAJ1yZS9ba_ssY"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">Our Train of Thoughts</h4>
            <p className="blog-desc">
              It might seem like a vague question but have you ever put some
              thought into it? Being consumed by our thoughts and our thoughts
              consuming us...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://samflab.medium.com/us-and-our-thoughts-76321f6a7801"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
