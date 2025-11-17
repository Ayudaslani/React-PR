import Carousel from 'react-bootstrap/Carousel';
export const Silder = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src='./src/Image/slider1.jpeg' style={{ height: "100%", width: "100%", objectFit: "cover" }}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src='./src/Image/slider2.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src='./src/Image/slider3.jpg' style={{ height: "100%", width: "100%", objectFit: "cover" }}></img>

        </Carousel.Item>
      </Carousel>

    </>
  )
}
export default Silder;