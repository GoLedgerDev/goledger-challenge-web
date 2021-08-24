import React, { useEffect, useState } from 'react';
import ListPage from '../../Components/ListPage';
import {
  TableHeader, P, Bar, TableTitle,
} from '../../Components/ListStyle/Style';
import StreamingData from '../../Components/StreamingData';
import { postFunction } from '../../Services/Axios/generalServices';

const StreamingListPage = () => {
  const [word, setWord] = useState();
  const [filterStreaming, setFilterStreaming] = useState([]);
  const [streaming, setStreaming] = useState([]);

  const getStreaming = async () => {
    await postFunction('query/search',  {
      "query": {
        "selector": {
          "@assetType": "streaming"
        }
      }
    })
    .then((response) => {
      const { data } = response;  
      setStreaming(data.result);
    });  
  };
  
  useEffect(() => {
    getStreaming();
  }, []);

  useEffect(() => {
    setFilterStreaming(
      streaming.filter((Streamings) => Streamings.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word, streaming]);

  useEffect(() => {
    setFilterStreaming(streaming);
  }, [streaming]);

  const ListStreaming = () => {
    if (streaming?.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Montserrat' }}>Sem resultados</h1>;
    }
    if (filterStreaming?.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Montserrat' }}>Sem resultados</h1>;
    }
    return filterStreaming?.map((StreamingListItem, index) => (
      <StreamingData streaming={StreamingListItem} key={index} getStreamings={getStreaming} />
    ));
  };

  return (
    <ListPage
      ButtonTitle="New Streaming"
      PageTitle="STREAMINGS"
      SearchWord={word}
      setWord={setWord}
      ListType={ListStreaming()}
      redirectTo="/streaming"
    >
      <TableHeader>
        <TableTitle width={100}>
          <P>Name</P>
        </TableTitle>
        <Bar />

      </TableHeader>
    </ListPage>
  );
};

export default StreamingListPage;
