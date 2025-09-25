import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Teamprofessionals.css'
const Teamprofessionals = () =>{
   
     let Teamprofessionals = [
        {
            "img": "/src/image/skill-img-1.jpg",
            "Name": "Unique Recipes",
            "chef": "There are many variations of passages of Ipsum available, but the majority"
        }
        , {
            "img": "/src/image/skill-img-2.jpg",
            "Name": "Quick Cooking",
            "chef": "There are many variations of passages of Ipsum available, but the majority"
        }
        , {
            "img": "/src/image/skill-img-3.jpg",
            "Name": "Dining Experience",
            "chef": "There are many variations of passages of Ipsum available, but the majority"
        }
     
      
    ]

    return (
        <>
            <section className='Team-professional-section'>
            
                     <img src='./src/image/book-leaf.png' className='book-leaf-image'></img>
                <Container>
                    <Row>
                     <div className='title'>
                            <h5 className='sub-title'>Our Skills </h5>
                            <h2>Team of Professionals</h2>
                        </div>
                        {Teamprofessionals.map((v, i) => {
                            return (
                                <>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className='Team-professional'>
                                            <div className="team-professional-image">
                                                <img src={v.img}></img>
                                            </div>
                                            <div className="team-professional-content">
                                                <h3>{v.Name}</h3>
                                                <p>{v.chef}</p>
                                               

                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Teamprofessionals;