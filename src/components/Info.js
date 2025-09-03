import React from 'react'
import { Button } from './Button'
import './info.css'
import '../App.css'


function info() {
  return (
    <div className='info-container'>
        <h1>O melhor serviço de estadia do Paraná</h1>
        <p>Participe!</p>
        <div className='info-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Junte-se conosco
            </Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Conheça mais <i className='far fa-play-circle' />
            </Button>
        </div>
    </div> 

  )
}

export default info