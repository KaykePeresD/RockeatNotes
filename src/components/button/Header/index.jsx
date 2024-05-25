import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'


export function Header(){

    return(
       <Container>
        <Profile to="/profile">
            <img src="https://github.com/KaykePeresD.png" 
            alt="Foto de Usuario" />

            <div>
                <span>Bem-Vindo</span>
                <strong>Kayke Peres</strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine />
        </Logout>
       </Container>
    );
}
