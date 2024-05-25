import { Container, Form, Background} from "./styles";
import { Input } from '../../components/Input';
import { FiMail, FiLock} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/button';

export function Signin(){

    return(
  <Container>
 <Form action="">
    <h1>Rockeatnotes</h1>
    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

    <h2>Faça seu login</h2>

    <Input
    placeholder="E-mail"
    type="Text"
    icon={FiMail} 
    /> 
    
<Input
    placeholder="Senha"
    type="password"
    icon={FiLock} 
    />

   <Button title="Entrar" />

   <Link to="/register">
    Criar Conta
   </Link>
 </Form>

 <Background />
 </Container>

    )
}