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
              path="/special-honeymoon"
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
              path="/special-holiday"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1600845747913-e33543f94892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80"
              text="Experience the tranquility of Dal Lake"
              label="Experience"
              path="/"
            />
            <CardItem
              src="https://images.unsplash.com/photo-1600356604423-426d3363ffb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              text="Ski through the mountains of Gulmarg"
              label="Adrenaline"
              path="/"
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
      <h1>Our Team</h1>
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
