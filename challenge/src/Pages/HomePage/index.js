import React from 'react';
import { Background, Center, Button } from './Style';
import RedirectListButton from '../../Components/Redirect'

const HomePage = () => {
    return(
        <Background>
            <Center>
                <Button>
                    <RedirectListButton title='ALBUM' redirectTo='/album'/>
                </Button>
                <Button>
                    <RedirectListButton title='ARTIST' redirectTo='/artist'/>
                </Button>
                <Button>
                    <RedirectListButton title='STREAMING' redirectTo='/streaming'/>
                </Button>
            </Center>
        </Background>
    );
};

export default HomePage;