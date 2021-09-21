import React from "react";
import { useHistory } from "react-router";
const FunItem = (props) => {
  const { img, title, desc, link } = props;
  const history = useHistory();
  return (
    <div className="funt-item">
      <img src={img} alt={`${title}`} />
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="bttn" onClick={() => history.push(link)}>
        Try
      </div>
    </div>
  );
};

export default FunItem;
