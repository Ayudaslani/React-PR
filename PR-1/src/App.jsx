import Userprofilecardtask from "./component/userprofilecardtask/userprofilecard"


function App() {
  

  return (
    <>
    <h1 align="center">User profile</h1>
      <div className="card-grid">
        <Userprofilecardtask
        name="Sophia Anderson"
        email="sophia@example.com"
        profilePicture="https://thumbs.dreamstime.com/b/asian-business-woman-white-background-copy-space-beautiful-young-posing-105023932.jpg"
        phone="+91 9876543210"
        address="Indore, India"
        bio="Passionate full-stack developer and lifelong learner."
        jobTitle="Software Engineer"
        company="TechCorp"
      />

        <Userprofilecardtask
        name="Olivia Williams"
        email="olivia@example.com"
        profilePicture="https://static.vecteezy.com/system/resources/previews/038/962/461/non_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
        phone="+91 2345678913"
        address="mumbai, India"
        bio="Passionate graphic designer and lifelong learner."
        jobTitle="Graphics Designer"
        company="SkyInfotech"
      />

        <Userprofilecardtask
        name="Grace Miller"
        email="grace@example.com"
        profilePicture="https://thumbs.dreamstime.com/b/business-woman-showing-copy-space-product-advertising-te-business-woman-showing-copy-space-product-advertising-text-112573351.jpg"
        phone="+91 9876543211"
        address="Gujarat, India"
        bio="Passionate AI/ML Engineer and lifelong learner."
        jobTitle="AI/ML Engineer"
        company="ScorpioSoft Solutions"
      />
      </div>
      
    </>
  )
}

export default App
