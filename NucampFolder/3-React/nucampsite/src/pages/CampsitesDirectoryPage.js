import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
  // selectedCampsite is what will change
  // selectRandomCampsite() is defined in campsitesSlice.js (a Redux thing)
  let selectedCampsite = selectRandomCampsite();

  // toggleCampsite is the handler that will change the campsite
  const toggleCampsite = () => {
    selectedCampsite = selectRandomCampsite();
    console.log(selectedCampsite);
  };

  return (
    <Container>
      <Button onClick={() => toggleCampsite()}>Select Random Campsite</Button>
      <Row>
        <Col sm='5' md='7'>
          <CampsitesList />
        </Col>
        <Col sm='7' md='5'>
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsitesDirectoryPage;
