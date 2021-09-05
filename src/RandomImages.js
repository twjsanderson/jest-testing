import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// Components
import NewButton from './NewButton';


const RandomImages = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const api = 'https://source.unsplash.com/random';

    const handleShowImage = (url) => {
        fetch(url)
            .then(res => setImage(res.url))
            .catch(err => setError(err))
    }

    const clearShowImage = () => setImage(null);

    return (
        <>
            <h1 className='title'>Random Image Generator</h1>
            <Row>
                <Col>
                <NewButton
                    name='Generate Image'
                    color='primary'
                    func={() => handleShowImage(api)}
                />
                <NewButton
                    name='Clear Image'
                    color='secondary'
                    func={clearShowImage}
                />
                </Col>
            </Row>
            <Row>
                {
                    image && error === null ? 
                        <img 
                            src={image}
                            className='w-25 h-25'
                            alt='something cool'
                        /> :
                            null
                }
                {
                    error ? <p>Sorry an error occurred, please try again.</p> : null
                }
            </Row>
        </>
    )
}

export default RandomImages;