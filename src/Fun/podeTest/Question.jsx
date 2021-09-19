import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { set_pode_answers_Action } from "../../REDUX";

const Question = (props) => {
  const { id, question, a, b, c, d } = props;
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    console.log("event ", value);
    if (value !== undefined) {
      dispatch(set_pode_answers_Action(value));
    }
  }, [dispatch, value]);
  return (
    <div className="question-item">
      <FormControl component="fieldset">
        <FormLabel className="question-label" component="legend">
          {question}
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value={`${id},30`}
            control={<Radio color="warning" />}
            label={a}
          />
          <FormControlLabel
            value={`${id},20`}
            control={<Radio color="warning" />}
            label={b}
          />
          <FormControlLabel
            value={`${id},10`}
            control={<Radio color="warning" />}
            label={c}
          />
          <FormControlLabel
            value={`${id},0`}
            control={<Radio color="warning" />}
            label={d}
          />
        </RadioGroup>
      </FormControl>
      <hr />
    </div>
  );
};

export default Question;
