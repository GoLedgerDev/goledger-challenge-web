import React, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deleteFunction } from '../../Services/Axios/generalServices';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, ImageStreaming, DotContent,
} from './Style';

const StreamingData = ({ streaming, getStreaming }) => {
  const [boxState, setBoxState] = useState(false);

  const closeBox = () => {
    if (boxState) {
      setBoxState(false);
    }
  };

  const ClickdeleteGeneral = () => {
    deleteFunction(streaming._id);
    getStreaming();
  };

  return (

    <Content onMouseLeave={closeBox} onClick={closeBox}>
      <PersonDataBox>
        <ImageStreaming>
          <IoPersonCircleOutline size="100%" />
        </ImageStreaming>
        <TableContainer>
          <TableContent width={100}>
            <P>{streaming.name}</P>
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

export default StreamingData;