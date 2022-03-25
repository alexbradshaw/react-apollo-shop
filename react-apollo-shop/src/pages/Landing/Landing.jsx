import './Landing.css';

const Landing = () => {

    return (
        <div className='landing-container'>
            {/* Jumbotron */}
            <div className='jumbotron'>
                <h1>Carousel? of random user listings</h1>
            </div>

            {/* Categories */}
            <div className='categories'>
                <span><a href='#'> Electronics </a>|</span>
                <span><a href='#'> Household </a>|</span>
                <span><a href='#'> Apparel </a>|</span>
                <a href='#'> Sporting </a>
            </div>

            {/* Categories Cards */}
            <div className='cards'>
                <div className='card-1'> Item </div>
                <div className='card-2'> Item </div>
                <div className='card-3'> Item </div>
            </div>

        </div>
    );

};

export default Landing;