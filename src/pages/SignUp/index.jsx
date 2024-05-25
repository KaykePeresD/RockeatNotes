import { Container, Form, Background} from "./styles";
import { Input } from '../../components/Input';
import { FiMail, FiLock, FiMeh, FiUser} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/button';

export function SignUp() {

    return(
  <Container>
 
  <Background />

 <Form action="">
    <h1>Rockeatnotes</h1>
    <p>Aplicação para salvar e gerenciar seus links úteis.</p>

    <h2>Crie sua conta</h2>

    <Input
    placeholder="Nome de Usuário"
    type="Text"
    icon={FiUser} 
    /> 

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

   <Button title="Cadastrar" />

   <Link to="/">
    Voltar para o login
   </Link>
 </Form>

 </Container>

    )
}