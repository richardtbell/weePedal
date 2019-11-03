import React, { Component } from "react";
import { Container } from "mdbreact";
import AboutUsFirst from "../img/AboutUsFirst.jpg"
import AboutUs2018LEVEL2_MOUNTAIN_BIKE_LEADER_RGB from '../img/AboutUs2018LEVEL2_MOUNTAIN_BIKE_LEADER_RGB.png'
import AboutUsChild_Protection_in_Sport_and_Active_Leisure from '../img/AboutUsChild_Protection_in_Sport_and_Active_Leisure.png'
import AboutUsWWVS from '../img/AboutUsWWVS.jpg'
import AboutUsVelotech from '../img/AboutUsVelotech.jpg'
import { SmallImage, Image } from "../StyledComponents/StyledComponents";
import certificate from '../img/certificate.jpg'
import ChildProtectionInSportAndActiveLeisure from '../img/ChildProtectionInSportAndActiveLeisure.jpg'
import OutdoorFirstAidCertificate from '../img/OutdoorFirstAidCertificate.jpg'
import RideLeaderL1 from '../img/RideLeaderL1.jpg'

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <div id="about">
          <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
              About Us
            </h2>
            <div class="grey-text text-center w-responsive mx-auto mb-5">
              <h3><strong>About A Wee Pedal</strong></h3>
              
              <p>We are a small family business based in Edinburgh who take great delight in offering tours in and around Edinburgh on a bicycle. We passionately believe in sustainable and active tourism and have enjoyed many cycling holidays ourselves. The National cycle path network allows us to guide you on mostly traffic free routes. Check out our tours or contact us if you don’t see what you are looking for! We can tailor make tours!</p>
              <p>We were chosen by Edinburgh City Council to be part of their film to promote Edinburgh City Transformation to encourage active travel in the city.</p>
              <p>Our son was diagnosed with Perthes disease as a 7 year old and determined to continue cycling as a family, we invested in a handcycle for him to keep active throughout the 2 year journey. We saw first hand the positive affect it had on him and us. We are passionate about keeping active on a bicycle and will always encourage you to enjoy the freedom of being on a bike. </p>
              <p>Leanne is an experienced PE teacher of over 20 years, with the last 12 years teaching internationally. She is a qualified Cycle ride leader, Play on Pedals leader and has up to date Outdoor First Aid and Child Protection certifications. She is also a British Cycling Mountain Bike Leader (Level 2) and has the Velotech Gold certificate which is a recognised qualification by Bicycle Association of Great Britain as one of the leading standards in professional bike mechanics. </p>
              <p>She currently volunteers at All Ability Cycling, a project that enables people to enjoy inclusive and adaptive cycling as well as being a volunteer ‘Breeze Champion’ for British Cycling. A wee Pedal’s pay it back scheme, takes place at Bridgend Farm where once a month, Leanne leads family rides funded by her company to help local families enjoy a cycle ride together. </p>
              <p>*<strong>*What we offer:**</strong></p>
              <p>Cycle tours in and around Edinburgh for both tourists to enjoy seeing Edinburgh and also locals who would like to enjoy a bike ride in their own city. </p>
              <p>Supported cycle rides for the less confident / reluctant cyclist. Travelling by bike can be a daunting experience if less experienced. I will accompany you and show you how to cycle safely on paths, quiet residential roads and show you how to negotiate traffic in Edinburgh.  </p>
              <p>Do you want a challenge? Do you want to achieve the feeling of completing a bigger ride of 30 miles or more? Always wanted to sign up for that Charity ride but don’t want to do it alone? I can be with you all the way and support you during the ride. No need to carry a backpack, worry about getting a puncture or not knowing what to eat on the ride. I will guide you through the day and carry all your supplies and fix that puncture should it happen. </p>
              <p>Do you want to use the car less? Want to run errands / small shopping trip on your bike? I shall accompany you and give you the skills and confidence so you don’t need to rely on the car for these short trips. </p>
              <p>Contact us if you don’t see what you are looking for. </p>
            </div>
            <Image height='500' src={AboutUsFirst} alt='Leanne cycling' className="columnCenter"/>
            <div class="grey-text text-center w-responsive mx-auto mb-5">
                <SmallImage src={AboutUs2018LEVEL2_MOUNTAIN_BIKE_LEADER_RGB} alt='2018 Level 2 Mountain Bike Leader'/>
                <SmallImage src={AboutUsChild_Protection_in_Sport_and_Active_Leisure} alt='Child Protection in Sport and Active Leisure'/>
                <SmallImage src={AboutUsWWVS} alt='Working with Visit Scotland'/>
                <SmallImage src={AboutUsVelotech} alt='Bike maintenance certificate'/>
                <SmallImage src={certificate} alt='Mountain Bike Leadership certificate'/>
                <SmallImage src={ChildProtectionInSportAndActiveLeisure} alt='Child Protection in Sports and Active Leasure certificate'/>
                <SmallImage src={OutdoorFirstAidCertificate} alt='Outdoor first aid certificate'/>
                <SmallImage src={RideLeaderL1} alt='Ride leadership level 1 certificate'/>
            </div>
          </section>
        </div>
      </Container>
            );
          }
        }
        
        export default AboutUs;
