import axios from "axios";
import { nanoid } from 'nanoid';
import { useEffect, useState } from "react";


const List = (props) => {

    const { list, setVideo } = props;
    
    // Création d'un state qui va contenir les thumbnails
    const [ thumbnailsList, setThumbnailsList ] = useState([]);

    /* Récupérer une clé API avec VITE depuis un .env 
    la variable d'environnement DOIT commencer par VITE_,
    le fichier .env DOIT être à la racine du projet et ajouter dans le gitignore */
    const API_KEY = import.meta.env.VITE_YT_API_KEY;

    // Récupération et envoi de l'id au parent pour affichage dans le <Player />
    const handleVideo = (e, id) => {
        setVideo(id)
    };

    useEffect(() => {
        if (list !== '') {
            /* On va venir créer un array avec les ids des vidéos de la liste,
            les séparer par une virgule ('id1', 'id2'), plus simple pour injection dans url */

            const listId = list.map(vid => vid.items.map(item => item.id.videoId).join(','));

            axios
                .get(`https://www.googleapis.com/youtube/v3/videos/?key=${API_KEY}&id=${listId}&part=snippet`)
                .then(response => setThumbnailsList([response.data]))
                .catch(error => {
                    console.error(error);
                })
        }
    }, [list])


    return (
        <>
            {list ? (
                <div>
                    {thumbnailsList.map(elem => elem.items.map(item => (
                        <div key={nanoid()}>
                            <img 
                                src={item.snippet.thumbnails.default.url} 
                                alt={item.snippet.title}
                                onClick={(e) => handleVideo(e, item.id)} />
                            <p>{item.snippet.title.length > 15 ? item.snippet.title.substring(0, 25) + '...' : item.snippet.title}</p>
                        </div>
                    )))}
                </div>
            ) : null}
        </>
    )
}

export default List;