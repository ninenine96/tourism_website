import Carousel from "react-elastic-carousel";
import React, { useState } from "react";
import { InfoSec } from "../InfoSection/InfoSection.styles";
import { CarouselWrapper, Item, Heading, Name, Review } from "./styles";
import { FaStar } from "react-icons/fa";
const CarouselReviews = () => {
  const spanStyle = {
    color: "#0056f5cc",
    cursor: "Pointer",
  };
  function ReadMore({ children, maxCharacterCount }) {
    const text = children;

    const [isTruncated, setiSTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleisTruncated() {
      setiSTruncated(!isTruncated);
    }
    return (
      <p>
        {resultString}
        <span onClick={toggleisTruncated} style={spanStyle}>
          {isTruncated ? " ...view more" : " ...view less"}
        </span>
      </p>
    );
  }
  return (
    <InfoSec lightBg="true">
      <CarouselWrapper>
        <Heading>What our customers thought</Heading>
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={50000}>
          <Item>
            <Name>Gayatri Trivedi</Name>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <Review>
              <ReadMore maxCharacterCount={200}>
                Rubina planned our Kashmir trip very well. She and her team were
                at disposal whenever we needed anything, really appreciate their
                responsiveness. All you have to do is enjoy your trip and worry
                nothing about logistics, accommodation, transportation etc.
                Thank you for organizing it so well!!
              </ReadMore>
            </Review>
          </Item>
          <Item>
            <Name>Sagnik Mitra</Name>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <Review>
              <ReadMore maxCharacterCount={200}>
                It was a wonderful experience. The hotels provided were great.
                Whenever we had the smallest of problems we would call Rubina ji
                and she would take care of that. Thank you for giving us an
                experience to cherish. I would recommend everyone that if you
                ever plan to visit Kashmir or Ladakh give her a call and just
                enjoy to your fullest.
              </ReadMore>
            </Review>
          </Item>
          <Item>
            <Name>Yakub Asamdi</Name>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <Review>
              <ReadMore maxCharacterCount={200}>
                Thank you Rubina ma'am for orgnise wonderful Kashmir tour
                package we truly enjoyed our 9 day trip your all arrangement
                hotel .travelling. food .and all arrangement are superb you made
                our trip osame we always miss your our trip in kashmir once
                again thank you Rubina ma'am and all your team.thank you so much
                and your behavior feels like family
              </ReadMore>
            </Review>
          </Item>
          <Item>
            <Name>Himanshu Paliwal</Name>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <Review>
              <ReadMore maxCharacterCount={200}>
                I have booked a 5N6D trip to kashmir for my friends honeymoon as
                a gift to them. Rubina mam coordinated politely at every bit of
                the trip and fulfilled all the promises as done beforehand
                regarding accomodations , meals and travels. It was worth every
                penny and the services are just what were promised . Best in the
                game so far ...no hidden promises .....no hassles for the
                tourists ..totally recommend.
              </ReadMore>
            </Review>
          </Item>
          <Item>
            <Name>Sharif Ahmed</Name>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <Review>
              <ReadMore maxCharacterCount={200}>
                Had a wonderful time in Kashmir. Thanks to Miss Rubina for
                organising the trip. It was an unforgettable experience. Don't
                miss out on the heavenly and adventurous outing you'll ever
                have.Comfy hotels, lip smacking food, mountains decked with
                snow, long drives amidst alluring valleys and streams. This is a
                place where one has to see before they die. And trust me you'll
                enjoy more than you thought you would. Kashmir Vendor was always
                there to guide us right from the beginning to the very end of
                the trip before you bid aidue to the Spectacular Kashmir. Indeed
                It's Heaven on Earth!! Ta-Ta.
              </ReadMore>
            </Review>
          </Item>
        </Carousel>
      </CarouselWrapper>
    </InfoSec>
  );
};

export default CarouselReviews;

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
