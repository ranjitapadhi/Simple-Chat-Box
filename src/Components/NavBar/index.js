import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Routes from '../../Routes';
import { AmplifyAuthenticator, AmplifyButton, AmplifySignOut } from '@aws-amplify/ui-react';


class NavBar extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    const { collapseID } = this.state;

    return (
      <Router>
        <div className='flyout'>
          <MDBNavbar color='indigo' dark expand='md' fixed='top' scrolling>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
              <Logo style={{ height: '2.5rem', width: '2.5rem' }} />
              <strong className='align-middle'>MDB React</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>             

                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className='dopdown-toggle' nav>
                    <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                      <img
                        src='https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
                        className='rounded-circle z-depth-0'
                        style={{ height: '28px', padding: 0 }}
                        alt=''
                      />
                      <span>Account</span>
                      </MDBTooltip>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>My account</MDBDropdownItem>
                      <AmplifySignOut />
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                    to='/modals'
                  >
                    <MDBIcon icon='cog' />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className='mr-2'>
                  <MDBTooltip
                    placement='bottom'
                    domElement
                    style={{ display: 'block' }}
                  >
                    <a
                      className='nav-link Ripple-parent'
                      href='https://mdbootstrap.com/support/cat/react/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <strong>
                        <MDBIcon icon='question-circle' />
                      </strong>
                    </a>
                    <span>SUPPORT</span>
                  </MDBTooltip>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main style={{ marginTop: '4rem' }}>
            
          </main>

        </div>
      </Router>
    );
  }
}

export default NavBar;
