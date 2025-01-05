// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import CardQuran from '../CardQuran/CardQuran'
import axios from 'axios'

import CssQuran from "../Quran/Quran.module.css";

export default function Quran() {
   let [dataa , setData] = useState("")
   let [value , setValue] = useState("")
   let [newRes , setnewRes] = useState([])
   let [Audio,setAudio] = useState("")



  async  function getSora(){
     let {data}= await   axios.get(`https://api.alquran.cloud/v1/surah`)
     setData(data.data)
     setnewRes(data.data)
     
     

    }
        async function audio() {
    
            let {data} = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/9`)
            
            setAudio(data.audio_files)
            
             
         }

    useEffect(()=>{



        getSora()
        audio()
    },[])

    function removeDiacritics(text){

        let textAl = text.replace(/[\u064B-\u065F]/g, "");
        return textAl
    }

    const handleInputChange = (e) => {

        if(e.target.value===""){
            setData(newRes)
        }
        setValue(e.target.value);
    
    }




    function searchForSora(value){

        let newData = structuredClone(dataa);


        // let newRes = newData.map((sora)=>{return removeDiacritics(sora.name)})


        if(newData.filter((sora)=>{return  removeDiacritics(sora.name).includes(value)  })){

            setData(newData.filter((sora)=>{return  removeDiacritics(sora.name).includes(value)  }))
        }else{
            setData(newRes)
        }




        



       

      

      




    }
  return (
    <>

    <div className="py-4 position-relative">
        <div className="text-center text-success pb-3">
            <h2>القرآن الكريم</h2>
        </div>
 
        <div className="text-center py-3  mx-auto position-relative">
              <i className={`fas fa-search ${CssQuran.iconPosition}`}></i>
            <input type="text" className="border border-2 border-success  rounded-5 px-5 py-2" value={value} onChange={handleInputChange} placeholder="ابحث عن السورة" onInput={function(){searchForSora(value)}} />
            

        </div>


        <div className="container pb-5 ">
            <div className="row gy-3">
             
                {dataa === "" ? <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
                    <p><i className="fas fa-spinner fa-spin fs-1 text-success"></i></p> <p>Please Wait</p></div> : dataa.map((sora ,  index)=>{return <CardQuran key={sora.number} sora={sora} audio={Audio[index]}  />})}

            </div>
        </div>


    </div>
    
    
    
    
    
    
    
    </>
  )
}
