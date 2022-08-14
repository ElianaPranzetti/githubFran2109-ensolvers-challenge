import { useEffect, useState, useContext } from "react";
import { FaStickyNote, FaTrashAlt, FaEdit, FaArchive, FaRegArrowAltCircleUp } from "react-icons/fa";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, Row, CardFooter, Button } from 'reactstrap';
import { UserContext } from "./../../contexts/userContext";
import './Notes.css';
import Add from './../Add/Add.js';

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [archived, setArchived] = useState(true);
    const [userContext, setUserContext] = useContext(UserContext);

    useEffect(() => {
        setNotes([
            {
                id: 1,
                title: "Note 1",
                content: "This is note 1",
                createdAt: "2020-01-01",
                updatedAt: "2020-01-01",
                archived: false,
            },
            {
                id: 2,
                title: "Note 2",
                content: "This is note 2",
                createdAt: "2020-01-01",
                updatedAt: "2020-01-01",
                archived: true,
            },
            {   
                id: 3,
                title: "Note 3",
                content: "This is note 3",
                createdAt: "2020-01-01",
                updatedAt: "2020-01-01",
                archived: false,
            }
        ]);
        setCategories([
            {
                id: 1,
                name: "Category 1",
            },
            {
                id: 2,
                name: "Category 2"
            },
            {
                id: 3,
                name: "Category 3"
            }
        ]);
    } ,[]);

    return (
        <div style={{width:"80%"}}>
            <h1>My Notes</h1>
            <Add archived={archived} categories={categories} setCategories={setCategories}/>
            <p
                onClick={() => setArchived(!archived)}
                style={{
                    cursor: "pointer",
                    color: "blue",
                    fontSize: "20px"
                }}
            >
                {
                    archived ? (
                        "Go back to Unarchived Notes"
                    ) : (
                        "Go to Archived Notes"
                    )
                }
            </p>
            <div className="Notes">
                {notes.map(note => (
                    note.archived === archived && (
                        <Card key={note.id} className="Note">
                            <Row>
                                <Col sm="4" className="NoteIcon" style={{paddingLeft: "30px", paddingTop: "10px"}}>
                                    <FaStickyNote size={"90px"}/>
                                </Col>
                                <Col sm="8">
                                    <CardBody>
                                        <CardTitle>{note.title}</CardTitle>
                                        <CardSubtitle>Last Edited: {note.updatedAt}</CardSubtitle>
                                        <CardText>{note.content}</CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                            {
                                userContext.token && (
                                    <CardFooter>
                                        <Row>
                                            <Col>
                                                <Button color="primary" >
                                                    <FaEdit size={"20px"}/>
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button color="danger">
                                                    <FaTrashAlt size={"20px"}/>
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button color="success">
                                                    {
                                                        archived ? (
                                                            <FaRegArrowAltCircleUp size={"20px"}/>
                                                        ) : (
                                                            <FaArchive size={"20px"}/>
                                                        )
                                                    }
                                                </Button>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                )
                            }
                        </Card>
                    )
                ))}
            </div>
        </div>
    );
}

export default Notes;