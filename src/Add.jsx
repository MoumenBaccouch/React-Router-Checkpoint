import React, { useState } from 'react';
const Add = ({ onClose, onAddMovie , moviesData,setmoviesData }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
   const addmovie=()=>{setmoviesData([...moviesData,formData])}
  

  return (
    <div className='add'>
      <div className="model1">
        <button onClick={onClose}>x</button>
        <div className='form'>
          <div className="lingne">
            <label> title</label>
            <input type="text" name="title" placeholder='type your title' onChange={handleInputChange} />
          </div>
          <div className="lingne">
            <label> genre</label>
            <input type="text" name="genre" placeholder='type your genre' onChange={handleInputChange} />
          </div>
          <div className="lingne">
            <label> description</label>
            <input type="text" name="description" placeholder='type your description' onChange={handleInputChange} />
          </div>
          <div className="lingne">
            <label> image</label>
            <input type="text" name="posterURL" placeholder='type your image URL' onChange={handleInputChange} />
          </div>
          <div className="lingne">
            <label> rate</label>
            <input type="text" name="rate" placeholder='type your rate' onChange={handleInputChange} />
          </div>
          <div onClick={onClose}>
          <input type="button" value="ADD" onClick={()=>(addmovie())} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;