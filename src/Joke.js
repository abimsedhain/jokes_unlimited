import React from 'react';
import style from './joke.module.css'


const Joke = ({ setup, punchline }) => {
    return (
        <div>
            <p>{setup}</p>
            <p className={style.title}>{punchline}</p>
        </div>
    )
}

export default Joke;