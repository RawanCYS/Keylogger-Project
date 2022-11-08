const area = document.getElementById("tbody");
area.innerHTML='';


 
fetch('https://634347da3f83935a7851edf2.mockapi.io/fromTextArea', {
  method: 'get', 
  
 })
  .then((response) => response.json())
  .then((data) => {
    
    for (const wordObj of data) {
      console.log(wordObj);
      console.log(wordObj.id);
      area.innerHTML+=`<tr><td>${wordObj.id}</td> <td>${wordObj.value}</td></tr>`;
    }
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });

