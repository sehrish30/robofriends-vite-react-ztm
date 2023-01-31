import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, i) => {
    return <Card key={i} id={i} name={robot.name} email={robot.email} />;
  });

  return <React.Fragment>{cardComponent}</React.Fragment>;
};

export default CardList;
