import '../styles/default.css'

import { Navigation } from 'baseui/side-navigation'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';

type styleProps = {
  $active: any 
}

export const NavItem = {
  style: (props: styleProps) => {
    const { $active } = props

    if (!$active)
      return {
        fontWeight: 600, 
        ':hover': {
          color: 'white',
          backgroundColor: '#b30074',
        },
      };
    return {
      fontWeight: 600,
      backgroundColor: '#4d4c4c',
      borderLeftColor: '#b30074',
      color: '#b30074',
      ':hover': {
        color: '#4d4c4c',
      },
    };
  },
}

const SideNavItems = [
  {
    title: 'Home',
    itemId: 'home'
  },
  {
    title: 'Users',
    itemId: 'users',
  },
  {
    title: 'About',
    itemId: 'about' 
  }
]

export const DefaultLayout = () => {
  const [activeItem, setActiveItem] = useState('')
  const navigate = useNavigate()
  return(
    <div className='page-conatiner'>
      <div className='side-bar-nav' style={{ height: 'calc(100% - 3.5rem)' }}>
        <Navigation
          items={ SideNavItems }
          activeItemId={ activeItem }
          overrides={{ NavItem }}
          onChange={({ event, item }) => {
            event.preventDefault()
            navigate(`/${item.itemId}`)
            setActiveItem(item.itemId!) // ts error ignored because it is Navigation property
            }
          }
        />
      </div>
      <div className='page-container-content'>
        <div className='top-bar'>
            <FontAwesomeIcon icon={ faShieldDog } size='2xl' color='white' style={{ float: 'right'}}/>
            <span className='top-bar-title'>GuardDog</span>
        </div>
        <div className='content-container '><Outlet/></div>
      </div>
    </div>
  )
}