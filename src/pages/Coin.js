import React from 'react'

function Coin({icon, name, price, priceChange1d}) {
  return (
    <div className='coinData'>
      <div data-bs-toggle='modal' data-bs-target='#myModal1'>
        <img src={icon} alt={icon} draggable={false}/>
        <p><span>Name:</span> {name}</p>
        <p><span>Price:</span> ${price}</p>
        <p><span>Change:</span> {priceChange1d}</p>
      </div>

      {/* The Modal */}
      <div className='modal fade' id='myModal1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {/* Modal Header */}
            <div className='modal-header'>
              <h4 className='modal-title'>Build not completed!</h4>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
              />
            </div>
            {/* Modal body */}
            <div className='modal-body'>
              Will be Available Soon
            </div>
            {/* Modal footer */}
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-outline-dark'
                data-bs-dismiss='modal'>
                Close
              </button>
              <button
                type='button'
                class='btn btn-primary'>
                Visit
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Coin