import React, { Component } from 'react'
import '../css/proview.css'
import excel from '../assets/excel.svg'
import pdf from '../assets/pdf.svg'

class Proview extends Component {
  render() {
    return (
      <div className='proview'>
          <div className='protop'>
              <p>Projects overview</p>
              <div className='proright'>
                  <p>Download report</p>
                  <img src={excel} alt=''/>
                  <img src={pdf} alt=''/>
              </div>
            </div>
          
          </div>
    )
  }
}
export default  Proview;