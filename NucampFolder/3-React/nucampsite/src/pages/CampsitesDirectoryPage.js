import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';
import { useState } from 'react';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
  // using useState

  // selectRandomCampsite sets the initial state
  // toggleCampsite is what changes/updates the state
  // the below is for a random campsite
  //const [selectedCampsite, toggleCampsite] = useState(selectRandomCampsite());

  // to select a campsite by id - initial state is the first campsite in the campsites object
  const [campsiteId, setCampsiteId] = useState(0);
  // campsiteId is from campsitesSlice.js
  const selectedCampsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <Row>
        <Col sm='5' md='7'>
          <CampsitesList setCampsiteId={setCampsiteId} />
        </Col>
        <Col sm='7' md='5'>
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsitesDirectoryPage;
