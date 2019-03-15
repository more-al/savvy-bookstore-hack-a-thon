function mapSellingPoints(sellingPoints){
    return sellingPoints.map((point) => `<li>${point}</li>`).join('');
}
  
export default function Book(book){
    return `
      <div>
        <h1>${book.name}</h1>
        <h2>${book.author}</h2>
        <h3>${book.price}</h3>
        <ol>
          ${mapSellingPoints(book.sellingPoints)}        
        </ol>
        <img src="${book.pictureUrl}">
      </div>
    `;
}
