import './userprofilecard.css'

const Userprofilecardtask = ({
    name,
    email,
    profilePicture,
    phone,
    address,
    bio,
    jobTitle,
    company,
    
}) => {
    return (
        
        <>
        
            
                <div className="profile-card">
                <img src={profilePicture} alt={name} className="profile-pic" />

                <h2 className="profile-name">{name}</h2>
                <p className="profile-job">{jobTitle} @ {company}</p>

                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
    
                <p><strong>Address:</strong> {address}</p>
                

                <p className="profile-bio">{bio}</p>
       
            </div>
        </>
    )
}

export default Userprofilecardtask;
