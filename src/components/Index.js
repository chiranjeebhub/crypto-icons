import React from "react";

const Crypto = ({ name }) => {
  //  const children = props.children ? <span>{props.children}</span> : false;

  return (
    <>
      <img src={require(`./img/${name}.svg`)} alt="" />
    </>
  );
};

export default Crypto;
