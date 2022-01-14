import React, { useState } from 'react';
import { Dropdown, DropdownButton, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import IWantToItem from '../iWantToItem/iWantToItem.js';
import DropdownItem from './dropdownItem.js'
import './dropdown.css';

const DropdownContainer = () => {


const [DROPDOWN] = React.useState([
    { id: 0, name: 'Buy insurance for NS', href: "#/NSInsurance" },
    { id: 1, name: 'Buy insurance for Cars', href: "#/CarsInsurance" },
    { id: 2, name: 'Protect myself against major accidents', href: "#/SelfInsurance" }
]);

const [name, setName] = React.useState();

// var iWantToID = IWantToItem.iWantToID;




    const dropdownList = DROPDOWN.map(dropdownItem => (
        <DropdownItem id={dropdownItem.id} name={dropdownItem.name} href={dropdownItem.href} />
    ));
    // var dropdownTitle = '';
    // function dropdownSelect() {

    //     dropdownTitle = IWantToItem.iWantToID;

    // };



    return (
        <div className='headerAndDropdown'>
            <div className='header'>I want to: &nbsp;</div>

            <div className='dropdownStyle' >
                {/* <Dropdown>
                    <DropdownButton title='dropdown' className='dropdownButton' >
                        <ul className='iWantToUL'>
                            {dropdownList}
                        </ul>
                    </DropdownButton>
                </Dropdown> */}
                <select className = 'dropdownStyle'
                value={name}
                onChange={e => setName(e.currentTarget.value)}
                >
                    {DROPDOWN.map(dropdownItem => (
                        <option
                            key={dropdownItem.id}
                            // selected = {}
                            value={dropdownItem.name}
                            to={dropdownItem.href}
                        >
                            {dropdownItem.name}
                        </option>
                    ))}

                </select>


            </div>
        </div>
    );
}


export default DropdownContainer;

