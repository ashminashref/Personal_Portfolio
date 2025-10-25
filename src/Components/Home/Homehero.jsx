import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Homehero.css';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

function Homehero() {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = 'helloashmin@gmail.com';

  // --- THIS IS THE CORRECTED FUNCTION ---
  const handleCopy = async () => {
    // Prevent re-copying if already in "Copied" state
    if (isCopied) return;

    try {
      //  async clipboard API
      await navigator.clipboard.writeText(textToCopy);
      
      setIsCopied(true);

      // Reset the button after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div>
    
      <Container className='text-lg-center mt-5 pt-5 d-flex flex-column justify-content-start align-items-lg-center text-white'>
        <div className='d-flex align-items-lg-center justify-content-lg-center'>
           <button className='d-flex align-items-center mt-5 green-box rounded-pill'>
          <div className='round-green'></div>
          Active
        </button>
        </div>
       
        
        <h1 className='mt-5 hero-h1 mb-4'>
          Transforming Ideas into <br />
          Interactive <span className='word-span'><i> Web Experiences</i></span>
        </h1>

        <Row className='align-items-center justify-content-lg-center gy-3'>
          <Col xs='auto'>
            <button className='connect-btn rounded-pill'>
              Let's Connect
              <div className='round d-flex align-items-center justify-content-center'>
                <ArrowForwardOutlinedIcon className='arrow-icon' />
              </div>
            </button>
          </Col>
          <Col xs='auto'>
            <button
              onClick={handleCopy}
              className="rounded-pill copy"
            >
              {isCopied ? (
                <>
                  <CheckIcon fontSize="small" style={{ marginRight: '5px' }} />
                  Copied to clipboard
                </>
              ) : (
                <>
                  <ContentCopyIcon fontSize="small" style={{ marginRight: '5px' }} />
                  helloashmin@gmail.com
                </>
              )}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homehero;