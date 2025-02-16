let searchResultsEl = document.getElementById('searchResults');
let searchInputEl = document.getElementById('searchInput');
let spinnerEl = document.getElementById('spinner');

function createAndAppendSearch(result) {
    let {
        link,
        title,
        description
    } = result;


    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    let resultHeading = document.createElement('a');
    resultHeading.href = link;
    resultHeading.textContent = title;
    resultHeading.classList.add('result-title');
    resultItemEl.appendChild(resultHeading);

    let breakEl1 = document.createElement('br');
    resultItemEl.appendChild(breakEl1);

    let resultlink = document.createElement('a');
    resultlink.href = link;
    resultlink.textContent = link;
    resultlink.target = '_blank';
    resultlink.classList.add('result-url');
    resultItemEl.appendChild(resultlink);

    let breakEl2 = document.createElement('br');
    resultItemEl.appendChild(breakEl2);

    let resultDiscription = document.createElement("p");
    resultDiscription.textContent = description;
    resultDiscription.classList.add('link-description');
    resultItemEl.appendChild(resultDiscription);


}

function search(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputEl.value;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let {
                    search_results
                } = data;
                spinnerEl.classList.toggle("d-none");
                for (let eacItem of search_results) {
                    createAndAppendSearch(eacItem)

                }
            })

    }
}

searchInputEl.addEventListener('keydown', search)