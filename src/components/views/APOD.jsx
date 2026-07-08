import './APOD.scss';
import apiURL from '../API/apiURL.js';
import API from '../API/API.js';
import useLoad from '../API/useLoad.js';

function APOD () {
    // Initialisation -----------------------
    
    const apodEndpoint = `${apiURL}/apod`;

    // State --------------------------------

    const [apod, loadingApodMessage, loadApod] = useLoad(apodEndpoint);
    // Handlers -----------------------------
    // Views --------------------------------
    return (
       <>
      <h1>Astronomy Picture of the Day</h1>

      {!apod ? (
        <p>{loadingApodMessage}</p>
      ) : (
        <div className="apod-container">

          {apod.media_type === "video" ? (
            <div className="video-fallback-container">
              <iframe src={apod.url} title={apod.title} className="apod-video" />
              
              <div className="secure-link-panel">
                <p>Transmission blocked by origin server protocols?</p>
                <a 
                  href={apod.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="console-button"
                >
                  OPEN EXTERNAL SATELLITE FEED
                </a>
              </div>
            </div>
          ) : (
            <img src={apod.url} alt={apod.title} className="apod-img" />
          )}
          <h2>{apod.title}</h2>
          <p className="apod-explanation">{apod.explanation}</p>
        </div>
      )}
    </>

    )
}

export default APOD;