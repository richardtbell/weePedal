import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ReactMarkdown from 'react-markdown'

function compare( a, b ) {
  if ( a.testimonial_blurb.length > b.testimonial_blurb.length ){
    return -1;
  }
  if ( a.testimonial_blurb.length < b.testimonial_blurb.length ){
    return 1;
  }
  return 0;
}

const testimonials = [
  {reviewer_name_and_location: 'Kristin, USA, October 2019', testimonial_blurb: 'Leanne is a wonderful guide and the cycle to the coast was beautiful and a great way to get to know a little more about the history of Edinburgh and what lies just outside of it too. The ride itself is not too difficult and Leanne is very conscientious of individual cycling needs and abilities. I was actually the only one on this tour for the day which made the whole experience even more unique! I felt immediately comfortable and like I was in good hands with Leanne (and her son who joined!). They were both amazing and informative with connecting history to the places we stopped to along the way and it was great to share stories and connect experiences with one another. Leanne also took photos of us throughout the tour which was great that I didn’t have to worry about that while riding. And the cafe on the coast was a perfect, cozy spot to warm up with a latte and slice of delicious cake before our ride back to the city! Beyond the ride itself, Leanne was also very helpful with suggestions and information about touring within Edinburgh. She suggested things I never would have thought or known to do which was really great :) I definitely would recommend touring with Leanne to have a more authentic experience in Edinburgh!'},
  {reviewer_name_and_location: 'Aishwaray, India, October 2019', testimonial_blurb: 'I was at my lowest fitness levels and the cycling seemed the hardest thing i have ever done. Leanne waited for me when i was slowing down or stopping , motivated me throughout , showed amazing places ( which you would otherwise for sure miss) , and was being the best host ever. Very thankful for this experience i took. Will recommend this to anyone who has good fitness for your own benefit. But Leanne is the best! Thankyou'},
  {reviewer_name_and_location: 'Mi, China, October 2019', testimonial_blurb: 'Wonderful experience! Leanne is very friendly to us. She has guided us through some very beautiful and quiete path. The bikes are very light and easy to ride. A bit tired but very worthy to me. 行程很不错,爱丁堡的郊区小径很漂亮,车也很轻巧好骑,有些上坡比较累,年轻人冲一把没什么问题｡Leanne在上海和香港呆过,会说一些中文｡有兴趣的朋友可以放心参加｡'},
  {reviewer_name_and_location: 'Mark, Austraila, September 2019', testimonial_blurb: 'Leanne has a deep love of her city and surroundings, the tour was very friendly and informative with just the right amount of cardio .would definitely recommend a wee ride'},
  {reviewer_name_and_location: 'Kate, USA, September 2019', testimonial_blurb: 'When you are in Edinburgh, book this biking experience with Leanne! She is prepared, professional and super fun! My husband and I decided to come to Scotland for our 30th Anniversary. Our trip was a perfect combination of pre-planned and spontaneous adventures. We decided to book the biking trip with Leanne once we were here because it looked like the right combo of exercise, meeting new people and learning more about the area. Leanne is extremely enthusiastic, knowledgeable and fun-loving! She made our last day in Edinburgh our most memorable.'},
  {reviewer_name_and_location: 'Heather, Austrialia, September 2019', testimonial_blurb: 'I had a lovely afternoon with Leanne and connected some lovely people, Kate and Mike from the U.S.A. We learned of the local area and history of this part of Scotland. Definitely better than trying to navigate this by yourself. I would absolutely recommend this ride for all levels of cyclists. Well done Leanne. Lovely warm, friendly person Thank you so much'},
  {reviewer_name_and_location: 'Steven, USA, September 2019', testimonial_blurb: 'A great way to see something a little different, even if your only in Edinburgh for a couple of days. Leanne is a great host with a locals insight. I would definitely recommend this tour.'},
  {reviewer_name_and_location: 'Lisa, USA, September 2019', testimonial_blurb: 'The quick & short: don’t miss this guided bicycle tour of beautiful Edinburgh! :-) “.A Wee Pedal”is a must do experience! You will see the most amazing parts of Edinburgh cycling around & even underneath Arthur’s seat as you journey toward Porto Bello - a truly lovely part of the Scottish seaside that is not to be missed! This cycling tour has something in it for everyone! If you are an everyday cyclist you will indeed get to enjoy cycling yet there is also just the perfect amount of places to stop and see. The ride is perfectly balanced & flowing. The pace of the ride is perfect. Leanne is a witty, clever, & attentive guide with a love for Edinburgh & highly knowledgeable about the area. You can relax and be yourself with her, laugh, have fun, & get to see things you’d never find on your own. I’ll be writing about this excursion on my website & travel blog as well - & I reserve only the very best experiences / guided excursions for that. Enough from me! Book this tour! Can’t recommend enough! :-)'},
  {reviewer_name_and_location: 'Joe, China, September 2019', testimonial_blurb: 'Leanne\'s cycling tour is really terrific! we were lucky that only our family attended this tour yesterday afternoon. Leanne prepared suitable cycles for us n supplied all necessary gears including helmets n gloves. the route was deliberately set up, which was safe yet exciting. we went through #1 cycling route from Meadows all the way down to Portobello beach. on the way back to the city, we tried different route n crossed the tunnel underneath Arthur\'s Seat, which is thrilling! we enjoyed our 1st day in Edinburgh with this cycling tour so much. thank u, Leanne!'},
  {reviewer_name_and_location: 'Jennifer, USA, July 2019', testimonial_blurb: 'Leanne\'s bike tour has been a highlight of my stay in Edinburgh. I am here for research, but taking fun outings on weekends. I knew I wouldn\'t bike on new city streets or know the best paths without a guide so I signed up. BEST EVER!!! Leanne even personalized a couple of tour spots because she knew of my interest in religious history. Along the beach we stopped for coffee, ice cream, and chat, and Leanne was simply delightful. What took it to the next level was her assistant for the day Jack, her 10 year old son. He added in some facts along the way, and was quite impressive with his bike skills and World War I knowledge. Truly a delight and joy of an outing. For those nervous about biking, Leanne was incredibly attentive and safe in guiding on bike paths and roadways. The bike she provided was a dream to ride and I only wish I could take back to the USA. Gloves and helmet were great. This particular path does not have much elevation, only a couple of brief and fairly easy climbs (but really quite minimal) so no need to be nervous! If you are looking for something fun to do solo or with friends or the whole family, highly recommend.'},
  {reviewer_name_and_location: 'Mary Lynn, USA, July 2019', testimonial_blurb: 'My bike experience with Leanne was wonderful. The tour ended up just being her and I and since I am a cyclist it was nice to not have to wait around for other people to catch up. The experience was like riding with a friend rather than a tour guide. She took pictures and posted them and we laughed and shared stories. She even took me to Craigmillars Castle after I expressed a fondness for castles. I loved the route we took and learned about many areas that we traversed. Leanne was kind, friendly and very enjoyable to spend the morning with. The location for the start of the tour was in front of a magnificent Victor Hugo café with great food . Easy to find. I highly recommend taking a bike tour with Leanne. She was so much fun.'},
  {reviewer_name_and_location: 'Naveen, India, June 2019', testimonial_blurb: 'If one wants to experience "Real Edinburgh", then chuck all other "site seeing plans" and ride along with Leanne. You will see real country side of city along side the cannal and sea... You can encircle entire city and see some breathtaking views of Edinburgh... Along side the entire ride, you will come to know about "hidden gems" and the story behind it...like "innocent railway, the tunnel"... You will also treasure pictures which will be taken by Leanne and her husband along side the entire trip... An unforgettable experience which needs to be "experienced" in a life time of you are visiting Edinburgh'},
  {reviewer_name_and_location: 'Kathy + Pete, USA, June 2019', testimonial_blurb: 'Touring on bike with Leanne was fantastic! She really has a deep knowledge and understanding of the area, and sets the tour at the perfect pace for the group that she’s leading. Without a doubt, this was the highlight of our Edinburg adventure. The length of the trip, the sites along the way, and everything else about biking with Leanne could’ve been more enjoyable. Thank you so much.'},
  {reviewer_name_and_location: 'Victoria, USA, June 2019', testimonial_blurb: 'Leanne was an excellent host and we highly recommend this tour. She was knowledgeable about history and the area and a fun and friendly person.'},
  {reviewer_name_and_location: 'Estella, USA, June 2019', testimonial_blurb: 'This is a great way to see more of Edinburgh beyond the Royal Mile! It’s a very scenic ride with someone knowledgeable about the history surrounding you. I recommend this experience.'},
  {reviewer_name_and_location: 'Amy, USA, June 2019', testimonial_blurb: 'We had such a great time! Leanne was so kind and accommodating to our group with different ages and abilities. The ride was beautiful and exciting and I loved every moment! I highly recommend this trip.'},
  {reviewer_name_and_location: 'Magnus, Sweden, June 2019', testimonial_blurb: 'Good tour with some nice scenery and a bit of excercise while you\'re at it! The tunnel back under Arthurs seat is quite spectacular!'},
  {reviewer_name_and_location: 'Kim, USA, June 2019', testimonial_blurb: 'My family can’t begin to share how special this event was for us. Leanne took us to Musselburgh and helped up to explore some of our family history. It was very special for our family and Leanne was so kind and accommodating. The bike ride was perfect for our family and my 9 and 11 year old completed it easily. Leanne was upbeat and great company. She took great care of all of us. My son wanted to do it again the next day. Loved it!!'},
  {reviewer_name_and_location: 'Daniel, Moscow, June 2019', testimonial_blurb: 'I am happy I decided to go for a cycling tour with Leanne while I was in Edinburgh for a few days. The trip itself went nice and smooth. It was a pleasure to chat to Leanne, and she shared quite a few insights about Edinburgh and surroundings so now I feel like I know a lot of interesting things about the area. Highly recommended!'},
  {reviewer_name_and_location: 'Jae Hui, Korea, June 2019', testimonial_blurb: 'It was an opportunity to have a special and fun experience. The weather was so fine during the tour. If you want a unique and active tour, I recommend it.'},
  {reviewer_name_and_location: 'Kate, USA, June 2019', testimonial_blurb: 'Fantastic and unique ride out from Edinburgh, taking a scenic route around Arthur’s seat and beyond. Thoroughly enjoyable even without much riding experience. Leanne was a terrific guide and very easy to talk to and to ask a lot of questions. I would really recommend this tour to anyone.'},
  {reviewer_name_and_location: 'Jacquie, USA, June 2019', testimonial_blurb: 'We had a wonderful morning with Leanne, biking to Musselburgh and stopping for coffee once we got there. It was nice to be out of the city, see things close up, and be on bike paths almost the whole way.'},
  {reviewer_name_and_location: 'Yousin, Korea, May 2019', testimonial_blurb: 'I was an single traveler and was finding some unique yet authentic experience. Cycling is a good way to look around the city like local, and it was a right choice for my holiday with Leanne. She is an real Edinburgher who knows about the tiny details and the stories of the city. In addition she is truly an cycling lover with professional level. Even though our journey began in the rain, it made me feel like a real local with smells of the nature. If you are not used to ride a bike, don\'t worry. Whether you are new to cycling or a regular rider, it designed to take your appreciation further with Leanne. I will definitely join her again ❤️'},
  {reviewer_name_and_location: 'Stephanie, UK, May 2019', testimonial_blurb: 'The cycle with Leanne was brilliant from start to finish. I\'m not the most ambitious or confident of cyclists, so I was a bit unsure of how the tour was going to go, but I needn\'t have worried. Leanne was really encouraging and went at my pace- she\'s very friendly! I didn\'t feel rushed and we took lots of small breaks to look at the scenery along the cycle path, through wildlife areas, near Arthurs Seat and at the seaside. I\'d really recommend if you want to see the real Edinburgh from a road less travelled. She knew the perfect routes to avoid traffic and see some interesting things along the way. I can\'t wait to get back on my bike!'},
  {reviewer_name_and_location: 'Heather, Barbados, May 2019', testimonial_blurb: 'Wow! Cycling around the city of Edinburgh was a fantastic way to actively see city highlights. Leanne’s pacing of the tour, communication before and during the tour and ability to customize the tour to my ability and tourist needs meant this was a well valued and memorable experience for my first visit to Scotland. Next time, I’m in the city with definitely do another cycle experience with Leanne.'},
  {reviewer_name_and_location: 'Dara, New Zealand, May 2019', testimonial_blurb: 'We had a wonderful time with Leanne. She showed us the sites of her home town Edinburgh and knew them in depth. She was also passionate about cycling and very careful with us. Would be suitable for all sorts of people. She shared stories about her life that were relevant to the experience. The ride itself was pretty and pleasant and long enough that you felt you’d done some exercise Would definitely recommend it.'},
  {reviewer_name_and_location: 'Rachel, UK, April 2019', testimonial_blurb: 'I thoroughly enjoyed my cycle tour. Leanne was so knowledgeable about the locality and I enjoyed hearing about the history of the area. The host ensured the guests were all involved in the ride, and made the trip enjoyable for all, whilst remaining safe at all times. This is a fantastic way to see the city and beyond to Musselburgh. I would highly recommend this tour.'},
  {reviewer_name_and_location: 'Ana, China, April 2019', testimonial_blurb: 'It is a great experience! We know more about Edinburgh than common travelers places and knowledge.'},
  {reviewer_name_and_location: 'Marisa, USA, April 2019', testimonial_blurb: 'Leanne was amazing and the tour was spectacular. She want above and beyond for us and made this an incredible day!'},
  {reviewer_name_and_location: 'Efsathia, Greece, October 2019', testimonial_blurb: 'It was an amazing experience for me and my 8 years old daughter!Perfect-fit bikes, beautiful scenery, great tour, lots of information all the way through, cosy chocolate-stop by the sea, the most friendly guide. I would highly recommend it'},
  {reviewer_name_and_location: 'Kaila, USA, October 2019', testimonial_blurb: 'A great combination of history and outdoor adventure! The route requires some uphill pedaling but is relatively easy and very enjoyable. We rode by or stopped at several interesting and beautiful sights. Leanne is very friendly, fun, and insightful. I had a great time and would definitely reccomend it!'},
  {reviewer_name_and_location: 'Tim, USA, Septermber 2019', testimonial_blurb: 'I had the pleasure of enjoying Leanne\'s Private Circular Ediburgh Tour on August 23, 2019. It was a unique look at the City with a native of Edinburgh as guide. A perfect antidote to a 10 hour plane trip to the City! Leanne is attentive to your needs as a rider, warm, and welcoming. I plan to do the trip again when I return to Edinburgh. I highly recommend Leanne to you!'},
  {reviewer_name_and_location: 'Sarah, UK, May 2019', testimonial_blurb: 'Fabulous cycle with Leanne in the City. I haven’t been on my bike for years but Leanne has given me the confidence to cycle again and it’s wonderful. I am from Edinburgh but had little knowledge of the fantastic cycle paths. I have even been cycling to cricket training. I will definitely do another cycle with Leanne and throughly recommend.'},
  {reviewer_name_and_location: 'Alex, Hong Kong, June 2019', testimonial_blurb: 'Super day out yesterday with Leanne and our kiddies. Saw another side of beautiful Edinburgh and wish we had more time to explore again. All the gear was provided and Leanne was so professional, taking extra care and support with my youngest who was a little less confident. Highly recommend going on one of her trips - we will definitely do it again. Thanks Leanne'},
  {reviewer_name_and_location: 'Mark, Australia, September 2019', testimonial_blurb: 'Fantastic ride with Leanne! It’s the best way to see this great city.'},
  {reviewer_name_and_location: 'Anna, UK, May 2019', testimonial_blurb: 'Fantastic bike ride to Portobello Beach this morning with A Wee Pedal. Leanne has spent lots of time time researching the routes and even fixed my bike! I would totally recommend a bike ride with A Wee Pedal if you are visiting Edinburgh or live in Edinburgh and would like to get out on a bike.'}
].sort( compare );

class TestimonialsPage extends Component {


  render(){
    if(!testimonials){
      return(
        <div></div>
      )
    }
    return(
      <MDBContainer>
      <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Testimonials
          </h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">
           
          </p>

          <MDBRow className="text-center">

            {testimonials.map(testimonial => {
              return(
                <MDBCol md="4" className="mb-md-0 mb-5">
               
                <p className="font-weight-normal dark-grey-text">
                  <ReactMarkdown source={testimonial.testimonial_blurb} />
                </p>
                <h6 className="font-weight-bold blue-text my-3">
                  <ReactMarkdown source={testimonial.reviewer_name_and_location} />
                </h6>
               
            </MDBCol>
              )
            })}
            
          </MDBRow>
        </section>
    </MDBContainer>
    )
  }
}


export default TestimonialsPage;