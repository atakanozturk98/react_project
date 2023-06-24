import React from "react";

const ImageInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  const handleChange = (event) => {
    const file = event.target.files[0];
    const filePath = URL.createObjectURL(file);
    const filename = file.name;
    const updatedValue = `images/${filename}`;

    onChange({ target: { name, value: updatedValue } });
  };

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="file"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          onChange={handleChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default ImageInput;