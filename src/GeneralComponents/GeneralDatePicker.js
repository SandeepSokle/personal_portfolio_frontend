import * as React from "react";
import TextField from "@mui/material/TextField";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const GeneralDatePicker = (props) => {
  const {
    conflict,
    setConflict,
    label,
    place,
    dataKey,
    data,
    setData,
  } = props;
  const PlaceHolder = label;
  const storeValue = dataKey;

  const [value, setValue] = React.useState("");

  // console.log(storeValue, props.data[storeValue], value, data);

  const handleChange = (event) => {
    setValue(event);
    console.log(event);
    if (setConflict) {
      // console.log(conflict);
      setConflict(!conflict);
    }
    if (!data) return;
    let newData = data;
    newData[`${storeValue}`] = event;
    setData(newData);
  };

  React.useEffect(() => {
    setValue(data[storeValue] || "");
    if (setConflict) {
      // console.log(conflict);
      setConflict(!conflict);
    }
    if (!data) return;
    let newData = data;
    newData[`${storeValue}`] = data[storeValue] || "";
    setData(newData);
  }, [data]);

  React.useEffect(() => {
    if (props.value != null) {
      let newData = props.data;
      newData[`${storeValue}`] = props.value;
      props.setData(newData);
      setValue(props.value);
    }
  }, []);

  return (
    <div
      style={{
        margin: "1rem .1rem",
        marginBottom: `${props.lowMargin ? "0.1rem" : "1rem"}`,
        width: props.width ? props.width : "100%",
      }}
    >
      <TextField
        fullWidth
        label={place ? place : PlaceHolder}
        id="date"
        // sx={{
        //   width: "48%",
        //   m: 1,
        // }}
        type="text"
        // InputLabelProps={{
        // shrink: true,
        // required: true,
        // }}
        value={props.value ? props.value : value}
        onFocus={(e) => {
          e.target.type = "date";
        }}
        onBlur={(e) => {
          e.target.type = "text";
          console.log("On blur", e.target.value, e.target.value);
          handleChange(e.target.value);
        }}
      />
      {/* <TextField
        fullWidth
        type={onlyNumber ? "number" : "text"}
        multiline={multiline ? true : false}
        rows={4}
        error={
          submitted && (value === undefined || value === "" || value === 0)
            ? true
            : false
        }
        paddingRight={`${paddingRight ? paddingRight : "0rem"}`}
        className="form-control"
        disabled={props.disabled ? true : false}
        required={props.required ? true : false}
        value={props.value ? props.value : value}
        onKeyPress={
          dataKey === "title"
            ? allowOnlyLetters
            : onlyNumber
            ? allowOnlyPositiveNumber
            : () => {}
        }
        onChange={handleChange}
        label={place ? place : PlaceHolder}
        id="fullWidth"
      /> */}
    </div>
  );
};
