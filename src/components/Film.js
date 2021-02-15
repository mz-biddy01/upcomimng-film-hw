import react from 'react';

const Film = ({name, url}) => {
    return(
        <div className="film">
            <ul>
                <li>
                <a href="{url}">{name}</a>
                </li>
            </ul>
        </div>
        // <div className="upcoming-release">
        //     <button type="button">View more upcoming releases >></button>
        // </div>
       
    )
}

export default Film;