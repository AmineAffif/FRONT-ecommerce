import React from 'react'
import SuccessCheckbox from '../SuccessCheckbox'

function OrderSuccess() {
  return (
    <div className='order-success-page'>
      <SuccessCheckbox />
      <p id='payment-validated'>Paiement validé</p>
      <p>Votre commande est en route 🚚</p>
    </div>
  )
}

export default OrderSuccess