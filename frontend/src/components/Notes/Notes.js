import { useEffect, useState, useContext } from "react";
import { FaStickyNote } from "react-icons/fa";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col, Row, CardFooter, Button } from 'reactstrap';
import { UserContext } from "./../../contexts/userContext";
import { DataContext } from "./../../contexts/dataContext";
import { reactAppApiEndpoint } from "../../config/config.js";
import './Notes.css';
import Add from './../Add/Add.js';
import Remove from './../Remove/Remove.js';
import ArchiveUnarchive from "./../ArchiveUnarchive/ArchiveUnarchive.js";
import Edit from "./../Edit/Edit.js";
import axios from "axios";

const Notes = () => {
    const [archived, setArchived] = useState(false);
    const [userContext, setUserContext] = useContext(UserContext);
    const [dataContext, setDataContext] = useContext(DataContext);

    const fetchData = () => {
        const headers = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios.get(reactAppApiEndpoint + 'api/notes/all', headers)
            .then(res => {
                setDataContext({ ...dataContext, categories: res.data.categories, notes: res.data.notes });
            }).catch(err => {
                console.log(err);
            })        
    }


    useEffect(() => {
        fetchData();
    } ,[]);

    return (
        <div style={{width:"80%"}}>
            <h1>My Notes</h1>
            <Add archived={archived}/>
            <p
                onClick={() => setArchived(!archived)}
                style={{
                    cursor: "pointer",
                    color: "blue",
                    fontSize: "20px",
                    width: "auto"
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
                {dataContext.notes && dataContext.notes.map(note => (
                    Boolean(note.archived) === archived && (
                        <Card key={note.id} className="Note">
                            <Row>
                                <Col sm="4" className="NoteIcon" style={{paddingLeft: "30px", paddingTop: "10px"}}>
                                    <FaStickyNote size={"90px"}/>
                                </Col>
                                <Col sm="8">
                                    <CardBody>
                                        <CardTitle>{note.title}</CardTitle>
                                        <CardSubtitle>Last Edited: {note.updated_at}</CardSubtitle>
                                        <CardText>{note.content}</CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                            {
                                userContext.token && (
                                    <CardFooter>
                                        <Row>
                                            <Edit note={note}/>
                                            <Remove note={note}/>
                                            <ArchiveUnarchive archived={archived} note={note}/>
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