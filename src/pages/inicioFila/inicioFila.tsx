'use client'
import React, { useState } from 'react'
import Styles from './styles.module.scss'
import { Arte2 } from '@/components/ExportSvgs/ExportSvgs'
import {Modal} from 'antd';
import router from 'next/router';

function InicioFila() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numeroItems, setNumeroItems] = useState<any>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    router.push("/senha");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className={Styles.filaArea}>
        <div className={Styles.filaBox}>
        <div className={Styles.content}>
        <h1>Olá cliente, está terminando suas compras?!</h1>
        <h4>Garanta sua posição na fila através do botão abaixo</h4>
        <div className={Styles.buttonArea}>
            <h2 style={{"marginTop":'10px'}}>Tempo médio atual para ser atendido</h2>
            <h2 style={{"marginTop":'10px'}}>10 minutos</h2>

            <Arte2/>
        <button className={Styles.buttonEntrar} onClick={showModal}>
            Entrar na Fila  
        </button>
        </div>
    </div>
    </div>
    </div>
    <Modal title="Informe a quantidade de items" open={isModalOpen} onOk={handleOk} >
        <input type='number' onBlur={(e)=>setNumeroItems(e.target.value) }></input>
    </Modal>
    </>
  )
}

export default InicioFila