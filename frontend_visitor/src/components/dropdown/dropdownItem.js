import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './dropdown.css';


const DropdownItem = (props) => {
    return (
        <ui className='DropdownItem'>
            <Dropdown.Item>
                <Link to={props.href} className='linkStyle'>
                    <label htmlFor={props.id}>
                        {props.name}
                    </label>

                </Link>
            </Dropdown.Item>
        </ui>
    )
}

export default DropdownItem;