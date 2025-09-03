import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
        <h1>Conheça esses destinos incríveis!</h1>
        <div className='cards__container'>
            <div className='cards__container'> 
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore a cachoeira escondida no fundo da selva amazônica"
                    label='aventura'
                    path='/services'
                    />
                     <CardItem 
                    src="images/img-2.jpg"
                    text="Descubra as ilhas mais belas do Mar do Caribe"
                    label='repouso'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src="images/img-3.jpg"
                    text="Um passeio silencioso de barco em águas infinitas convida ao puro encantamento."
                    label='mistério'
                    path='/services'
                    />
                     <CardItem 
                    src="images/img-5.jpg"
                    text="Uma grandiosa porta de elegância oferece calma no meio da cidade."
                    label='repouso'
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-6.jpg"
                    text="Uma faixa de pedestres movimentada mostra o ritmo vibrante da vida urbana."
                    label='capital'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default Cards