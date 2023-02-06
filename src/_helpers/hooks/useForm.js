import { useState } from "react";

const useForm = ({ initialValue = {}, onSubmit }) => {
  const [values, setValues] = useState(initialValue);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    onSubmit(values);
    setValues(initialValue);
  };

  const handleChange = (event) => {
    const { target } = event;

    setValues((oldValues) => ({
      ...oldValues,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const reset = (fieldName) => {
    setValues((oldValues) => ({
      ...oldValues,
      [fieldName]: typeof values[fieldName] === "boolean" ? false : "",
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    reset,
  };
};

export default useForm;

// Here's an example of using the useForm hook in a React component to
// create a form that allows users to add a new product to a database

// import React, { useState } from 'react';
// import useForm from './useForm';

// const AddProductForm = () => {
//   const [products, setProducts] = useState([]);
//   const { values, handleChange, handleSubmit, reset } = useForm({
//     initialValue: {
//       name: '',
//       description: '',
//       price: 0,
//       quantity: 0
//     },
//     onSubmit: values => {
//       setProducts([...products, values]);
//       reset();
//     }
//   });

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={values.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           name="description"
//           value={values.description}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={values.price}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="quantity">Quantity:</label>
//         <input
//           type="number"
//           id="quantity"
//           name="quantity"
//           value={values.quantity}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddProductForm;
