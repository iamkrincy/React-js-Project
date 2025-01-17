import "./UserProfile.css";

const UserProfileCard = ({ name, email, phone, address, company, position, education, birthdate ,src}) => {

    return (
        <div className="user-profile-card">
            <h2>User Profile Card</h2>
            <img
                src={src}
                alt=""
            />
            <h4>Name :- {name}</h4>
            <h5>Email :- {email}</h5>
            <details>
                <h5>Phone :- {phone}</h5>
                <h5>Address :- {address}</h5>
                <h5>Birth Date :- {birthdate}</h5>
                <h5>Education :- {education}</h5>
                <h5>Company :- {company}</h5>
                <h5>Position :- {position}</h5>
            </details>
        </div>
    );
};

export default UserProfileCard;
