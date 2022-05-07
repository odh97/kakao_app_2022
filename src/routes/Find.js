import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/Find.scss';

function Find() {
  return (
    <div className='find'>
      <Header title_name = "Find" left_item_btn = "Edit" right_item_btn = "" />
      <main>
          <ul className="find_method">
              <li><a href="#"><i className="fas fa-address-book"></i>Fond</a></li>
              <li><a href="#"><i className="fas fa-qrcode"></i>QR Code</a></li>
              <li><a href="#"><i className="fas fa-mobile-alt"></i>Shake</a></li>
              <li><a href="#"><i className="fas fa-envelope"></i>Invite via SNS</a></li>
          </ul>
          <section className="recommend_section">
              <div className='header'><h2>Recommended Friends</h2></div>
              <ul>
                  <li>You Habe no recommended friends.</li>
              </ul>
          </section>
      </main>
      <Nav />
    </div>
  )
}

export default Find;