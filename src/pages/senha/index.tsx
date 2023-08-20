import React, { useState } from 'react'
import Styles from './styles.module.scss';
import router from 'next/router';
import { Button, Modal } from 'antd';
import QRCode from '@/components/QRCode/QRcode';

function index() {
  const [posicao, setPosicao] = useState("2º");
  const [minutos, setMinutos] = useState("20");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const link = 'https://www.google.com'


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
   
      <Modal
        title="Utilize este QR code ao chegar no caixa."
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{'alignItems':'center'}}
      >
        <div className={Styles.qrcode}><QRCode value={link}/></div>
      </Modal>
    <div className={Styles.filaArea}>
        <div className={Styles.filaBox}>
        <div className={Styles.content}>
          <div className={Styles.boxHeader}>
              <h2>Caixa: 10</h2>
               <Button type="primary" onClick={showModal}>
                QR CODE
              </Button>
          </div>
      
        <div className={Styles.buttonArea}>
            <h2 style={{"marginTop":'10px'}}>Você é o <p style={{'color':'#EF1A23'}}>{posicao}</p> da fila</h2>
        </div>
        <div className={Styles.buttonArea}>
            <h2 >Notificações</h2>
            <div style={{'width':'100%','backgroundColor':'#5e5e5e','borderRadius':'10px'}}>
            <h4 style={{"marginTop":'10px'}}>Atenção dirija-se ao caixa e evite ser realocado</h4>

            </div>
        </div>
        <div className={Styles.buttonArea}>
            <h2 style={{"marginTop":'10px'}}>Estima-se <p style={{'color':'#EF1A23'}}>{minutos}</p> minutos para o seu atendimento.</h2>
        </div>
        <button className={Styles.buttonRedirect} onClick={()=> router.push("/")}>Sair da fila</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default index