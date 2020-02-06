import React from "react";
import styled from "styled-components";
import { CHANGE_VIEW, changeView } from "./actions";
import { connect } from "react-redux";

const NavContainer = styled.div`
  display: flex;
  div {
    margin: 1rem;
    text-decoration: underline;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Nav = ({ changeView }) => {
  return (
    <NavContainer>
      <div onClick={() => changeView("names")}>Names</div>
      <div onClick={() => changeView("orb")}>Orb</div>
    </NavContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  changeView: view => dispatch(changeView(view))
});
export default connect(null, mapDispatchToProps)(Nav);
