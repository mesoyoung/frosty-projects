import React from "react";
import { Link } from 'react-router-dom';
import './iWantToItem.css';


const IWantToItem = (e) => {


    var iWantToID = 0;
    function findiWantToID() {
        iWantToID = e.id;
        // alert(iWantToID);
        return iWantToID;
        
    }

    return (
        <ui className='iWantToItem'>

            <Link to ='browsePolicies' className='linkStyle' onClick ={findiWantToID}>
                <label htmlFor={e.id} href={e.href}>
                    {e.name}
                </label>

            </Link>

        </ui>
    )
}



export default IWantToItem;