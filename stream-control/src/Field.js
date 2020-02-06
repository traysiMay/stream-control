import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { UPDATE_NAME } from "./actions";

const FieldWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

const Input = styled.input`
  border: 2px solid black;
  width: 60%;
  height: 2rem;
  font-size: 20px;
`;

function Field({ name, updateName }) {
  return (
    <FieldWrapper>
      <div>{name.toUpperCase()}</div>
      <Input onChange={e => updateName(name, e.target.value)} />
    </FieldWrapper>
  );
}
const mapDispatchToProps = dispatch => ({
  updateName: (field, value) => dispatch({ type: UPDATE_NAME, field, value })
});
export default connect(null, mapDispatchToProps)(Field);
