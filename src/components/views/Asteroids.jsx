import apiURL from '../API/apiURL';
import useLoad from '../API/useLoad';
import './Asteroids.scss';

function Asteroids () {
    // Initialisation -----------------------
    const asteroidEndpoint = `${apiURL}/asteroids`;
    // State --------------------------------

    const [asteroid, loadingAsteroidMessage, loadAsteroid] = useLoad(asteroidEndpoint);
    // Handlers -----------------------------
    // Views --------------------------------
    return (
        <>
        <h1>Asteroid Tracker</h1>

        <div className='asteroid-info-container'>
            <img src='https://imgs.search.brave.com/i21hDJp6XKoXCVXqUIpAGU9xtIYVhXxwqfLZg4NCWBI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGFy/d2Fsay5zcGFjZS9n/YWxsZXJ5L2ltYWdl/cy9hc3Rlcm9pZC1i/ZWx0LXBvbGwvMTky/MHg1NDAuanBn' alt='asteroid belt' className='asteroidImg' />

            {!asteroid ? (
                <p>{loadingAsteroidMessage}</p>
            ) :(
                <>
            <div className='hazard'>
                
            </div>

            <div className='nearEarth'>

            </div>
                </>
            )}
        </div>
        
        </>

    )
}

export default Asteroids;