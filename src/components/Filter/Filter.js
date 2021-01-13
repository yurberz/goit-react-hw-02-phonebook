import React from "react";
import PropTypes from "prop-types";
import Label from "./FilterStyled";

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input className="input" type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
