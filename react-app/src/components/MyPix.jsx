import {useState} from 'react';
import MyPix from'./image/baby.jpg';


  function  MyImage (){
    return(
    <>
    <div>MyPix</div>
    <img src={MyPix} height={200} width={200}/>
    </>
    );
}

export default MyImage;