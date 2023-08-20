import React from 'react'
import Styles from './styles.module.scss';
import {LogoSvg} from '../../components/ExportSvgs/ExportSvgs'
import Image from 'next/image';


function Header() {
  return (
    <div className={Styles.header}>
        <LogoSvg/>
    </div>
  )
}

export default Header