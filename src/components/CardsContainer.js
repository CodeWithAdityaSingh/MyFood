import React, { useEffect } from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useCardContainer from "../hooks/useCardContainer";

const CardsContainer = () => {
  let selector2 = useSelector((store) => store.resData.filterResInfo);

  useCardContainer();

  if (!selector2) return;
  return (
    <div className="my-4  flex flex-wrap justify-start ">
      {selector2.map((data) => (
        <Link to={"/menu/" + data.info.id} key={data.info.id}>
          {" "}
          <Cards data={data} />
        </Link>
      ))}
    </div>
  );
};

export default CardsContainer;
