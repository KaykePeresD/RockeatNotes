import { Header } from '../../components/button/Header';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/button'
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Container, Form } from './styles';

export function New(){
    return(
        <Container>
        <Header />

        <main>
            <Form>
            <header>
                <h1>Criar Nota</h1>
                <Link to="/">Voltar</Link>
            </header>

            <Input  placeholder="Título" />
            <Textarea placeholder="Observações" />

            <Section title="Links úteis">
                <NoteItem value="https://rockeatseat.com.br"/>
                <NoteItem isNew placeholder="Novo link"/>
            </Section>

            <Section title="Marcadores">
                <div className="tags">
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Nova Tag"/>
               </div>
            </Section>
            <Button title="Salvar"/>
            </Form>

            
        </main>
        </Container>
    );
}