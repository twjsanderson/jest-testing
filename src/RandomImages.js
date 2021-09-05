import { useState } from "react";
import NewButton from "./NewButton";
import { Row, Col } from "react-bootstrap";

const RandomImages = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

    const handleShowImage = () => {
        fetch('https://source.unsplash.com/random')
            .then(res => {
                setImage(res.url)
            }) 
            .catch(err => setError(err))
    }

    return (
        <>
            <h1 className='title'>Random Image Generator</h1>
            <Row>
                <Col>
                <NewButton
                    name='Generate Image'
                    color='primary'
                    func={handleShowImage}
                />
                </Col>
            </Row>
            <Row>
                {
                    image && error === null ? 
                        <img 
                            src={image}
                            className='w-25 h-25'
                            alt='random image'
                        /> :
                            <p>Sorry an error occurred, please try again.</p>
                }
            </Row>
        </>
    )
}

export default RandomImages;