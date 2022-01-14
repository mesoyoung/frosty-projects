import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from '../../components/dropdown/dropdown.js';
import PolicyContainer from '../../components/policyContainer/policyContainer.js';
import './browsePolicies.css';


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------


//arrays declaration

//main policies list
const POLICIES = [
  {
    id: 'policy-0',
    name: 'Protection Scheme 1',
    description: 'Policy Sceme 1 offers wider coverage for your daily health problems.',
    defaultChecked: false,
  },
  {
    id: 'policy-1',
    name: 'Protection Scheme 2',
    description: 'Policy Scheme 2 provides buyer with a ton of benefits.',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: 'Protection Scheme 3 is not only good because it provides health protection, it also provides large payouts on hospitilization.',
    defaultChecked: false,
  },
  {
    id: 'policy-0',
    name: 'Protection Scheme 1',
    description: 'Policy Sceme 1 offers wider coverage for your daily health problems.',
    defaultChecked: false,
  },
  {
    id: 'policy-1',
    name: 'Protection Scheme 2',
    description: 'Policy Scheme 2 provides buyer with a ton of benefits.',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: 'Protection Scheme 3 is not only good because it provides health protection, it also provides large payouts on hospitilization.',
    defaultChecked: false,
  },
  {
    id: 'policy-0',
    name: 'Protection Scheme 1',
    description: 'Policy Sceme 1 offers wider coverage for your daily health problems.',
    defaultChecked: false,
  },
  {
    id: 'policy-1',
    name: 'Protection Scheme 2',
    description: 'Policy Scheme 2 provides buyer with a ton of benefits.',
    defaultChecked: false,
  },
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: 'Protection Scheme 3 is not only good because it provides health protection, it also provides large payouts on hospitilization.',
    defaultChecked: false,
  },


];

// selected policies ONLY list
var selectedPolicies = [
  {
    id: 'policy-2',
    name: 'Protection Scheme 3',
    description: '',
    defaultChecked: false,
  },
];

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------




//main function starts
const BrowsePolicies = () => {


  function addOrRemove() {
    for (let i = 0; i < POLICIES.length; i++) {
      if (POLICIES[i].checked === true) {
    //     // addToSelectedChoices(i)
        selectedPolicies.push(i);
        return selectedPolicies;
      } else {
      //   // removeFromSelectedChoices(i)
        selectedPolicies.splice(i);
        return selectedPolicies;
      }
    }
  }



  function ChoiceCheckbox() {
    const [checkboxBool, setCheckboxBool] = useState(false);

    return (

      <div className="choiceCheckboxContainer">
        <input
          type="checkbox"
          id="choiceCheckbox"
          name="choiceCheckbox"
          checked={checkboxBool}
          onChange={() => setCheckboxBool(!checkboxBool)}
          onClick={console.log(<ChoiceCheckbox/>)}
          // onClick ={hideOrShowSelectedChoices}
        />
        <label htmlFor="choiceCheckbox">Show Selected Policies</label>
      </div>

    );
  }



  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------


  // const selectedPoliciesList = selectedPolicies.map(policy => (
  //   <PolicyContainer id={policy.id} name={policy.name} description={policy.description} defaultChecked={policy.defaultChecked} onClick={addOrRemove} />
  // ));


  // const policiesList = POLICIES.map(policy => (
  //   <PolicyContainer id={policy.id} name={policy.name} description={policy.description} defaultChecked={policy.defaultChecked} onClick={addOrRemove} />
  // ));



  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------


  // var getPoliciesList = document.getElementsByClassName('policiesList');
  // var getSelectedPoliciesList = document.getElementsByClassName('selectedPoliciesList');




  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------

  var isChecked = document.getElementById('choiceCheckbox');

  var whichPoliciesList = POLICIES

  function hideOrShowSelectedChoices() {

    if (ChoiceCheckbox.checked === true) {
      // showSelectedChoices
      whichPoliciesList = selectedPolicies;
      return whichPoliciesList;
      // getSelectedPoliciesList.style.display = 'block';
      // getPoliciesList.style.display = 'none';
    } else {
      // // showAllChoices
      whichPoliciesList = POLICIES;
      return whichPoliciesList;
      // getSelectedPoliciesList.style.display = 'none';
      // getPoliciesList.style.display = 'block';
    }
  }

  const displayPolicies = whichPoliciesList.map(policy => (
    <PolicyContainer id={policy.id} name={policy.name} description={policy.description} defaultChecked={policy.defaultChecked} onClick={addOrRemove} />
  ));


  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div className='browsePolicies'>
      <div className="headerAndDropdown">
        <DropdownContainer />
      </div>

      {/* <div className='choiceCheckboxContainer'>
        <input type='checkbox' id='choiceCheckbox' checked={false} onChange={this.handleCheckboxChange} />
        <label className='checkboxWords'>Show selected choices</label>
      </div> */}
      < ChoiceCheckbox  />

      <div className='policiesBody'>

        <div className='policiesList'>
          <ul >
            {displayPolicies}
          </ul>
        </div>

        {/* <div className='selectedPoliciesList'>
          <ul >
            {selectedPoliciesList}
          </ul>
        </div>*/}
      </div>

      <div className='contactFormBtn' >
        <Link to='contactForm' className='toContactFormLink'>Request for help</Link>
      </div>



    </div>
  )
}


export default BrowsePolicies;
