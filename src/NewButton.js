import { Button } from 'react-bootstrap';

const NewButton = ({ name, color, func }) => {
    return (
        <Button
            variant={color}
            onClick={func}
        >
            {name}
        </Button>
    )

}

export default NewButton;