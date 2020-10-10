import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

  render() {
    return (
        <footer>
          <div class="column-left">
            <h2>Info</h2>
            <p>True Color is a collaborative community blog featuring photographers and artists.</p>
            <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
          </div>

          <div class="column-right">
            <form>
              <h2>Newsletter Signup</h2>
              <p>Subscribe for daily updates from the blog.</p>
              <div class="info">
                <input type="email" placeholder="Email" />
              </div>
              <div class="newsletter-button">
                <button type="submit" value="Subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </footer>
    );
  }
}

export default Footer;
