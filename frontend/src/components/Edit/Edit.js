import { Col, Button } from "reactstrap";
import { FaEdit } from "react-icons/fa";

const Edit = ({note}) => {
    return(
        <Col>
            <Button color="primary" >
                <FaEdit size={"20px"}/>
            </Button>
        </Col>
    )
}

export default Edit;