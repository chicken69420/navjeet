const button = document.querySelector(".submit-button");
const input = document.querySelector("#filer_input2");
const img = document.querySelector(".result");
const error = document.querySelector('.error');

const url = "http://abe3c1a97d75.ngrok.io";
let img_url;

button.addEventListener('click', () => {
    const file = input.files[0];

    if (!file) {
        error.style.display = 'block';
        return;
    }
//     else{
//         error.innerText = "Fuck you, I'm sleeping";
//         error.style.display = 'block';
//         return;
//     }

    error.style.display = 'none';
    const formData = new FormData();


    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        const imgElement = document.createElement("img");
        imgElement.src = event.target.result;

        imgElement.onload = function (e) {
            const canvas = document.createElement("canvas");
            const MAX_WIDTH = 500;

            const scaleSize = MAX_WIDTH / e.target.width;
            canvas.width = MAX_WIDTH;
            canvas.height = e.target.height * scaleSize;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

            const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
            formData.append('file', srcEncoded);
            formData.append('filename', "chicken.jpg");


            fetch(url + '/api/upload/', {
                method: 'POST',
                body: formData,
                method: 'no-cors'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    img_url = url + '/' + data;
                    img.src = img_url;
                    img.style.display = 'block';
                    img.style.width = '600px';


                })
                .catch(error => {
                    console.log(error);
                });


        }
    }


    img.src = "load.gif";
    img.style.display = 'block';
    img.style.width = '200px';


});
