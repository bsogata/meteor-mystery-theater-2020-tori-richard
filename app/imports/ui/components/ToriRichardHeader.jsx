import React from 'react';
import { Icon, Image, Input, Menu } from 'semantic-ui-react';

export class ToriRichardHeader extends React.Component {
  render() {
    return (
        <header>
          <Image src='/images/bwod-tori_logo.jpg' size='large' alt='Tori Richard logo' />

          <Menu borderless>
            <Menu.Item name='MENS' className='tori-blue' />
            <Menu.Item name='WOMENS' className='tori-blue' />
            <Menu.Item name='ABOUT' className='tori-blue' />
            <Menu.Item name='STORES' className='tori-blue' />

            <Menu.Item name='Register' className='tori-gray' position='right' />
            <Menu.Item name='Login' className='tori-gray' />
            <Menu.Item name='Shopping Bag' className='tori-gray'>
              Shopping Bag
              <Icon name='shopping bag' />
            </Menu.Item>
            <Menu.Item name='Register' className='tori-gray'>
              <Input className='icon' icon='search' placeholder='Search' transparent />
            </Menu.Item>

            <Menu.Item>
              <a href='https://www.instagram.com/toririchard/'>
                <Icon name='instagram' className='tori-blue' />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='https://www.facebook.com/ToriRichardLtd'>
                <Icon name='facebook' className='tori-blue' />
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href='https://twitter.com/ToriRichardLtd'>
                <Icon name='twitter' className='tori-blue' />
              </a>
            </Menu.Item>
          </Menu>
        </header>
    );
  }
}
