import React, { Component } from 'react'
import FloggingMolly from '../images/flogging-molly.jpg'
import LifeIsGood from '../images/lifeisgood.jpg'

export class Molly extends Component {
  render() {
    return (
      <section>
        <h2>Flogging Molly</h2>
        <img className="band-photo" src={FloggingMolly} alt="Band Photo" />
        <div className="album-area">
          <h3>Latest Album</h3>
          <img className="album-cover" src={LifeIsGood} alt="album cover" />
          <h4>Album Title: Life Is Good</h4>
          <h4>Release Date: June 2, 2017</h4>
        </div>
      </section>
    )
  }
}

export default Molly
