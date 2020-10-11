import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {

  render() {
    return (
        <footer>
          <div class="column-left">
            <h2>True Color</h2>
            <p>True Color is a collaborative community blog featuring photographers and artists.</p>
          </div>

          <div class="column-right">
            <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
            <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
          </div>
        </footer>
    );
  }
}

export default Footer;
