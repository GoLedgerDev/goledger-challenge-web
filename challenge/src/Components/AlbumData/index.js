import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteFunction } from '../../Services/Axios/generalServices';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, DotContent,
} from './Style';

const AlbumData = ({ album, getAlbum }) => {
  const [boxState, setBoxState] = useState(false);

  const closeBox = () => {
    if (boxState) {
      setBoxState(false);
    }
  };

  const ClickdeleteGeneral = () => {
    deleteFunction(album._id);
    getAlbum();
  };

  return (

    <Content onMouseLeave={closeBox} onClick={closeBox}>
      <PersonDataBox>
        <TableContainer>
          <TableContent width={25}>
            <P>{album.name}</P>
          </TableContent>
          <TableContent width={25}>
            <P>{album.year}</P>
          </TableContent>
          <TableContent width={25}>
            <P>{album.genre}</P>
          </TableContent>
          <TableContent width={25}>
            <P>{album.nTracks}</P>
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

export default AlbumData;