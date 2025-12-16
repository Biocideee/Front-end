const firstElement = document.getElementById('target-element-1');
const secondElement = document.querySelector('#target-element-2');

firstElement.onclick = function() {
    if (this.style.backgroundColor === 'blue') {
        this.style.backgroundColor = '';
        this.style.color = '';
    } else {
        this.style.backgroundColor = 'blue';
        this.style.color = 'white';
    }
};

secondElement.onclick = function() {
    if (this.style.backgroundColor === 'green') {
        this.style.backgroundColor = '';
        this.style.color = '';
    } else {
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
    }
};

const imageContainer = document.getElementById('image-container');
const addBtn = document.getElementById('add-btn');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const removeBtn = document.getElementById('remove-btn');

addBtn.onclick = function() {
    const newImg = document.createElement('img');
    newImg.src = 'images/mukachevo.jpg';
    newImg.width = 600;
    newImg.alt = 'mukachevo';
    newImg.style.display = 'block';
    newImg.style.marginTop = '10px';

    newImg.classList.add('dynamic-img');
    
    imageContainer.appendChild(newImg);
};

increaseBtn.onclick = function() {
    const images = imageContainer.querySelectorAll('.dynamic-img');
    
    images.forEach(function(img) {
        img.width += 50;
    });
};

decreaseBtn.onclick = function() {
    const images = imageContainer.querySelectorAll('.dynamic-img');
    
    images.forEach(function(img) {
        if (img.width > 50) {
            img.width -= 50;
        }
    });
};

removeBtn.onclick = function() {
    const images = imageContainer.querySelectorAll('.dynamic-img');
    
    if (images.length > 0) {
        images[images.length - 1].remove();
    }
};