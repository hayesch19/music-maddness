import React, { Component } from 'react'
import HighKings from '../images/high-kings.jpg'
import FriendsForLife from '../images/friendsforlife.jpg'

class Kings extends Component {
  render() {
    return (
      <section>
        <h2>The High Kings</h2>
        <img className="band-photo" src={HighKings} alt="Band Photo" />
        <div className="album-area">
          <h3>Latest Album</h3>
          <img className="album-cover" src={FriendsForLife} alt="album cover" />
          <h4>Album Title: Friends For Life</h4>
          <h4>Release Date: January 20, 2013</h4>
        </div>
      </section>
    )
  }
}

export default Kings
