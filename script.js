const mainContainer = document.querySelector(".main-container")

const limit = 6;
let pageCount = 1;
let postCount = 1;

const fetchAPI = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
    const data = await response.json()
    // console.log(data[0].body);
    // const post = await body
    // .then(response => response.json())
    // .then(json => console.log(json) )
    // .then(err => console.log(err))
    data.map(item => {
        const htmlData = `
        <div class="post">
            <div class="div-id">
                <p class="post-id">${postCount++}</p>
            </div>
            <div class="post-content-div">
                <h3 class="post-title">${item.title}</h3>
                <p class="post-description">${item.body}</p>
            </div>
        </div>
        `
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
        mainContainer.insertAdjacentHTML('beforeend', htmlData)
    }) 
}
  
fetchAPI()

const showData = () => {
    setTimeout(() => {
        pageCount++
        fetchAPI()
    }, 100);
}

window.addEventListener('scroll', () => {
    // https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement

    if(scrollTop + clientHeight >= scrollHeight){
        console.log("Scroll called");
        showData()
    }

})