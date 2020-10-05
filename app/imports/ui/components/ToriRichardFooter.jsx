import React from 'react';
import { Grid, Image, Input, List } from 'semantic-ui-react';

export class ToriRichardFooter extends React.Component {
  render() {
    return (
        <footer>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column textAlign='center'>
                <Image src='/images/bwod-join-our-ohana-icon.png' size='large' />
                <h1 className='tori-blue'>JOIN OUR OHANA</h1>
                <Input size='big' icon='chevron right' transparent placeholder='Your email' />
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item className='tori-blue'>Contact Us</List.Item>
                  <List.Item className='tori-blue'>Gift Cards</List.Item>
                  <List.Item className='tori-blue'>Return & Exchange</List.Item>
                  <List.Item className='tori-blue'>Shipping & Handling</List.Item>
                  <List.Item className='tori-blue'>Track A Package</List.Item>
                  <List.Item className='tori-blue'>Store Credit Balance</List.Item>
                  <List.Item className='tori-blue'>Size Guide</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item className='tori-blue'>Talk Story with Tori</List.Item>
                  <List.Item className='tori-blue'>TR Cares</List.Item>
                  <List.Item className='tori-blue'>Join Our Team</List.Item>
                  <List.Item className='tori-blue'>Corporate Uniforms</List.Item>
                  <List.Item className='tori-blue'>Privacy Policy</List.Item>
                  <List.Item className='tori-blue'>ADA Accessibility</List.Item>
                  <List.Item className='tori-blue'>Find a Store</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </footer>
    );
  }
}
