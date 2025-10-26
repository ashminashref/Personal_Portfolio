import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom';
//  CSS file
import './NavModal.css'; 

//  MUI Icons 
import KeyboardCommandKeyOutlinedIcon from '@mui/icons-material/KeyboardCommandKeyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';


function NavItem({ icon, title, subtitle }) {
  return (
    <div className="nav-list-item">
      {icon}
      <div className="nav-item-text">
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="command-palette-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
       
    >
    
      <Modal.Body>

        <div className="search-bar-container">
          <SearchOutlinedIcon sx={{ color: '#888' }} />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
          <div className="esc-hint">ESC</div>
        </div>

        {/* Navigation List */}
        <div className="nav-list-container">
          <p className="nav-list-title">Navigation</p>

          <Link to = '/'>
            <NavItem 
            icon={<HomeOutlinedIcon />} 
            title="Home" 
            as = '/Home'
            subtitle="Welcome to my forever work-in-progress!"
          />
          </Link>
        
          <NavItem 
            icon={<AccountTreeOutlinedIcon />} 
            title="Projects" 
            subtitle="Showcase of my projects"
          />
          <NavItem 
            icon={<ArticleOutlinedIcon />} 
            title="Blog" 
            subtitle="Thoughts, mental models, and tutorials"
          />
          <NavItem 
            icon={<MarkAsUnreadOutlinedIcon />} 
            title="Guestbook" 
            subtitle="Leave a message for me"
          />
          <NavItem 
            icon={<LinkOutlinedIcon />} 
            title="Links" 
            subtitle="All my links are here"
          />

          <Link to  = '/about'>
           <NavItem 
            icon={<InfoOutlinedIcon />} 
            title="About" 
            subtitle="Learn more about me"
          />
          </Link>
         
          <NavItem 
            icon={<FormatListBulletedOutlinedIcon />} 
            title="Bucket List" 
            subtitle="Things to do at least once in my life"
          />
          <a href="https://cal.com/ashmin-ashraf/schedule-meeting">
 <NavItem 
            icon={<CallOutlinedIcon />} 
            title="Book a Call" 
            subtitle="Let's chat!"
          />
          </a>
          
        </div>

        {/* Bottom Hints */}
        <div className="modal-hints">
          <div>
            <span className="hint-key">↑</span>
            <span className="hint-key">↓</span>
            navigate
          </div>
          <div>
            <span className="hint-key">↵</span>
            select
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function NavModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <a onClick={() => setModalShow(true)}>
        <KeyboardCommandKeyOutlinedIcon sx={{ fontSize: '25px', margin: '0px', padding: '0px', cursor: 'pointer' }} />
      </a>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default NavModal;