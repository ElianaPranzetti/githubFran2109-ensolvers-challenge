import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { useState, useCallback, useEffect, useContext } from 'react';
import CategoriesSelector from './../CategoriesSelector/CategoriesSelector';

const Add = ({archived, categories, setCategories}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

    return (
        <>
            <Button color="info" size="sm" onClick={toggle}>
                Create {archived && "Archived"} Note
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create {archived && "Archived"} Note</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                                type="text" 
                                name="title" 
                                id="title" 
                                placeholder="Title" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                invalid={title.length===0}
                            />
                            <FormFeedback>Please enter a Title</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">Content</Label>
                            <Input 
                                type="textarea" 
                                name="content" 
                                id="content" 
                                placeholder="Content" 
                                value={content} 
                                onChange={(e) => setContent(e.target.value)}
                                invalid={content.length===0}
                            />
                            <FormFeedback>Please enter some Content</FormFeedback>
                        </FormGroup>
                        <CategoriesSelector 
                            categories={categories} 
                            setCategories={setCategories}
                            setSelectedCategories={setSelectedCategories} 
                        />
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
        
    )
}

export default Add;