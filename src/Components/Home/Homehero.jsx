import React, { useState } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './Homehero.css'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy'; // Import a copy icon
import CheckIcon from '@mui/icons-material/Check';
function Homehero() {
  const [isCopied, setIsCopied] = useState(false)
  
  const textToCopy = 'helloashmin@gmail.com'

  const handleCopy = () => {
    if(isCopied) return


  const textArea = document.createElement('textarea')
  textArea.value = textToCopy

  // hide it from view
  textArea.style.position = 'absolute'
  textArea.style.left = '-9999px'
  textArea.style.top = '0'

  // add to DOM
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try{
    document.execCommand('copy')
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)

    },2000)
  } catch (err){
    console.log('failed to copy text',err)
  }

  document.body.removeChild(textArea)
    }
  return (
    <div>
        <Container className='text-lg-center mt-5 pt-5 text-white'> 
          
<h1 className='mt-5 hero-h1 mb-4'>Transforming Ideas into   <br />Interactive <span className='word-span'><i> Web Experiences</i></span></h1>

{/* <div className="d-lg-flex justify-content-lg-center   gap-4"> */}
<Row className='align-items-center justify-content-lg-center gy-3'>
  <Col xs= 'auto'>
  <button className='connect-btn rounded-pill'>
      
      Let's Connect 
      <div className='round d-flex align-items-center justify-content-center'>
        <ArrowForwardOutlinedIcon className='arrow-icon'/>
      </div>
      </button>

</Col>
<Col xs = 'auto'>
      <button 
            variant="outline-light" // A simple bootstrap button
            onClick={handleCopy}   // Triggers the copy function
            className="rounded-pill copy"
          >
            
            {isCopied ? (
              <>
                <CheckIcon fontSize="small" style={{ marginRight: '5px' }} />
                Copied to clipboard
              </>
            ) : (
              <>
                <ContentCopyIcon fontSize="small" style={{ marginRight: '5px', }} />
                helloashmin@gmail.com
              </>
            )}
          </button>
  </Col>
</Row>
    
  
{/* </div> */}


        </Container>
    </div>
  )
}

export default Homehero