/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

import CssCardQuran from "../CardQuran/CardQuran.module.css"
import axios from 'axios'
import SoraCard from '../SoraCard/SoraCard'




export default function CardQuran({sora , audio}) {

    
    
    
    
    let [ayah,setAyah] = useState("")
    let [css,setCss] = useState(CssCardQuran.sora)
    let [nameSora,setNameSora] = useState("")
  


    async function getAAt() {

       let {data} = await axios.get(`https://api.alquran.cloud/v1/surah/${sora.number}`)


       setAyah(data.data.ayahs)
       setNameSora(data.data.name)


       
        
    }


    


    useEffect(()=>{


        getAAt()

        
    },[])
    const handleAction = () => {
        // القيام بالإجراء المطلوب هنا
    
        // تمرير الصفحة إلى الأعلى
        window.scrollTo({
          top: 0,
          behavior: "smooth", // تضيف تأثير الانزلاق
        });}
    


    function displayCard(){



        setCss(CssCardQuran.sora2)
        handleAction()



    }
    function displayCard2(){



        setCss(CssCardQuran.sora)



    }
    







  return (
    <>

<div className="col-md-4 col-sm-12 " onClick={displayCard}>
                    <div className={`p-2 border border-3 bg-success-subtle border-success-subtle rounded-3 ${CssCardQuran.Cardrotate}`}>
                        <div className="d-flex justify-content-between  " dir='ltr'>

                            <div className="d-flex align-items-center ps-3">
                                <div className={`p-0 px-3 bg-success   py-2 text-white`}>
                                    <h5 className="">{sora.number}</h5>

                                </div>
                                <h5 className="ps-3">{sora.englishName}</h5>
                            </div>
                            <div>
                                <h5>{sora.name}</h5>
                                <p> {sora.numberOfAyahs} Ayahs</p>
                            </div>
                        </div>

                    </div>
                </div>


        <div className={`position-absolute  start-0 bottom-0  top-0 end-0 bg-white ${css}`}>


            <div className="position-absolute  end-0 top-0 pe-4 pt-3">
                <i className={`fas fa-close fs-1 text-success ${CssCardQuran.carosal}`} onClick={displayCard2}></i>
            </div>


            <div className="text-center py-3 text-success">
                <h1>
                    {nameSora ==="" ? "" : nameSora}
                </h1>
            </div>
            <div className="text-center">
                <p>عدد الأيات <span className="text-success">( {sora.numberOfAyahs} )</span></p>
            </div>
            <div className="text-center pb-4">
                <audio src={audio == undefined ? "" : audio.audio_url}  controls></audio>
            </div>

            <h2 className="text-center pb-4">{"{ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ }"}</h2>
            <div className="container ">
                <div className="d-flex flex-wrap justify-content-start w-100 mx-auto fs-4 lh-lg text-primary-emphasis" >
                    <p className=" fw-medium" >

                        {ayah === "" ? "" : ayah.map((ayah)=>{ return <SoraCard key={ayah.number} ayah={ayah} />})}

                    </p>

                    </div>
                </div>
            </div>
            
            
       
    
    
    
    
    
    
    
    
    
    
    </>
  )
    }
