import React, { Component } from 'react'

export default class Landing extends Component {

  render() {
    return (
      <div>

<nav>
    <h1><a href="#">Luncher</a></h1>
    <ul>
      <li><a href="./donate.html" className="btn">Donate</a></li>
      <li><a href="./signin.html" className="btn">Sign-In</a></li>
    </ul>
  </nav>

  <section className="splash">
      <div class="splash-image">
        <div class="splash-overlay"></div>
      </div>
      <div class="tagline">
        <h2>Help feed children, today!</h2>
          <br>
        <a href="./donate.html"><div class="btn">Donate</div></a>
      </div>
      
  </section>
  
  <section>
    <a href="#luncher-info" class="divider"><i class="leading-arrow fas fa-arrow-alt-circle-down"></i></a>
  </section>
  
  <section class="container-basic home">
    <section class="luncher-info" id="luncher-info">
      <a href="./signin.html"><div class="btn">Sign-in or Register</div></a>

      <div class="grid">


        <div class="icon-slider">
          <p class=" icon-left "><i class="fas fa-info"></i></p>
          <p class=" text-left ">There are kids who need healthy meals at school<br>
            Find a school in need, today, and help feed hungry kids</p>
        </div>
       

        <div class="icon-slider">
          <p class=" text-right ">Register today and help a school feed students in need</p>
          <p class=" icon-right "><i class="fas fa-school"></i></p>
        </div>


        <div class="icon-slider">
          <p class=" icon-left "><i class="fas fa-hand-holding-usd"></i></p>
          <p class=" text-left ">Sign-up and your donations are tax-deductable</p>
        </div>

        
        <div class="icon-slider">
          <p class=" text-right ">100% of your money goes to school lunches<br>
            and helps kids that need it the most</p>
          <p class=" icon-right "><i class="fas fa-heart"></i></p>
        </div>
       
      </div>
    </section>

    <section class="school-map">
      <div>
        <h3>Map of Schools</h3>
        <p class="description">
          Find schools near you that need donations now
        </p>
        <p class="map" id="mapid">
        </p>
      </div>
    </section>


    <section class="newsletter">
      <div class="newsletter-overlay">
        <form action="action_page.php">

          <div class="container-form">
            <h3>Subscribe to our Newsletter</h3>
            <p>Stay up to date with the latest Luncher news</p>
            <input type="text" placeholder="Name" name="name" required>
            <input type="text" placeholder="Email address" name="mail" required>
            <div class="btn" type="submit">
              Subscribe
            </div>
          </div>
        
        </form>
      </div>
    </section>


    <section class="contact">
      <div class="grid-col-4">
        <h3>Contact Us</h3>

        <p class=" icon">
          <i class="fas fa-envelope"></i>
        </p>
        <p class=" text" id="mapid">
          get@luncher.app
        </p>
        <a href=""><i class="social fab fa-twitter"></i></a>
        <p class="social-text">Follow us on Twitter!</p>
        
        <p class=" icon">
          <i class="fas fa-phone"></i>
        </p>
        <p class=" text" id="mapid">
          1-800-YUM-GIFT
        </p>
        <a href=""><i class="social fab fa-patreon"></i></a>
        <p class="social-text">Be our patrons on Patreon!</p>

        <p class=" icon">
          <i class="fas fa-map-marker-alt"></i>
        </p>
        <p class=" text" id="mapid">
          111 Yosemite Way<br>
          Mendocino, CA
        </p>
        <a href=""><i class="social fas fa-share-square"></i></a> 
        <p class="social-text">Share this page!</p>

      </div>
    </section>
  
  </section> <!-- container home -->


  <footer>
    <p>Copyright Luncher 2019</p>
  </footer>
      </div>
    )
  }
}
