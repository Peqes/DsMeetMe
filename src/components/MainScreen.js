
import React, { useState, useEffect} from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import SideNav from './SideNav';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MainScreen() {
    const [newPlace,SetNewPlace] = useState("");
    const [newPeriod,SetNewPeriod] = useState("");
    const [newParticipant, SetNewParticipant] = useState("")
    const [placeList, SetPlaceList] = useState([]);
    const [periodList, SetPeriodList] = useState([]);
    const [participantsList,SetParticipantsList] = useState([]);
    const [calendarValue, SetCalendarValue] = useState(new Date());
    const [desc,SetDesc] = useState("");
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
    //Add Period on Enter Click
     //Add Participant on Enter Click
     useEffect(()=>{
        var input = document.getElementById("addParticipantInput");
        const inputEvent = function(event){
            console.log('keypress');
            if(event.key === "Enter"){
                event.preventDefault();
                addParticipant();
            }
        }
        input.addEventListener("keypress", inputEvent)
        return () => {
            input.removeEventListener("keypress", inputEvent)
        };
    },[newParticipant])

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
    //Add Participant
    const addParticipant = () => {
        if(newParticipant){
            SetParticipantsList(participantsList => [...participantsList, newParticipant])
            SetNewParticipant("");
        }    
    }
    //Remove Participant
    const removeParticipant = (index) =>{
        var participantToRemove = participantsList[index];
        SetParticipantsList((participantsList) => 
            participantsList.filter((participant) => participant !== participantToRemove));
    }
    return (
        <div className="wrapper">
            <SideNav/>
            <div className="content-create">
                <div className="place grid-row-span-2">
                    <h2>PLACE</h2>
                    <div className='add-form'>
                        <input type="text" id="addPlaceInput" value={newPlace} onChange={(e)=>SetNewPlace(e.target.value)}/>
                        <button type="button" id="btnAddPlace" onClick={()=>addPlace()}>+</button>
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
                <div className="participants grid-row-span-2">
                    <h2>PARTICIPANTS</h2>
                    <div className='add-form'>
                        <input type="text" id="addParticipantInput" value={newParticipant} onChange={(e)=>SetNewParticipant(e.target.value)}/>
                        <button type="button" id="btnAddParticipant" onClick={()=>addParticipant()}>+</button>
                    </div>                 
                    <div className='data-list'>
                        { participantsList.map((item,index) =>{
                            return(
                                <div className="data-item" key={index}>
                                    <p>{item}</p>
                                    <BsFillTrashFill className="btnTrash" onClick={()=>removeParticipant(index)} size="1.5em"/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="date">
                    <h2>DATE</h2>
                    <div className='calendarContainer'>
                        <Calendar className={'calendar'} onChange={SetCalendarValue}
                        selectRange={true} />
                    </div>
                   
                </div>
                <div className="detailsContainer">
                    <div className="titleContainer">
                        <h2>TITLE</h2>
                        <input type="text" className="titleInput" value={newPlace} onChange={(e)=>SetNewPlace(e.target.value)}/>      
                    </div>
                    <div className='descContainer'>
                        <h2>ADDITIONAL DESCRIPTION</h2>
                        <textarea className='descArea' name="desc" value={desc} onChange={(e)=>SetDesc(e.target.value)}/>
                    </div>
                   
                </div>
                
                
            </div>
        </div>
    );
  }
  
  export default MainScreen;