const area = document.getElementById("text");

area.addEventListener('keyup',(e)=>{
 const fromTextAreaValue =  e.target.value;

const data = { value: fromTextAreaValue };

fetch(' https://634347da3f83935a7851edf2.mockapi.io/fromTextArea', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });




});