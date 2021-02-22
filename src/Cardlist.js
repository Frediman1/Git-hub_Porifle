import React from 'react';
import Card from './Card.js';




// const testData = [
//     { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
//     { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
//     { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
// ];

const Cardlist = (props) => {
    const [counter, updateCounter] = React.useState(0)
    return (< div >
        <a onClick={(e) => {
            e.preventDefault();
            updateCounter(counter + 1)
        }}>{counter}</a>
        { props.profiles.map(profile => <Card {...profile} />)}

    </div >)
}



export default Cardlist;