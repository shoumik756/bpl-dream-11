/* eslint-disable react/prop-types */
import Available from '../Available/Available';
import Selectd from '../Selected/Selected';
import './ButtonContainer.css'

const ButtonContainer = ({handleIsActiveState,isActive,handleSelected,selected,handleDelete}) => {

    
    return (
        <div className='my-5 max-w-screen-xl mx-auto mt-20'> 
            <div className='flex justify-end' >
                <button onClick={()=>handleIsActiveState('available')} className={`${isActive.available?"btn active":"btn"}`} >Available</button>
                <button onClick={()=>handleIsActiveState('selected')} className={`${isActive.available?"btn ":"btn active"}`}>Selected ({selected.length})</button>
            </div>

            {isActive.available?<Available handleSelected={handleSelected}></Available>:<Selectd selected={selected} handleIsActiveState={handleIsActiveState} handleDelete={handleDelete}></Selectd>}
            
        </div>
    );
};

export default ButtonContainer;