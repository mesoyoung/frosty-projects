import React, { Component } from 'react';

const OPTIONS = [
    "Show selected choices"
]

class Checkbox extends Component {
    state = {
        checkboxes: OPTIONS.reduce(
            (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    };


    createCheckbox = option => (
        <Checkbox
            label={option}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
        console.log(this.setState);
    }
    //   if (prevState == true) {
    //     chosenPolicies.push();
    //   } else if (prevState == false) {
    //     chosenPolicies.splice();
    //   };
    // }

};


export default Checkbox;