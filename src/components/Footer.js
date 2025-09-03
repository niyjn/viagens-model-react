import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Junte-se à aventura!
            </p>
            <p className='footer-subscription-text'>
                Você pode cancelar a qualquer momento!
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Seu Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Inscrever-se</Button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Footer