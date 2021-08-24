import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteFunction } from '../../Services/Axios/generalServices';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, DotContent,
} from './Style';

const ArtistData = ({ artist, getArtists }) => {
  const [boxState, setBoxState] = useState(false);

  const closeBox = () => {
    if (boxState) {
      setBoxState(false);
    }
  };

  const ClickdeleteGeneral = () => {
    deleteFunction(artist._id);
    getArtists();
  };

  return (

    <Content onMouseLeave={closeBox} onClick={closeBox}>
      <PersonDataBox>
        <TableContainer>
          <TableContent width={20}>
            <P>{artist.name}</P>
          </TableContent>
          <TableContent width={10}>
            <P>{artist.location}</P>
          </TableContent>
          <TableContent width={70}>
            <P>{artist.description}</P>
          </TableContent>

          <DotContent width={2} justifycontent="flex-end">
            <P><BsThreeDots onClick={() => { setBoxState(!boxState); }} /></P>
          </DotContent>
        </TableContainer>
      </PersonDataBox>

      {boxState ? (
        <Box>
          <Ul>
            <Li>
              <Button>
                Editar
              </Button>
            </Li>
            <Li>
              <Button onClick={ClickdeleteGeneral}>
                Desativar
              </Button>
              <Icon onClick={ClickdeleteGeneral}>
                <FaRegTrashAlt />
              </Icon>
            </Li>
          </Ul>
        </Box>
      ) : null}
    </Content>
  );
};

export default ArtistData;