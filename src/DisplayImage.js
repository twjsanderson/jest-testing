
const DisplayImage = ({ image, error }) => {
    return (
        <>
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
        </>
    )
}

export default DisplayImage;