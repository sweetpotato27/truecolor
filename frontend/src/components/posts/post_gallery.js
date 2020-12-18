import React from 'react';

class PostGallery extends React.Component {
    render() {
        return (
            <div className={`gallery-img gallery-img__${this.props.imageUrl}`}
                id={`${this.props.imageUrl}__${this.props.index}`}>
                <img className="image gallery-image" alt="" src={this.props.image}></img>
            </div>
        )
    }
}

export default PostGallery;