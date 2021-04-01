import React , {Component , PropTypes} from 'react';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';



export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('content');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save(`YannDevs.pdf`);
      })
    ;
  }

  render() {
    return (
      <div className="mb5">

         <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Go to home page</a>
              <button className="btn btn-primary" onClick={this.printDocument}>Export As PDF</button>
    
            </div>
        </nav><br></br>
        
      </div>      
    );
  }
}