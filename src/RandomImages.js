import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import DisplayImage from './DisplayImage';

// Components
import NewButton from './NewButton';

const RandomImages = ({ api }) => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);

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
                <DisplayImage 
                    image={image} 
                    error={error} 
                />
            </Row>
        </>
    )
}

export default RandomImages;