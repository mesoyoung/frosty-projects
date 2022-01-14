import React from 'react';
import './policyContainer.css';


const PolicyContainer = (props) => {
  return (
      <div className='policyContainer'>
        <input id={props.id} type='checkbox' className = 'checkbox' defaultChecked={props.defaultChecked} />
        <label className='pc-name' htmlFor={props.id}>{props.name}</label>
        <label className='pc-description' htmlFor={props.id}>{props.description}</label>
      </div>
  );

};

export default PolicyContainer;
