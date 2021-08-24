import { FaSistrix } from 'react-icons/fa';
import {
  Main, Container, Title, Search, ContentBox, Header, List, ButtonDiv,
} from './Style';
import SearchInput from '../SerchInput';
import RedirectListButton from '../Redirect'

const ListPage = ({
  ButtonTitle, ButtonFunction, PageTitle, children, setWord, SearchWord, ListType,
  redirectTo,

}) => (
  <Main>
    <Container>
      <Title>{PageTitle}</Title>
      <Header>
        <Search>
          <SearchInput
            type="text"
            icon={<FaSistrix />}
            value={SearchWord}
            setWord={(value) => setWord(value)}
          />
        </Search>
        <ButtonDiv>
          <RedirectListButton title={ButtonTitle} redirectTo={redirectTo} click={ButtonFunction} />
        </ButtonDiv>
      </Header>

      <ContentBox>
        {children}
        <List>
          {ListType}
        </List>
      </ContentBox>
    </Container>
  </Main>
);

export default ListPage;
