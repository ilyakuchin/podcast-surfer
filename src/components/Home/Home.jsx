import React from 'react';
import { Image, Header, Grid } from 'semantic-ui-react';
import exploreImage from './undraw_imagination_ok71.svg';

export default function Home() {
  return (
    <div>
      <Grid columns='2'>
        <Grid.Column textAlign='center' verticalAlign='middle'>
          <Image size='big' src={exploreImage} />
        </Grid.Column>
        <Grid.Column textAlign='center' verticalAlign='middle'>
          <Header as='h1'>Discover audio stories, news and shows</Header>
        </Grid.Column>
      </Grid>
    </div>
  );
}
