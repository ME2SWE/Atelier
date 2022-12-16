import React, { useState } from 'react';

function QuantitySelector(props) {


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleQuantSelect = (quant) => {
    setOpen(!open);
    props.selectQuant(quant)
  }

  // console.log('props in qunatSelect', props)
  // && props.selectedQuant === 1

  // console.log('props in wuan', props)

  if (props.selected && !open && props.selectedQuant === 0) {
    // console.log(props.quant)
    // first state: closed

    // console.log('This is where I am')
    return (
      <div className="quantity-selector-start-size" onClick={handleOpen}>
        <p className="quantity-number">1</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  } else if (props.selected && open) {

      return (
        <div className="quantity-selector-open">
          {
            Array.from({length: props.quant}, (item, i) => {
              return (
                <div key={i} className="quantity-option" onClick={() => handleQuantSelect(i)}>
                  <p>{i}</p>
                </div>
              )
            })
          }
        </div>
      )

  } else if (!open && props.selected && props.selectedQuant > 0) {
    // console.log('this is where I want to be');
    return (
      <div className="quantity-selector-selected" onClick={handleOpen}>
        <p className="quantity-number">{props.selectedQuant}</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  }

  else {
    return (
      <div className="quantity-selector-start" onClick={handleOpen}>
        <p className="quantity-number">1</p>
        <div className="quantity-dropdown-arrow">↓</div>
      </div>
    )
  }

}

export default QuantitySelector;