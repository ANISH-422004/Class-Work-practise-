import React, { useState } from "react";

function Form({ addCard }) {
  const [formData, setFormData] = useState({  //each obejct of data 
    name: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.description && formData.imageUrl) {
      addCard(formData);
      setFormData({ name: "", description: "", imageUrl: "" }); // Clear form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5 px-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="bg-zinc-100  rounded-lg border border-black"
      />
      <input
        type="text"
        name="description"
        required  // it is given when the filed is necessary to fill 
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="bg-zinc-100  rounded-lg border border-black"

      />
      <input
        type="url"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        className="bg-zinc-100  rounded-lg border border-black"

    />
      <button type="submit" className="bg-sky-400 text-white p-2 rounded-xl">Add Card</button>
    </form>
  );
}

export default Form;
