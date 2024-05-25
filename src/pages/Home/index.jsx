import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Note } from '../../components/Note/Index';
import { Input  } from '../../components/Input';
import { Header } from '../../components/button/Header';
import { Section  } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';



export function Home() {
    return(
        <Container>
            <Brand>
            <h1>Rockeatnotes</h1>
            </Brand>

         <Header />

            <Menu>
            <li> <ButtonText title="Todos" isActive/></li>
            <li> <ButtonText title="React"/></li>
            <li> <ButtonText title="NodeJs"/></li>
            </Menu>

            <Search>
             <Input placeholder="Pesquisar Pelo Titulo" icon={FiSearch}/>
            </Search>

            <Content>
            <Section title="Minhas Notas">

                <Note data={{title: 'React', tags: [
                    {id: '1', name:'react'},
                    {id: '2', name:'rockeatseat'}
                    
                    ]}}/>
            </Section>

            </Content>

            <NewNote to="/new">
            <FiPlus />
            Criar Nota
            </NewNote>
        </Container>
    );
};