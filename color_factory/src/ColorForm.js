import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ColorForm.css";

function ColorForm({addColor}) {
  const [form, updateForm] = useState({name: "", hex:"#ffffff"});
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    addColor({ [form.name]: form.hex });
    history.push("/colors");
  }

  function handleChange(e) {
    e.persist();
    updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  const {hex, name} = form;

  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor = "name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter color"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor = "hex">Color value</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type = "Submit" value = "Add color" readOnly />
      </form>
    </div>
  );
}

export default ColorForm;