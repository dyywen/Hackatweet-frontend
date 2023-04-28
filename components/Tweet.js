import Image from 'react';

function Tweet(){
    return(
        <div>
            <Image alt="avatar"/>
            <p>name</p>
            <p>username</p>
            {props.inputValue}
            <p>likeButton</p><span>counter</span>
        </div>
    )
}

export default Tweet;