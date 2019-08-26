import React, { Component } from 'react'
import DropkickMurphys from '../images/dropkick-murphys.jpg'
import ShortStories from '../images/11shortstories.jpg'

class Dropkick extends Component {
  render() {
    return (
      <section className="band-profile">
        <h2>Dropkick Murphy's</h2>
        <img className="band-photo" src={DropkickMurphys} alt="Dropkick" />
        <div className="album-area">
          <h3>Latest Album</h3>
          <img className="album-cover" src={ShortStories} alt="album cover" />
          <h4>Album Title: 11 Short Stories of Pain & Glory</h4>
          <h4>Release Date: January 6, 2017</h4>
        </div>
      </section>
    )
  }
}

export default Dropkick
