import React, { Component } from 'react'
import DKLogo from '../images/dk-logo.png'
import HKLogo from '../images/hk-logo.png'
import FMLogo from '../images/fm-logo.png'

class HomePage extends Component {
  render() {
    return (
      <main className="band-profile">
        <h2>My Favorite Irish Bands</h2>
        <div>
          <img className="band-logo" src={DKLogo} alt="" />
          {/* <h4 className="band-name">DropKick Murphys</h4> */}
          <p className="band-bio">
            Dropkick Murphys are an American Celtic punk band formed in Quincy,
            Massachusetts, in 1996. The band was initially signed to independent
            punk record label Hellcat Records, releasing five albums for the
            label, and making a name for themselves locally through constant
            touring and yearly St. Patrick's Day week shows, held in and around
            Boston.
          </p>
        </div>
        <div>
          <img className="band-logo" src={HKLogo} alt="" />
          {/* <h4 className="band-name">The High Kings</h4> */}
          <p className="band-bio">
            The High Kings are an Irish folk group formed in Dublin in 2008. The
            band consists of Finbarr Clancy, Brian Dunphy, and Darren Holden. By
            June 2016, the group had released four studio albums, two live
            albums, and two live DVDs. Their first three studio albums appeared
            at number three or higher on the Billboard world music chart, the
            first two went platinum in Ireland, and all of their albums charted
            in Ireland.
          </p>
        </div>
        <div>
          <img className="band-logo" src={FMLogo} alt="" />
          {/* <h4 className="band-name">Flogging Molly</h4> */}
          <p className="band-bio">
            Flogging Molly is an Irish–American seven-piece Celtic punk band led
            by Irish vocalist Dave King, formerly of the hard rock band Fastway.
            They are signed to their own record label, Borstal Beat Records.
          </p>
        </div>
      </main>
    )
  }
}

export default HomePage
