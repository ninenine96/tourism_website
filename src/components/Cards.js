import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1576693485592-797707145c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              text="Explore the hidden waterfall at Aharbal"
              label="Adventure"
              path="/trip-aharbal"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1529516222410-a269d812f320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              text="Celebrate your honeymoon in the enchanted land of Kashmir"
              label="Luxury"
              path="/special-honeymoon"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1561287437-589dfed82e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215&q=80"
              text="Explore the majestic Himalyas"
              label="Adventure"
              path="/special-holiday-group"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1600845747913-e33543f94892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80"
              text="Experience the tranquility of Dal Lake"
              label="Experience"
              path="/trip-srinagar"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1600356604423-426d3363ffb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              text="Ski through the mountains of Gulmarg"
              label="Adrenaline"
              path="/special-holiday-group"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

export const CardAbout = () => {
  return (
    <div className="cards">
      <h1 className="heading">Our Mission</h1>
      <p className="paragraph">
        At KashmirVendor, our mission is to provide our customers with the best
        and never forgettable travel experience in Kashmir. Everyday, we go
        beyond our capabilities to ensure our travelers have the best and warm
        experience in Kashmir. Each day, we strive to provide our customers the
        best hospitality experience.{" "}
      </p>
      <h1 className="heading">We make the best for all our customers.</h1>
      <p className="paragraph">
        KashmirVendor is a Srinagar based local travel and hospitality firm. We
        believe that the northern tip of India is a piece of paradise and we
        operate in Kashmir, Jammu Leh and Ladakh. At KashmirVendor, we believe
        in the passion and love we have towards our motherland; we push our
        abilities beyond our capabilities to provide you with the best Kashmir
        experience. We believe that Kashmir tourism is a bridge that connects
        the rest of the world to the holy land of Sufis and Saints. We aim to
        show Kashmir as a land of rich heritage, historic significance, and
        breathtaking nature.{" "}
      </p>
      <h1 className="heading">Our Vision</h1>
      <p className="paragraph">
        KashmirVendor’s vision is to build a great travel agency that is unique
        and goes above and beyond in delivering you the best Kashmir experience.
        At KashmirVendor, we don't just present Kashmir to you in a mundane way.
        We showcase you the very soul of Kashmir - full of nature’s beauty and
        rich beauty.{" "}
      </p>
      <h1 className="heading">Our Team</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/Rubina.jpeg"
              text="Rubina Kar"
              label="CEO"
              path=""
            />
            <CardItem
              src="/images/SalesRep.jpeg"
              text="Nazhar Bashir"
              label="Co-Partner"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/employee.jpeg"
              text="Najma Khan"
              label="Sales Manager"
              path=""
            />
            <CardItem
              src="/images/munna.jpg"
              text="Muzaffar Khan"
              label="Operational Manager"
              path=""
            />
            <CardItem
              src="/images/dev.jpg"
              text="Mohammad Rohan"
              label="Developer"
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
