import React from 'react';

// const Cardlist = (props) => (
//     <div>
//         {testData.map(profile => <Card {...profile} />)}

//     </div>
// )

// const testData = [
//     { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
//     { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
//     { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
// ];


class Card extends React.Component {
    render() {
        // const profile = testData[0];
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt={profile.name} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="login">{profile.login}</div>
                    <div className="twitter_username">{profile.twitter_username}</div>

                </div>
            </div>
        )
    }
}
export default Card;