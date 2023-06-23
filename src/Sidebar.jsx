import React from 'react';
import './Sidebar.css';
import PickCharacter from './PickCharacter';
import PickStage from './PickStage';
import RemoveStage from './RemoveStage';
import RemoveCharacter from './RemoveCharacter';

const Sidebar = (props) => {

    const { handleStageSelection } = props;

    return (
        <div className='sidebar'>
            <PickStage handleStageSelection={handleStageSelection} />
            <PickCharacter />
            <RemoveStage />
            <RemoveCharacter />
        </div>
    );
}

export default Sidebar;