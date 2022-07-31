import './Profile.css';
import Collapsible from 'react-collapsible';

const Profile = () => {

    function hide(e) {
        console.log(e.target.parentElement.id);
        console.log('hide has been pressed');
    }
  
    function edit(e) {
        console.log(e.target.parentElement.id);
        console.log('edit has been pressed');
    }
  
    function del(e) {
        console.log(e.target.parentElement.id);
        console.log('delete has been pressed');
    }

    return (
        <div className='landing-container'>


    <Collapsible trigger="*Pic* *Title* *Price*" className='collapsibleContainer' openedClassName='collapsibleContainer'>
          <p id='button1'> 
              *Description* <button onClick={hide}>Hide</button> <button onClick={edit}>Edit</button> <button onClick={del}>Delete</button>
          </p>
        </Collapsible>

        <Collapsible trigger="*Pic* *Title* *Price*" className='collapsibleContainer' openedClassName='collapsibleContainer'>
          <p id='button2'> 
              *Description* <button onClick={hide}>Hide</button> <button onClick={edit}>Edit</button> <button onClick={del}>Delete</button>
          </p>
        </Collapsible>

        </div>
    );

};

export default Profile;