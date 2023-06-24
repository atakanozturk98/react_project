import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
import ImageInput from "../toolbox/ImageInput";

const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update" : "Add"}</h2>
      <TextInput
        name="name"
        label="Product Name"
        value={product.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="category_id"
        label="Category"
        value={product.category_id || ""}
        defaultOption="Choose"
        options={categories.map(category => ({
          value: category.id,
          text: category.name
        }))}
        onChange={onChange}
        error={errors.category_id}
      />

      <TextInput
        name="price"
        label="Price"
        value={product.price}
        onChange={onChange}
        error={errors.price}
      />

      <ImageInput
      
        name="image"
        label="Image"
        value={product.image}
        onChange={onChange}
        error={errors.image}
      />



      <button type="submit" className="btn btn-success">
      Save
      </button>
    </form>
  );
};

export default ProductDetail;
