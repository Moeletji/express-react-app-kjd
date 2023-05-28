import React, { useEffect, useState } from 'react';
import BBC from '../../assets/bbc-black.svg';
import Distell from '../../assets/distell-black.svg';
import Engen from '../../assets/engen-black.svg';
import Liquid from '../../assets/liquid-black.svg';
import Microsoft from '../../assets/microsoft-black.svg';
import Multichoice from '../../assets/multichoice-black.svg';
import Nike from '../../assets/nike-black.svg';
import Pnp from '../../assets/pnp-black.svg';
import Sanlam from '../../assets/sanlam-black.svg';
import Santam from '../../assets/santam-black.svg';
import Spotify from '../../assets/spotify-black.svg';
import Tfg from '../../assets/tfg-black.svg';
import TymeBank from '../../assets/tyme-bank-black.svg';
import Visa from '../../assets/visa-black.svg';
import Wesgro from '../../assets/wesgrow-black.svg';
import Icon from '../Icon/Icon';

function IconList() {
    const [row1, setRow1] = useState<any>([]);
    const [row2, setRow2] = useState<any>([]);
    const [row3, setRow3] = useState<any>([]);
    useEffect(() => {
        setRow1([Visa, TymeBank, Distell, Spotify, Microsoft]);
        setRow2([Engen, Nike, Wesgro, Multichoice, Pnp]);
        setRow3([Liquid, Tfg, Sanlam, Santam, BBC]);
    },[])
  return (
    <div>
        <div className='columns'>
            {
                row1.map((item: any) => (
                    <div className='column'>
                        <Icon image={item} />
                    </div>
                ))
            }
        </div>
        <div className='columns'>
            {
                row2.map((item: any) => (
                    <div className='column'>
                        <Icon image={item} />
                    </div>
                ))
            }
        </div>
        <div className='columns'>
            {
                row3.map((item: any) => (
                    <div className='column'>
                        <Icon image={item} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default IconList;