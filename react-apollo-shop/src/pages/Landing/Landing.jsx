import './Landing.css';
import Carousel from '../../components/Carousel/Carousel';
import { householdImgs } from './images';

const Landing = () => {

    const generateImg = () => {
        
    };

    return (
        <div className='landing-container'>
            {/* Jumbotron */}
           
             <Carousel />
           
            {/* Categories */}
            <div className='categories'>
                <button> Electronics </button>
                <button > Household </button>
                <button> Apparel </button>
                <button> Sporting </button>
                <hr></hr>
            </div>

            {/* Categories Cards */}
            <div className='cards'>
                <img src={`../images/${householdImgs[0].path}`} className='card-1' alt='Household item #1'/>
                <img src={`../images/${householdImgs[2].path}`} className='card-2' alt='Household item #2'/>
                <img src={`../images/${householdImgs[3].path}`} className='card-3' alt='Household item #3'/>
            </div>

        </div>
    );

};

export default Landing;