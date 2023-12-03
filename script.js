// main calculator
const Container = document.querySelector('.container');

Container.addEventListener('click', function(e) {
    const clickb = e.target;
    const resultPlace = document.getElementById('ResultPlace');
    const buttonValue = clickb.value;
    if (clickb.tagName === 'INPUT') {
        if (clickb.id !== 'ResultPlace') {
            if (clickb.value === 'CA') {
                resultPlace.value = '';
            }else if (clickb.value === 'DE') {
                resultPlace.value = resultPlace.value.slice(0, -1);
            }else if (clickb.value === '=') {
                resultPlace.value = eval(resultPlace.value);
            }else  {
                resultPlace.value += buttonValue;
            }
        }
    }
})

// main gallery

const backgroundGallery = document.querySelector('.backgroundGallery');

backgroundGallery.addEventListener('click', function(e) {
    if (e.class !== 'backgroundGallery' && e.target.className == 'gallery') {
        Container.style.backgroundImage = "url('" + e.target.src + "')";
    }
})