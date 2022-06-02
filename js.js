const my_btn = document.querySelector('button');
const my_place = document.getElementById('root');
const my_img = document.createElement('img');
my_place.appendChild(my_img);

const getDogImg = async () => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        console.log(res);
        const data = await res.json();
        console.log(data);
        my_img.src = data.message;
    } catch (error) {
        console.log(error);
    }
}
my_btn.addEventListener('click', getDogImg);