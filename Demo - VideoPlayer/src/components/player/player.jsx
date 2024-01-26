import YouTube from 'react-youtube';

const Player = (props) => {

    // Récupération de prop contenant l'id de la vidéo a lire
    const { videoId } = props;

    // Paramètrer le lecteur (ici, hauteur / largeur / lecture automatique)
    const opts = {
        height: '350',
        width: '500',
        playerVars: {
            autoplay: 1
        }
    };


    // Mettre en pause la vidéo au chargement
    const _onReady = (e) => {
        e.target.pauseVideo();
    }


    return (
        <div>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady}/>
        </div>
    )
}

export default Player;