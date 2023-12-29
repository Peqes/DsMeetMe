
import React, { useState, useEffect} from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import SideNav from './SideNav.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MapSection from './Map.js'
//przerwa miedzy vote-ami ciemniejszy niebieski zamiast białego
//dodać pogodę do dat
//mapka
function MeetingScreen() {
  
    const [participantList,SetParticipantsList] = useState(["Piotr Górski","Paweł Gaiński","Grzegorz Brzęczyszczykiewicz","Jan Kowalski","Piotr Górski","Paweł Gaiński","Grzegorz Brzęczyszczykiewicz","Jan Kowalski","Piotr Górski","Paweł Gaiński","Grzegorz Brzęczyszczykiewicz","Jan Kowalski","Piotr Górski","Paweł Gaiński","Grzegorz Brzęczyszczykiewicz","Jan Kowalski","Piotr Górski","Paweł Gaiński","Grzegorz Brzęczyszczykiewicz","Jan Kowalski",]);
    const [placeList, SetPlacesList] = useState(["place1", "Wielki wodospat niagara wyprawa w dzicz elo elo", "place2","place3","place1", "placeplaceplace", "place2","place3","place1", "placeplaceplace", "place2","place3",])
    const [periodList, SetPeriodList] = useState([]);
    const [calendarValue, SetCalendarValue] = useState(new Date());
    const [desc,SetDesc] = useState("");
    const [title,SetTitle] = useState("");
    const [markedParticipant, SetMarkedParticipant] = useState();
    const [markedPlace, SetMarkedPlace] = useState();

    const location = {
        address:'Galeria Kazimierz',
        lat:50.053764333338435,
        lng: 19.95541966849457,
        
    }

    function MarkItem(id, type) {
        switch(type){
            case "participant":
                if(markedParticipant && id!=markedParticipant){
                    const oldParticipant = document.querySelector(`#${markedParticipant}`);
                    oldParticipant.classList.remove("item-vote-marked");
                    
                }
                SetMarkedParticipant(id);
                
                break;
            case "place":
                if(markedPlace && id!=markedPlace){
                    const oldPlace = document.querySelector(`#${markedPlace}`);
                    oldPlace.classList.remove("item-vote-marked");              
                }
                SetMarkedPlace(id);
                
                break;
            default:
                console.log('item marking error');
                break;
        }
        
    }
    useEffect(()=>{
        if(markedParticipant){
            const participantItem = document.querySelector(`#${markedParticipant}`);
            participantItem.classList.add("item-vote-marked");
        }
    },[markedParticipant])
    useEffect(()=>{
        if(markedPlace){
            const placeItem = document.querySelector(`#${markedPlace}`);
            placeItem.classList.add("item-vote-marked");
        }
    },[markedPlace])

    return (
        <div className="wrapper">
            <SideNav/>
            <div className="content-wrapper">
                <div className='title-container-vote'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className='content-vote'>
                    <div className='participants-container-vote grid-row-span-2'>
                        <h2>Vote as</h2>
                        <div className="participants-vote">
                        
                        {participantList.map((item,index)=>{
                            let participantID = `participant${index}`;
                            return(
                                <div className='participant-vote' key={index} id={participantID} onClick={()=>{MarkItem(participantID,"participant")}}>
                                    <p>{item}</p>
                                </div>
                            );
                        })}
                        </div>   
                    </div>
                    <div className='places-container-vote grid-row-span-2'>
                            <h2>Place</h2>
                        <div className="places-vote"> 
                            {placeList.map((item,index)=>{
                                let placeID = `place${index}`;
                                return(
                                    <div className='place-vote' key={index} id={placeID} onClick={()=>{MarkItem(placeID,"place")}}>
                                        <p>{item}</p>
                                    </div>
                                );
                            })}
                        </div>  
                    </div>
                    <div className='map-container-vote'>
                        <MapSection location={location} zoomLevel={17} />
                    </div>
                </div>
               
                
            </div>
        </div>
    );
  }
  
  export default MeetingScreen;