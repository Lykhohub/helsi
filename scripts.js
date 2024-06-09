document.getElementById('city-button').addEventListener('click', function() {
    document.getElementById('city-menu').style.display = 'block';
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('city-menu').style.display = 'none';
});

document.querySelectorAll('.city').forEach(function(city) {
    city.addEventListener('click', function() {
        document.getElementById('selected-city').textContent = this.textContent;
        document.getElementById('city-menu').style.display = 'none';
    });
});
