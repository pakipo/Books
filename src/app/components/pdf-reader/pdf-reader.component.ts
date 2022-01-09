import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.scss']
})
export class PdfReaderComponent implements OnInit {
  docLoad: boolean = false;
  pdfSrc: string = '../assets/bookPdf/book1.pdf';
  page: number = 1;
  pdfNumPages!: number;
  maxlength!: number;
  inputWidth: string = '35px';
  zoom: number = 1;
  rotation: number = 0;
  constructor(
    private renderer: Renderer2) { }

  ngOnInit(): void {

  }
 // после загрузки документа

  afterLoad(pdf: any) {
    this.pdfNumPages = pdf._pdfInfo.numPages;
    this.maxlength = String(this.pdfNumPages).length;
    this.inputWidth = 'width:' + (this.maxlength * 15 + 25) + 'px;'
   this.docLoad = true;
  }
  //навигация по страницам start
  goToFirstPage() {
    if (this.page === 1) return;
    this.page = 1;
  }
  goToPrevPage() {
    if (this.page === 1) return;
    this.page -= 1;
  }
  goToNextPage() {
    if (this.page === this.pdfNumPages) return;
    this.page += 1;
  }
  goToLastPage() {
    if (this.page === this.pdfNumPages) return;
    this.page = this.pdfNumPages;
  }
  
  inpPage(e: any) {
    if (e.target.value < 1) { this.page = 1; e.target.value = 1; return; }
    if (e.target.value > this.pdfNumPages) {
      this.page = this.pdfNumPages; e.target.value = this.pdfNumPages; return;}
    this.page = +e.target.value; 
  }
   //навигация по страницам end

  //количество символов в input не больше maxlength
  input(e: any) {
    if (e.target.value.length === '' || e.target.value < 1) {
      e.target.value = 1; return;
    }
    if (e.target.value.length > this.maxlength) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)} 
 }

  zoomIn() {
    this.zoom < 4 ? this.zoom += 0.1 : this.zoom
  }
  zoomOut() {
    this.zoom > 0.3? this.zoom -= 0.1 : this.zoom
  }
  rotateLeft() {
    if (this.rotation === -360) { this.rotation = 0;return; }
    this.rotation -= 90;
  }
  rotateRight() {
    if (this.rotation === 360) { this.rotation = 0; return; }
    this.rotation += 90;
  }
  download() {
   
    let link = document.createElement('a');
   

    link.setAttribute('type', 'hidden');
    link.href = '';
    link.download = '../assets/bookPdf/book1.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
