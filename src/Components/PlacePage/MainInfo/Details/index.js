import React from 'react';

import LocationIcon from './LocationIcon';

import {
  Container, LocationTitle, Place, Text, Title,
} from './Details.styled';

const Details = () => (
  <Container>
    <Title>WINZAVOD</Title>
    <Place>
      <LocationIcon />
      <LocationTitle>Moscow, st. Kurskaya</LocationTitle>
    </Place>
    {/* eslint-disable-next-line max-len */}
    <Text>Winzavod Alexanderis a Renal Physician who has comprehensive expertise in the fields of Renal Medicine and Internal Medicine. While Dr Ho specializes in dialysis and critical care nephrology, years of extensive training have also equipped him with skills to effectively handle a wide range of other kidney diseases, including kidney impairment, inflammation, infection and transplantation.</Text>
  </Container>
);

export default Details;
