import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useState, useContext } from 'react';
import axios from 'axios';
import { reactAppApiEndpoint } from './../../config/config';
import { UserContext } from '../../contexts/userContext.js';

const Categories = ({ categories, setCategories, setSelectedCategories }) => {
    const [newCategory, setNewCategory] = useState('');
    const [userContext, setUserContext] = useContext(UserContext);

    const addCategory = () => {
        if(newCategory.length > 0){
            const data = {
                name: newCategory
            }
            const headers = {
                withCredentials: true,
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${userContext.token}`
                }
              }
            console.log(headers);

            axios.post(reactAppApiEndpoint + 'api/categories', data, headers)
            .then(res => {
                setCategories([...categories, res.data]);
                setNewCategory('');
            }).catch(err => {
                console.log(err);
            })
        } else {
            alert('Please enter a category');
        }
    }
    return(
        <>
            <FormGroup>
                <Label for="category">Category</Label>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    filterSelectedOptions
                    onChange={(e, value) => setSelectedCategories(value)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Categories"
                        placeholder="Categories"
                    />
                    )}
                />
            </FormGroup>
            <FormGroup>
                <Row>
                    <Col sm="10">
                        <Input
                            type="text"
                            name="newCategory"
                            id="newCategory"
                            placeholder="New Category"
                            onChange={(e) => setNewCategory(e.target.value)}
                            value={newCategory}
                        />
                    </Col>
                    <Col sm="2">
                        <Button color="primary" onClick={addCategory}>Add</Button>
                    </Col>
                </Row>
            </FormGroup>
        </>
    )

}   

export default Categories;