import React from 'react';
import Button from '../button/Button';
import useTelegram from '../../hooks/useTelegram'


const Header = () => {

    const {user, onClose} = useTelegram()
    

    return (
        <div className={"Header"} >
            <Button onClick={onClose} >Закрыть</Button>
            <span className={'username'} >{}</span>
            
        </div>
    );
};

export default Header;