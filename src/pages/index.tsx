import React from 'react'
import Styles from './home.module.scss';
import Arte from '../../public/arte.png'
import {Arte1} from '../components/ExportSvgs/ExportSvgs';
import router from 'next/router';
import ImagemBanner from '../../public/banner.jpg'
import Image from 'next/image';




const Home = (props:any) =>{
  return (
    <div className={Styles.container}>
     <div className={Styles.capa}>

     </div>
      <div className={Styles.box}>
          <div className={Styles.banner}>
            <div>
            <a className={Styles.arte}><Arte1/></a>

            </div>
            <div className={Styles.searchArea}>
            <h1>Bem vindo ao seu assitente de filas</h1>
            <h4 style={{'marginTop':'20px'}}>Selecione o mercado e faça suas compras sem perder tempo!</h4>
            <h4 style={{'marginTop':'20px'}}>Não precisa de cadastro, apenas Checkin no local, aproveite!</h4>
            <select style={{'width':'80%', 'marginTop':'20px','height':'30px'}}>
              <option value="fort1">
                Fort Cafezais
              </option>
              <option value="fort2">
                Fort Coronel Antonino
              </option>
              <option value="fort3">
                Fort Consul Assaf
              </option>
            </select>

            </div>
          </div>
          <div className={Styles.actionArea}>
          <div className={Styles.buttonArea}>
          <div className={Styles.info}>

                <h1 style={{'marginBottom':'10px'}}>Visitante</h1>
                <ul style={{'listStyle':'none'}}>
                  <li>
                      <h4>Faça suas compras com tranquilidade</h4>
                  </li>
                  <li>
                      <h4>Otimize seu tempo</h4>
                    
                  </li>
                  <li>
                      <h4>Evite filas</h4>     
                  </li>
                </ul>
                </div>
              <div className={Styles.action}>
              <button className={Styles.buttonRedirect} onClick={()=> router.push("/inicio-fila")}>
                      Continuar como visitante

                  </button>
                  <svg  height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 8V5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V16M6 12H13M13 12L10.5 9.77778M13 12L10.5 14.2222" stroke="#2C3092" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

              </div>

          </div>
          <div className={Styles.buttonArea}>
              <div className={Styles.info}>

                <h1>Cadastro</h1>
                <ul style={{'listStyle':'none'}}>
                  <li>
                      <h4>Vantagens e Benefícios</h4>
                  </li>
                  <li>
                      <h4>Vuon</h4>
                  </li>
                  <li>
                      <h4>Auto Atendimento</h4>
                  </li>
                </ul>
              </div>
              <div className={Styles.action}>
                  <button className={Styles.buttonRedirect}>
                      Efetuar Cadastro

                  </button>
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Home;

