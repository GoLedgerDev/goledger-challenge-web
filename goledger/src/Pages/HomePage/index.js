import React from 'react';
import { Background, Center, Button } from './Style';

const HomePage = () => {
    return(
        <Background>
            <Center>
                <Button>
                    CATEGORY
                </Button>
                <Button>
                    PRODUCT
                </Button>
                <Button>
                    SELLER
                </Button>
            </Center>
        </Background>

    );
};

export default HomePage;