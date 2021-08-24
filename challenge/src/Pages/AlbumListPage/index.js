import React, { useEffect, useState } from 'react';
import ListPage from '../../Components/ListPage';
import {
    TableHeader, P, Bar, TableTitle,
  } from '../../Components/ListStyle/Style';
import AlbumData from '../../Components/AlbumData';
import { postFunction } from '../../Services/Axios/generalServices';

const AlbumListPage = () => {
  const [word, setWord] = useState();
  const [filterAlbum, setFilterAlbum] = useState([]);
  const [album, setAlbum] = useState([]);


  const getAlbums = async () => {
    await postFunction('query/search',  {
      "query": {
        "selector": {
          "@assetType": "album"
        }
      }
    })
    .then((response) => {
      const { data } = response;  
      setAlbum(data.result);
    });  
  };
  
  useEffect(() => {
    getAlbums();
  }, []);

  useEffect(() => {
    setFilterAlbum(
      album.filter((Albums) => Albums.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word, album]);

  useEffect(() => {
    setFilterAlbum(album);
  }, [album]);

  const ListAlbums = () => {
    if (album?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterAlbum?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterAlbum?.map((AlbumListItem, index) => (
      <AlbumData album={AlbumListItem} key={index} getAlbums={getAlbums} />
    ));
  };

  return (
    <ListPage
      ButtonTitle="New Album"
      PageTitle="Albums"
      SearchWord={word}
      setWord={setWord}
      ListType={ListAlbums()}
      redirectTo="/Albums/create"
    >
      <TableHeader>
        <TableTitle width={25}>
          <P>Name</P>
        </TableTitle>
        <Bar />

        <TableTitle width={25}>
          <P>Year</P>
        </TableTitle>
        <Bar />

        <TableTitle width={25}>
          <P>Genre</P>
        </TableTitle>
        <Bar />

        <TableTitle width={25}>
          <P>N. of Tracks</P>
        </TableTitle>
        
      </TableHeader>
    </ListPage>
  );
};

export default AlbumListPage;