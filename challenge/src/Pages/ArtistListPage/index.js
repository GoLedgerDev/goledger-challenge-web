import React, { useEffect, useState } from 'react';
import ListPage from '../../Components/ListPage';
import {
    TableHeader, P, TableTitle,
  } from '../../Components/ListStyle/Style';
import ArtistData from '../../Components/ArtistData';
import { postFunction } from '../../Services/Axios/generalServices';

const ArtistListPage = () => {
  const [word, setWord] = useState();
  const [filterArtist, setFilterArtist] = useState([]);
  const [artist, setArtist] = useState([]);

  const getArtists = async () => {
    await postFunction('query/search',  {
      "query": {
        "selector": {
          "@assetType": "artist"
        }
      }
    })
    .then((response) => {
      const { data } = response;  
	    setArtist(data.result);
    });  
  };
  
  useEffect(() => {
    getArtists();
  }, []);

  useEffect(() => {
    setFilterArtist(
      artist.filter((Artist) => Artist.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word, artist]);

  useEffect(() => {
    setFilterArtist(artist);
  }, [artist]);

  const listArtists = () => {
    if (artist?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterArtist?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterArtist?.map((ArtistListItem, index) => (
      <ArtistData artist={ArtistListItem} key={index} getArtist={getArtists} />
    ));
  };

  return (
    <ListPage
      ButtonTitle="New Artist"
      PageTitle="Artists"
      SearchWord={word}
      setWord={setWord}
      ListType={listArtists()}
      redirectTo="/artist/create"
    >
      <TableHeader>
        <TableTitle width={20}>
          <P>Name</P>
        </TableTitle>

        <TableTitle width={10}>
          <P>Location</P>
        </TableTitle>

        <TableTitle width={70}>
          <P>Description</P>
        </TableTitle>

      </TableHeader>
    </ListPage>
  );
};

export default ArtistListPage;