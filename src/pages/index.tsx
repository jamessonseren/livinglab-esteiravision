import React from 'react'
import Styles from './home.module.scss';

const Home = (props:any) =>{
  return (
    <div className={Styles.container}>
      <div className={Styles.box}>
          <a className={Styles.buttonArea}>
                <h1>VISITANTE</h1>
          </a>
          <div className={Styles.buttonArea}>
                <h1>CADASTRAR</h1>
          </div>
      </div>
    </div>
  )
}

export default Home;

