import React from 'react';
import InputBase from './InputBase';

const BuyForm = ({ data }) => {
    const { name, rate } = data;

    const handleChange = ({ target: { value, name } }) => {
        const val = Number(value.trim());
        const converted = 
        
    }

    return (
        
       <form className="form">
           <div className="input-group mb-3">
                <InputBase  textLabel="USD" onChange={handleChange} />
                <i className="fas fa-exchange-alt" />
                <InputBase disabled textLabel={name} />
           </div>
           <input className="btn btn-primary" type="submit" value="Purchase" />
       </form>
    )
};

export default BuyForm;