import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import axios from 'axios';
import Search from "../search/search";
import List from "../list/list";
import Player from "../player/player";
import './VideoPlayer.css';

const VideoPlayer = () => {

    /* Création des states locaux pour stocker la recherche utilisateur,
    la liste des vidéos, la vidéo sélectionnée et les commentaires liés a la vidéo */
    const [ searchValue, setSearchValue ] = useState('');
    const [ videoList, setVideoList ] = useState([]);
    const [ selectedVideo, setSelectedVideo ] = useState(null);
    const [ comments, setComments ] = useState([]);

    /* Récupérer une clé API avec VITE depuis un .env 
    la variable d'environnement DOIT commencer par VITE_,
    le fichier .env DOIT être à la racine du projet et ajouter dans le gitignore */
    const API_KEY = import.meta.env.VITE_YT_API_KEY;

    // Dans ce useEffect, on va venir récupérer les vidéos relatives à la recherche utilisateur
    useEffect(() => {
        if (searchValue !== '') {
            axios
                .get(`https://www.googleapis.com/youtube/v3/search/?key=${API_KEY}&q=${searchValue}`)
                .then(response => {
                    setVideoList([response.data])
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [searchValue])

    useEffect(() => {
        if (selectedVideo !== '') {
            axios
                .get(`https://www.googleapis.com/youtube/v3/commentThreads/?key=${API_KEY}&videoId=${selectedVideo}&part=snippet`)
                .then(response => {
                    console.log(response.data.items);
                    setComments(response.data.items)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [selectedVideo])

    return (
        <div className="layout-global">
            <section className="search-layout">
                <Search setSearch={setSearchValue} />
            </section>
            <section className="player-list-layout">
                <div className="player-video-layout">
                    <Player videoId={selectedVideo}/>
                    <section className="comments-layout">
                        <h4>Comments: </h4>
                        {comments.length > 0 ? comments.map(comment => (
                            <div key={nanoid()} className="comment">
                                <p className="comment-author">{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                <p className="comment-text">{comment.snippet.topLevelComment.snippet.textOriginal}</p>
                            </div>
                        )) : null}
                    </section>
                </div>
                {videoList.length > 0 ? (
                    <List list={videoList} setVideo={setSelectedVideo} />
                ) : null}
            </section>
        </div>
    )
}

export default VideoPlayer;