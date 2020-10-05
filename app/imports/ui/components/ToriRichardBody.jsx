import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

class ToriRichardMain extends React.Component {
  render() {
    return (
        <main>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src='/images/bwod-17264.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-17263.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-17265.jpg' size='large' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image src='/images/bwod-16739.png' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-17349.jpg' size='large' />
              </Grid.Column>
              <Grid.Column>
                <Image src='/images/bwod-2777.jpg' size='large' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </main>
    );
  }
}

export default ToriRichardMain;
