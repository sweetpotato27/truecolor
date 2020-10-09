import React from 'react';

class Info extends React.Component {

    render() {
        return(
            <div>
                <h1>Info</h1>
                <p>True Color is a collaborative community blog featuring photographers and artists.</p>
                <p>True Color was created and designed by <a href="https://instagram.com/cameronjgetty">Cameron Getty</a> and developed by <a href="https://github.com/sweetpotato27">Dylan Matthews</a>.</p>
                <p>To be considered as a contributor, please send us an introduction and samples of your work to <a href="mailto:truecolormag@gmail.com">truecolormag@gmail.com</a>.</p>
            {/* Warning: Failed prop type: You provided a `checked` prop to a form field without an `onChange` handler */}
            {/* Uncaught Error: input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML */}
                {/* <form action="action_page.php">
                    <div className="container">
                        <h2>Subscribe to the True Color Newsletter</h2>
                        <p>Get daily updates from the site.</p>
                    </div>

                    <div className="container" style="background-color:white">
                        <input type="text" placeholder="Name" name="name" required />
                        <input type="text" placeholder="Email address" name="mail" required />
                        <label>
                            <input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter </ input>
                        </label>
                    </div>

                    <div className="container">
                        <input type="submit" value="Subscribe" />
                    </div>
                </form> */}
            </div>
        );
    }
}

export default Info;