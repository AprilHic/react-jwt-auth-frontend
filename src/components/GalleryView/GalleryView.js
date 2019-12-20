import React, { Component } from 'react'
import './GalleryView.css'
import FlipPage from "react-flip-page";


class GalleryView extends Component {
  constructor(props) {
    super(props);

    this.flipPageSettings = {
      orientation: "horizontal",
      responsive: true,
      uncutPages: false,
      animationDuration: 350,
      treshold: 3,
      pageBackground: "transparent",
      flipOnTouch: true
    };

    this.pages = [
      { body: <img src="https://images.unsplash.com/photo-1544995228-a7a3abc39d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>},
      { body: <img src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"/> },
      { body: <img src="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/> },
      { body: <img src="https://images.unsplash.com/photo-1459792323369-14e51bb68de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/> },
      { body: <img src="https://images.unsplash.com/photo-1465505041184-f383907cc134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/> }
    ];
  }

  render() {
    const screenHeight = window.innerHeight;

    const playerStyles = {
      height: screenHeight,
      minHeight: screenHeight,
      width: "100%",
      margin: "0 auto",
      touchAction: "none"
    };

    const pageStyles = {
      height: screenHeight,
      minHeight: screenHeight,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
      textAlign: "center",
      backgroundColor: "#ffffff",
      touchAction: "none"
    };

    return (
      <div style={playerStyles}>
        <FlipPage {...this.flipPageSettings}>
          {this.pages.map((page, index) => (
            <article key={index} style={pageStyles}>
              <h1>{page.body}</h1>
            </article>
          ))}
        </FlipPage>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<GalleryView />, rootElement);

      
  



export default GalleryView
