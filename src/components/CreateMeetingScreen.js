
import React, { useState, useEffect} from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import SideNav from './SideNav';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//Poprawić headery dużych divów, zrobić czytelniejszy kalendarz, wyróżnić elementy partic, places aby nie usunac zlego

function CreateMeetingScreen() {
    const [newPlace,SetNewPlace] = useState("");
    const [newPeriod,SetNewPeriod] = useState("");
    const [newParticipant, SetNewParticipant] = useState("")
    const [placeList, SetPlaceList] = useState([]);
    const [periodList, SetPeriodList] = useState([]);
    const [participantsList,SetParticipantsList] = useState([]);
    const [calendarValue, SetCalendarValue] = useState(new Date());
    const [desc,SetDesc] = useState("");
    const [title,SetTitle] = useState("");
    //Add Place on Enter Click
    useEffect(()=>{
        console.log(calendarValue);
    },[calendarValue])
    useEffect(()=>{
        var input = document.getElementById("addPlaceInput");
        const inputEvent = function(event){
            console.log('keypress');
            if(event.key === "Enter"){
                event.preventDefault();
                addPlace();
            }
        }
        input.addEventListener("keypress", inputEvent)
        return () => {
            input.removeEventListener("keypress", inputEvent)
        };
    },[newPlace])
    //Add Place
    const addPlace = () => {
        if(newPlace){
            SetPlaceList(placeList => [...placeList, newPlace])
            SetNewPlace("");
        }    
    }
    //Remove Place
    const removePlace = (index) =>{
        var placeToRemove = placeList[index];
        SetPlaceList((placeList) => 
        placeList.filter((place) => place !== placeToRemove));
    }
    //Add Period
    const addPeriod = () => {
        if(newPeriod){
            SetPeriodList(periodList => [...periodList, newPeriod])
            SetNewPeriod("");
        }    
    }
    //Remove Period
    const removePeriod = (index) =>{
        var periodToRemove = periodList[index];
        SetPeriodList((periodList) => 
        periodList.filter((period) => period !== periodToRemove));
    }
    
 
    return (
        <div className="wrapper">
            <SideNav/>
            <div className="content-create">
                <div className="detailsContainer">
                    <div className="titleContainer">
                        <input type="text" className="titleInput" value={title} onChange={(e)=>SetTitle(e.target.value)} placeholder='TITLE'/>      
                    </div>
                    <div className='descContainer'>
                        <input type="text" className='descInput' value={desc} onChange={(e)=>SetDesc(e.target.value)} placeholder='Description'/>
                    </div>
                    <div className='dot' style={{left:"1rem"}}></div>
                    <div className='dot' style={{right:"1rem"}}></div>
                </div>
                <div className='setupContainer'>
                    <div className="place grid-row-span-2">
                        <div className='card-header'>
                            <h2>MEETING PLACE</h2>
                            <div className='add-form'>
                                <input type="text" id="addPlaceInput" value={newPlace} onChange={(e)=>SetNewPlace(e.target.value)}/>
                                <button type="button" id="btnAddPlace" onClick={()=>addPlace()}>+</button>
                            </div>
                        </div>
                        <div className='data-list'>
                            { placeList.map((item,index) =>{
                                return(
                                    <div className="data-item" key={index}>
                                        <p>{item}</p>
                                        <BsFillTrashFill className="btnTrash" onClick={()=>removePlace(index)} size="1.5em"/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="addresses"> 
                        <div className='card-header'>
                            <h2>ADDRESSES</h2>
                            <div className='add-form'>
                                <input type="text" id="addPlaceInput" value={newPlace} onChange={(e)=>SetNewPlace(e.target.value)}/>
                                <button type="button" id="btnAddPlace" onClick={()=>addPlace()}>+</button>
                            </div>
                        </div>      
                    </div>
                    <div className="links"> 
                        <div className='card-header'>
                            <h2>LINKS</h2>
                            <div className='add-form'>
                                <input type="text" id="addPlaceInput" value={newPlace} onChange={(e)=>SetNewPlace(e.target.value)}/>
                                <button type="button" id="btnAddPlace" onClick={()=>addPlace()}>+</button>
                            </div>
                        </div>                              
                    </div>
                    <div className="permissions"> 
                        <div className='card-header'>
                            <h2>PERMISSIONS</h2>
                        </div>                        
                    </div> 
                    <div className="date"> 
                        <div className='card-header-small'>
                            <h2>DATE</h2>
                        </div>  
                        <div className='calendarContainer'>
                            <Calendar className={'calendar'} onChange={SetCalendarValue}
                            selectRange={true} />
                        </div>                    
                    </div>
                </div>
                
            </div>
        </div>
    );
  }
  
  export default CreateMeetingScreen;