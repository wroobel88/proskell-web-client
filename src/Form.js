import React from "react";

export const Form = () => {
  const [code, setCode] = React.useState();

  const handleChange = (e) => {
    e.preventDefault();
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code) console.log(code);
  };

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "800px",
          alignItems: "center",
        }}
      >
        <label>Tutaj umieść swój kod</label>
        <textarea
          type="text"
          name="code"
          style={{ minWidth: "600px", minHeight: "250px", margin: "20px 0" }}
          onChange={(e) => handleChange(e)}
          value={code}
        />
        <button type="submit" style={{ width: "100px" }}>
          submit
        </button>
      </form>
    </div>
  );
};
