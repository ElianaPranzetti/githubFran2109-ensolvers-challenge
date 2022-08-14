import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Form style={{width: "50%"}}>
            <h1>Login</h1>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            <Button
                color="primary"
                onClick={() => console.log({email, password})}
            >
                Login
            </Button>
        </Form>
    );
}

export default Login;