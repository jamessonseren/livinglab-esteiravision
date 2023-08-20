import React from 'react'
import Styles from './styles.module.scss'
import { Arte2 } from '@/components/ExportSvgs/ExportSvgs'

function index() {
  return (
    <div className={Styles.filaArea}>
        <div className={Styles.filaBox}>
        <div className={Styles.banner}>
        <h1>Olá cliente, está terminando suas compras?!</h1>
        <h4>Garanta sua posição na fila através do botão abaixo</h4>
        <div className={Styles.buttonArea}>
            <h2 style={{"marginTop":'10px'}}>Tempo médio para ser atendido</h2>
            <h2 style={{"marginTop":'10px'}}>10 minutos</h2>

            <Arte2/>
        <button className={Styles.buttonEntrar}>
            Entrar na Fila  
        </button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default index