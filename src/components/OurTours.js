import React, { Component } from "react";
import {
  MDBRow,
  MDBContainer
} from "mdbreact";
import ReactMarkdown from "react-markdown";
import Tour from './Tour'
import TourBikeMaintenance from '../img/TourBikeMaintenance.jpg'
import TourCycleTourToTheCoast from '../img/TourCycleTourToTheCoast.jpg'
import TourDaVinciCodeAtRoslinChapel from '../img/TourDaVinciCodeAtRoslinChapel.jpg'
import TourMaryQueenOfScots from '../img/TourMaryQueenOfScots.jpg'
import TourForthBridgesTour from '../img/TourForthBridgesTour.jpg'
import TourFamilySupportRide from '../img/TourFamilySupportRide.jpg'
import TourEntryLevelMountainBikingAtCallendarEstateFalkirk from '../img/TourEntryLevelMountainBikingAtCallendarEstateFalkirk.jpg'
import TourEdinburghToFalkirkWheelKelpies from '../img/TourEdinburghToFalkirkWheelKelpies.jpg'
import BespokeSupportLedRides from '../img/BackgroundAndTour-BespokeSupportLedRides.jpg'
import TourUltimateEdinburghCircularTour from '../img/TourUltimateEdinburghCircularTour.jpg'

const tours =[
  {
    id: 1,
    TourName: "Cycle tour to the coast",
    TourBlurb:
      "Energy rating: Easy to Moderate. Families welcome if confident on a bike\r\n\r\nDistance: 12 miles\r\n\r\nTerrain: Short distances on roads. Traffic free cycle paths. All paved. \r\n\r\nWe shall start by cycling right beside Arthur's Seat, Edinburgh's extinct volcano and through Duddinston Village, passing Scotland's oldest surviving pub of 1860. We then cycle onto the National Cycle Network 1 path to Portobello beach. There we shall stop for a refreshment outside if sunny or indoors if the Scottish weather is against us! On our return journey we take\r\nthe Victorian-era Innocent Tunnel which was built in 1860 and goes underneath Holyrood Park. ",
    BookingLink:
      "https://www.eventbrite.co.uk/e/edinburgh-cycle-tour-to-the-coast-tickets-72262708707",
    TourImage: {
      src: TourCycleTourToTheCoast,
      alt: 'Cycle to the coast'
    }
  },
  {
    id: 2,
    TourName: "The ultimate Edinburgh circular tour",
    TourBlurb:
      "Energy rating: Moderate.  Suitable for people who can ride for 3-4 hours with a stop in between and for families with children of 13+\r\n\r\nDistance: 18 miles\r\n\r\nTerrain:  Some short distances on roads with traffic lights. Traffic free cycle paths which are all paved. Gravel paths. We will be using a cycle ramp purpose built for bikes down a set of steps. \r\n\r\nWe will complete a full circle around Edinburgh city. We start and finish in The Meadows and I will show you the beautiful parts of Edinburgh most visitors do not get the chance to see. Canals, aqueducts, railways, gardens, beaches, mountains and tunnels. This tour is approx 18 miles and we will stop for refreshments on the way. It is mainly flat but Edinburgh is built on 7 hills, so there will be some small short inclines along the way. We take our time and allow you to take lots of photos, which, I guarantee, you will take lots! We will circle Edinburgh city and will never be more than 2 miles from the centre. I shall give you a background about our route and give historical facts and information.",
    BookingLink:
      "https://www.eventbrite.co.uk/e/the-ultimate-circular-cycle-tour-of-edinburgh-tickets-80022797341",
    TourImage: {
      src: TourUltimateEdinburghCircularTour,
      alt: 'The ultimate Edinburgh circular tour'
    }
  },
    {
      id: 3,
      TourName: "Mary Queen of Scots",
      TourBlurb:
        "Energy rating: Easy, Suitable for families\r\n\r\nDistance: 6 miles\r\n\r\nTerrain: Short distances on roads. Traffic free cycle paths. All paved. Gravel paths within Castle grounds.\r\n\r\nWe shall cycle through the Victorian-era Innocent Tunnel and onto Craigmillar Castle where you can explore where Mary Queen of Scots escaped Edinburgh Castle. (entrance tickets to Craigmillar Castle not included) \r\nIf you have children, we can stop off at an impressive adventure playground and have a snack before cycling to Holyrood Palace to complete the story of Mary. Your tour will finish here.\r\n",
      BookingLink:
        "https://www.eventbrite.co.uk/e/cycle-tour-mary-queen-of-scots-tickets-80021467363",
      TourImage: {
        src: TourMaryQueenOfScots,
        alt: 'Craigmillar castle'
      }
    },
    {
      id: 4,
      TourName: "Forth Bridges ",
      TourBlurb:
        "Energy rating: Moderate to energetic: suitable for riders with some experience. Families welcome as long as children are confident cyclists. \r\n\r\nDistance: 25 miles\r\n\r\nTerrain: Short distances on roads. Traffic free cycle paths.  Gravel paths within Dalmeny grounds.\r\n\r\nA beautiful traffic free route out to South Queensferry to see the 3 Forth Bridges. This is a stunning ride and if the weather allows, we shall even cycle over the Forth Road Bridge! On our return, we go through the unspoilt Dalmeny House grounds. This tour requires riders to be confident on various terrain, including tarmac, gravel, and uneven road surfaces. \r\n\r\n",
      BookingLink:
        "https://www.eventbrite.co.uk/e/cycle-tour-edinburgh-to-forth-bridges-tickets-80025499423",
      TourImage: {
        src: TourForthBridgesTour,
        alt: 'Forth bridge'
      }
    },
    {
      id: 5,
      TourName: "Entry level mountain biking at Callendar Estate, Falkirk ",
      TourBlurb:
        "Perfect for families! This is an easy going mountain bike day out in Falkirk.\r\nRoutes are mainly green and blue, but there are some red routes on site too! \r\nA very well stocked cafe and BMX pump track is next to each other.\r\n\r\nPrice can be negotiated if you have your own transport. \r\nDiscounts for families.",
      BookingLink:
        "https://www.eventbrite.co.uk/e/mountain-bike-day-out-tickets-80026630807",
      TourImage: {
        src: TourEntryLevelMountainBikingAtCallendarEstateFalkirk,
        alt: 'Mountain biking'
      }
    },
    {
      id: 6,
      TourName: "Da Vinci Code at Roslin Chapel",
      TourBlurb:
        "Energy rating: Easy to Moderate. This route is perfect for families.\r\n\r\nDistance: 12 miles\r\n\r\nTerrain: This route is ENTIRELY traffic free on the new Sustrans cycle path\r\n\r\nWe shall meet at SHAWFAIR PARK car park and head straight onto the new Sustrans cycle path all the way to Roslin Chapel. \r\nWe will give you time to explore Roslyn Chapel should you wish. (Entrance fee  to Chapel not included)\r\n",
      BookingLink:
        "https://www.eventbrite.co.uk/e/da-vinci-code-at-roslin-chapel-tickets-80033842377",
      TourImage: {
        src: TourDaVinciCodeAtRoslinChapel,
        alt: 'Roslin Chapel'
      }
    },
    {
      id: 7,
      TourName: "Edinburgh to Kelpies and Falkirk Wheel",
      TourBlurb:
        "Energy rating: Moderate to hard \r\n \r\nDistance: 60 miles\r\n\r\nTerrain: Mostly flat. short distance on roads, Paved cycle path, gravel, cobblestone, grit\r\n\r\nThis is a wonderful day out on the bikes if you are looking for a longer ride.\r\nWe shall join the start of the Union Canal which was first in use in 1832 and cycle alongside the canal to Falkirk with scenic rest / refreshment stops en route. You can visit and go on the impressive Falkirk Wheel in action (entrance fee not included) and experience engineering at it’s very best connecting the Forth and Clyde Canal. \r\nThere is a well serviced cafe at The Falkirk Wheel so you can have lunch there or stop 3/4 of way back at The Bridge Inn in Ratho (8 miles outside Edinburgh ) \r\n",
      BookingLink:
        "https://www.eventbrite.co.uk/e/cycle-tour-to-kelpies-and-falkirk-wheel-tickets-80040839305",
      TourImage: {
        src: TourEdinburghToFalkirkWheelKelpies,
        alt: 'Kelpies'
      }
    },
    {
      id: 8,
      TourName: "Bespoke Support led rides",
      TourBlurb:
        "Please contact us to discuss a bespoke ride for you. Average of 3 hours including a refreshment break. ",
      BookingLink:
        "https://www.eventbrite.co.uk/e/bespoke-cycle-tour-tickets-80042863359",
      TourImage: {
        src: BespokeSupportLedRides,
        alt: 'Bespoke Support Led Rides'
      }
    },
    {
      id: 9,
      TourName: "Family support rides: Tailor made to suit you",
      TourBlurb:
        "These sessions will be 2 hours long and I can meet you at your house or an agreed location. I will customise the ride for you depending on your little one's riding ability. These will be fun, family friendly and safe sessions. The cost is £60 per family for 2 hours.",
      BookingLink:
        "https://www.eventbrite.co.uk/e/bespoke-cycle-tour-tickets-80042863359",
      TourImage: {
        src: TourFamilySupportRide,
        alt: 'Jack on a bridge'
      }
    },
    {
      id: 10,
      TourName: "Bike Service to get you back on the road",
      TourBlurb: "",
      TourImage: {
        src: TourBikeMaintenance,
        alt: 'Leanne fixing a bike'
      }
    }
  ];


class OurTours extends Component {
  render() {
    return (
      <MDBContainer>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">Our Tours</h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          <ReactMarkdown source={this.props.pageData} />
          </p>

          <MDBRow className="text-center">
            {tours.map((tour, i) => <Tour key={i} blurb={tour.TourBlurb} image={tour.TourImage} name={tour.TourName} bookingUrl={tour.BookingLink}/>)}
          </MDBRow>
        </section>
      </MDBContainer>
    );
  }
}

export default OurTours;
