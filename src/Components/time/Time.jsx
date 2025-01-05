
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'




export default function Time() {
    const [time, setTime] = useState(new Date());
    const [currentDate, setcurrentDate] = useState(new Date());
    let [day, setDay] = useState("")
    let [dayNum, setDayNum] = useState(0)
    let [dayMon, setDayMon] = useState(0)
    let [fajr, setFajr] = useState(0)
    let [Sunrise, setSunrise] = useState(0)
    let [Dhuhr, setDhuhr] = useState(0)
    let [Asr, setAsr] = useState(0)
    let [Maghrib, setMaghrib] = useState(0)
    let [Isha, setIsha] = useState(0)
    // let [Azan, setAzan] = useState("11:59:00")

      
    useEffect(() => {



        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = today.getFullYear();
        setcurrentDate(`${day}-${month}-${year}`);
      // تحديث الوقت كل ثانية
      const timer = setInterval(() => {
        setTime(new Date());




      }, 1000);
      
  
      // تنظيف المؤقت عند إلغاء المكون
      return () => clearInterval(timer);
    }, []);

 

    async function salatTime() {

        let {data} = await axios.get(`https://api.aladhan.com/v1/timingsByCity/${currentDate}?city=cairo&country=egypt&method=8`)

        let day = data.data.date.hijri.weekday.ar;
        let dayNum = data.data.date.hijri.day;
        let dayMon = data.data.date.hijri.month.ar;
        let fajr = data.data.timings.Fajr;
        let Sunrise = data.data.timings.Sunrise;
        let Dhuhr = data.data.timings.Dhuhr;
        let Asr = data.data.timings.Asr;
        let Maghrib = data.data.timings.Maghrib;
        let Isha = data.data.timings.Isha;
        setFajr(fajr)
        setIsha(Isha)
        setMaghrib(Maghrib)
        setAsr(Asr)
        setDhuhr(Dhuhr)
        setSunrise(Sunrise)
        setDayMon(dayMon)
        setDayNum(dayNum)

       

        
        setDay(day)


         
        

        
        
    }
 
    
   
    useEffect(()=>{
        


        salatTime();

       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // console.log(+time.toLocaleTimeString().slice(0,2));
    // if(+time.toLocaleTimeString().slice(0,2) >= 8 || +time.toLocaleTimeString().slice(0,2) < 6){
        
    //     setAzan("fajr")
    // }else if(time.toLocaleTimeString()==="11:59:00"){
    //     setAzan("11:59:00")
    // }
    // else if(time.toLocaleTimeString()==="14:48:00"){
    //     setAzan("14:48:00")
    // }
    // else if(time.toLocaleTimeString()==="17:07:00"){
    //     setAzan("17:07:00")
    // }
    // else if(time.toLocaleTimeString()==="18:37:00"){
    //     setAzan("18:37:00")
    // }



 
    






  return (
    <>

<div className="text-center text-success" id="salat">
      <div>
        <div>
          <h2>
               مواقيت الصلاة 
          </h2>
          {/* <h2>{hours} : {minutes} : {seconds} </h2> */}
          <h2 className="" dir="ltr">{time.toLocaleTimeString()}</h2>
          <h2> {day==="" ? "": day}: ( {dayNum===0 ? 1 :dayNum} من {dayMon===0 ? "رجب" : dayMon})</h2>
        </div>


        <div className="container w-75 mx-auto py-4">
            <div className="row gy-4">
                <div className="col-md-4">
                    <div className="py-3 shadow-lg">
                        <div className="border border-5 border-success w-75 mx-auto py-5 rounded-circle">
                            <h1>{fajr=== 0 ? "05:15" : fajr}</h1>
                            <h1 className="py-2">AM</h1>
                        </div>
                        <div className="mt-5 pt-5">
                            <h1 className="w-75 mx-auto bg-success text-white p-2 rounded-5">الفجر</h1>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="py-3 shadow-lg">
                        <div className="border border-5 border-success w-75 mx-auto py-5 rounded-circle">
                            <h1>{Sunrise === 0 ? "15:9" : Sunrise}</h1>
                            <h1 className="py-2">AM</h1>
                        </div>
                        <div className="pt-5 mt-5">
                            <h1 className="w-75 mx-auto bg-success text-white p-2 rounded-5">الشروق</h1>
                        </div>


                    </div>
                </div>
                <div className="col-md-4">
                    <div className="py-3 shadow-lg">
                        <div className="border border-5 border-success w-75 mx-auto py-5 rounded-circle">
                            <h1>{Dhuhr===0 ? "20:9" : Dhuhr}</h1>
                            <h1 className="py-2">AM</h1>
                        </div>
                        <div className="pt-5 mt-5">
                            <h1 className="w-75 mx-auto bg-success text-white p-2 rounded-5">الظهر</h1>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="py-3 shadow-lg">
                        <div className="border border-5 border-success w-75 mx-auto py-5 rounded-circle">
                            <h1>{Asr === 0 ? " 87:9" : Asr}</h1>
                            <h1 className="py-2 ">PM</h1>
                        </div>
                        <div className="pt-5 mt-5">
                            <h1 className="w-75 mx-auto bg-success text-white p-2 rounded-5">العصر</h1>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="py-3 shadow-lg">
                        <div className="border border-5 border-success w-75 mx-auto py-5 rounded-circle">
                            <h1>{Maghrib=== 0 ? "05:15" : Maghrib}</h1>
                            <h1 className="py-2">PM</h1>
                        </div>
                        <div className="pt-5 mt-5">
                            <h1 className="w-75 mx-auto bg-success text-white p-2 rounded-5">المغرب</h1>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="py-3 shadow-lg">
                        <div className="border border-5 border-success w-75 mx-auto py-5 rounded-circle">
                            <h1>{Isha=== 0 ? "05:15" : Isha}</h1>
                            <h1 className="py-2">PM</h1>
                        </div>
                        <div className="pt-5 mt-5">
                            <h1 className="w-75 mx-auto bg-success text-white p-2 rounded-5">العشاء</h1>
                        </div>

                    </div>
                </div>

            </div>

        </div>




      </div>
    </div>
    
    
    
    
    
    
    </>
  )

}