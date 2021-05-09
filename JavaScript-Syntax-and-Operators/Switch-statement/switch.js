const SearchBar = {
    searchButton: document.getElementById("srcBtn"),
    searchData:0
};

SearchBar.searchButton.addEventListener('click', function(){
    console.log("in eventListener");
    if(SearchBar.searchData !== null)
    {
        SearchBar.searchData = document.getElementById("searchBar").value;
        showSelected(SearchBar.searchData);
    }
    else
    {
        return null;
    }
});

function showSelected(searchData){
    switch(+searchData){
        case 1:{
            const message = document.getElementById("message");
            if(message.classList.contains("d-none")){
                message.classList.remove('d-none');
            }
            else{
                message.classList.add('d-none');
            }
            break;
        }
        case 2:{
            const button = document.getElementById("btn-appendText");
            if(button.classList.contains("d-none")){
                button.classList.remove('d-none');
            }
            else{
                button.classList.add('d-none');
            }
            break;
        }
        default:{
            const review = document.getElementById('text');
            if(review.classList.contains("d-none")){
                review.classList.remove('d-none');
            }
            else{
                review.classList.add('d-none');
            }
            break;
        }
    }
}