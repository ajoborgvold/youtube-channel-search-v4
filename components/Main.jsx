import { useContext } from 'react'
import Videos from './Videos'
import Error from './Error'
import { Context } from '../contextProvider/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Main() {
    const { hasData, videosHeading, isLoading } = useContext(Context)

    return (
        <main>
            <h2 className="main__subheading">{`${videosHeading.channel}: ${videosHeading.search}`}</h2>
            <div className="video-container">
                {isLoading ?
                    // <p className='error'>Loading...</p> :
                    // <FontAwesomeIcon icon="fa-solid fa-spinner" spinPulse style={{color: "#1b4965",}} /> :
                    <FontAwesomeIcon icon={faSpinner} className='loading-icon'/> :
                    hasData ? <Videos /> : <Error />
                }
            </div>
        </main>
    )
}

export default Main
