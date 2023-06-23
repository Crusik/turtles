import React from 'react';
import './Stages.css';
import Stage from './Stage';

function Stages(){
    return (
        <div className='stages'>
            {/* I will need to use player1Id && || player2Id during the selection process */}
            <Stage stageId={0} player1Id={13} player2Id={14}/>
            <Stage stageId={1} player1Id={15} player2Id={16}/>
            <Stage stageId={2} player1Id={17} player2Id={18}/>
            <Stage stageId={3} player1Id={19} player2Id={20}/>
            <Stage stageId={4} player1Id={21} player2Id={22}/>
            <Stage stageId={5} player1Id={23} player2Id={24}/>
            <Stage stageId={6} player1Id={25} player2Id={26}/>
            <Stage stageId={7} player1Id={27} player2Id={28}/>
            <Stage stageId={8} player1Id={29} player2Id={30}/>
            <Stage stageId={9} player1Id={31} player2Id={32}/>
            <Stage stageId={10} player1Id={33} player2Id={34}/>
            <Stage stageId={11} player1Id={35} player2Id={36}/>
            <Stage stageId={12} player1Id={37} player2Id={38}/>
            <Stage stageName="Krang" player1Id={39} player2Id={40}/>
            <Stage stageName="Techno-Drome" player1Id={41} player2Id={42}/>
            <Stage stageName="Techno-Drome" player1Id={43} player2Id={44}/>
            <Stage stageName="Techno-Drome" player1Id={45} player2Id={46}/>
        </div>
    );
}

export default Stages;