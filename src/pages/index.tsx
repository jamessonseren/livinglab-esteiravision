import React, { useState } from 'react'
import Styles from './home.module.scss';
import Arte from '../../public/arte.png'
import {Arte1} from '../components/ExportSvgs/ExportSvgs';
import router from 'next/router';
import ImagemBanner from '../../public/banner.jpg'
import Image from 'next/image';
import {getUserCoordinates, validateCheckIn, calculateDistance, degToRad} from '../utils/Location';
import { Spin } from 'antd';




const Home = (props:any) =>{

  const [checkIn,setCheckin] = useState();
  const [mercadosTocheckArray, setMercadosToCheckArray] = useState<any>();
  const [selectMercado, setSelectMercado] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [mercados, setMercados] = useState([
    {
      nome:'Fort Cafezais',
      latitude:-20.4977593,
      longitude:-54.6182799
    },
    {
      nome:'Fort Coronel Antonino',
      latitude:-20.4977789,
      longitude:-54.6182798
    },
    {
      nome:'Fort Consul Assaf',
      latitude:-20.4977841,
      longitude:-54.6182875
    }
  ]);


  const getUserLocation = async () =>{
    let mercadosToCheck = [{}];
      setLoading(true);
     await getUserCoordinates().then((result:any)=>{
      setLoading(false);

      console.log(result);
      mercados.map(m=>{
       
        let r = validateCheckIn(result.latitude, result.longitude,m.latitude,m.longitude,0.1);
        if(r){
          mercadosToCheck.push(m);
        };
      })
      setMercadosToCheckArray(mercadosToCheck)
    });
    
    
  }

  return (

    <div className={Styles.container}>
     <div className={Styles.capa}>

     </div>
      <div className={Styles.box}>
          <div className={Styles.banner}>
            <div className={Styles.searchArea}>
            <h1>Bem vindo ao seu assistente de filas</h1>
            <h4 style={{'marginTop':'20px'}}>Selecione o mercado e faça suas compras sem perder tempo!</h4>
            <h4 style={{'marginTop':'20px'}}>Não precisa de cadastro, apenas check-in no local. Aproveite!</h4>

            <button className={Styles.buttonSync} onClick={()=> getUserLocation()}>
              <h4>Parear mercado</h4>
              {loading?<Spin/>:null}
              <Arte1/>
            </button>
            <select style={{'width':'100%', 'marginTop':'20px','height':'30px'}} onChange={(e)=> setSelectMercado(true)} id="selectMercado">
            <option>Selecione um mercado pareado</option>
                {
                  mercadosTocheckArray?.map((m:any)=>{
                    return ( <option value={m.nome}>{m.nome}</option>)
                  })
                }
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
              <button className={Styles.buttonRedirect} disabled={!selectMercado} onClick={()=> router.push("/inicio-fila")}>
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

