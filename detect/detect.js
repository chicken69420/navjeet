const button = document.querySelector(".submit-button");
const input = document.querySelector("#filer_input2");


button.addEventListener('click', ()=>{
    const files = input.files;
    const formData = new FormData();
    formData.append('file', files[0]);

    fetch('https://androidapi420.herokuapp.com/api/upload/', {
        method: 'POST',
        body: formData
    })
        .then (response => response.json())
        .then(data => {console.log(data)})
        .catch(error => {
            console.error(error);
        })
})