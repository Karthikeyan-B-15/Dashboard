import React, { Component } from 'react'
import '../css/progallery.css'
import img1 from '../assets/image-1.png'
import img2 from '../assets/image-2.png'
import img3 from '../assets/image-3.png'
import img4 from '../assets/image-4.png'
import img5 from '../assets/image-5.png'
import img6 from '../assets/image-6.png'
import  leftarr from '../assets/leftarr.svg'
import rightarr from '../assets/rightarr.svg'
import addnew from '../assets/addnew.svg'
class Progallery extends Component {
  render() {
      const image=[img1,img2,img3,img4,img5,img6];
    return (
      <div className='progallery'>
          <div className='galtop'>
              <p>Project gallery</p>
              <select >
                    <option value="PlantD-App">PlantD-App</option>    
            </select>   
        </div>
        <div className='galimg'>
            {
                image.map((val,key)=>{
                   return( <img src={val} alt='' key={key} />)
                })
            }
        </div>
        <div className='galbottom'>
            <div className='galleft'>
                    <img src={leftarr} alt=""/>
                    <p>6/15</p>
                    <img src={rightarr} alt=""/>
            </div>
            <div className='galright'>
                    <img src={addnew} alt=""/>
                    <p>Add screens</p>
            </div>
        </div>
         
          </div>
    )
  }
}

export default Progallery