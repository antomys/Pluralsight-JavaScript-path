
const button = document.getElementById('btn-appendText');

button.addEventListener('click', function()
{
    console.log('clicked');
    const review = document.getElementById('text');

    if(review.classList.contains('d-none'))
    {
        review.classList.remove('d-none');
        button.textContent = 'hide';
    }
    else
    {
        review.classList.add('d-none');
        button.textContent = 'click me!';
    }
});