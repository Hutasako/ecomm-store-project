// make an array of products
// ratings are only whole numbers for this project
const products = [
    {
        'name': 'Jabba the Huff',
        'type': 'Cartridge',
        'desc': 'Test',
        'rating': 4,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Tugg Nuggets',
        'type': 'Gummy',
        'desc': 'Test',
        'rating': 5,
        'options':['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'false', 
            'salePrice':'2.5',
            'current':'5',
        },
        'favorite': 'false',
    },
    {
        'name': 'Han Smoke-lo',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 4,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Ghost Train Haze',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Strawberry Banana',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Boss Nugg',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Billy Dank Williams',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Luke Highwalker',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Dank Vader',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
    {
        'name': 'Billy Dank Williams',
        'type': 'Flower',
        'desc': 'Test',
        'rating': 2,
        'options': ['1.5', '5'],
        'imgs': '',
        'price': {
            'sale': 'true', 
            'salePrice':'19',
            'current':'30',
        },
        'favorite': 'true',
    },
]


// Print rating in stars
function getRating(rating){
    const starContainer = document.createElement('dd');
    let stars = `${rating} `;

    // Print filled stars
    for (i = 0;i < rating; i++){
        stars += `<span class="material-icons">star</span>`;
    }

    // Print empty stars if rating < 5
    if (rating < 5){
        let diff = 5 - rating;
        for (i = 0;i < diff; i++){
            stars += `<span class="material-icons">star_border</span>`;
        }
    }
    starContainer.innerHTML = stars;
    return stars;
}

// Print available options for given product
function getOptions(options){
    if(options){
        return `
        <form class="product-size pad-content">
        <fieldset>
        <legend>Sizes</legend>
        <ol>
        ${options.map( opt => `<li><label><input type="radio" name="weight" value="${opt}"> ${opt}g</label></li>`).join("")}
        </ol>
        </fieldset>
        </form>
        `;
    }
    else{
        return '';
    }
}

// get products container
const resultsContainer = document.querySelector('.results');


// Display given array of products
function displayProducts(products){
    resultsContainer.innerHTML = '';
    products.forEach((item)=>{
        const productContainer = document.createElement('article');
        productContainer.classList.add('product');
        productContainer.innerHTML = 
        `
        <header>
        <img src="img/oregano.jpg" alt="Product Image">
        ${item.favorite == 'true'
            ? `<button type="button" class="fav-btn active">`
            : `<button type="button" class="fav-btn">`
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        </button>
        <div class="pad-content">
        <h3>${item.name}</h3>
        <h5 class='type'>${item.type}</h5>
            ${item.price.sale == 'true'
                ? `<data value="${item.price.salePrice}"><del>$${item.price.current}</del> <ins>$${item.price.salePrice}</ins></data>` 
                : `<data value="${item.price.current}"><ins>$${item.price.current}</ins></data>`
            }
        <p>${item.desc}</p>
        <dl>
        <dt>Rating</dt>
        <dd>${getRating(item.rating)}</dd>
        </dl>
        <a href="#">see more</a>
        </div>
        </header>
        ${getOptions(item.options)}     
        <footer>
        <button type="button" class="add-cart">Add to Cart</button>
        </footer>
        `;
        // console.log(item);
        // console.log(productContainer.innerHTML);
        resultsContainer.appendChild(productContainer);
        })
}

displayProducts(products);


// Filter stoof
const filterContainer = document.querySelector(".filter-options");

function checkFilter(event){
    let filteredArray =[];
    const target = event.target;
    console.log(target);

    if(target.name == 'type'){
        products.forEach((item)=>{
            if(item.type.toLowerCase() == target.id.toLowerCase()){
                filteredArray.push(item);
            }
        })
    }
    if(target.name == 'rating'){
        products.forEach((item) => {
            if(item.rating <= target.value){
                filteredArray.push(item);
            }
        })
    }
    displayProducts(filteredArray);
}

filterContainer.addEventListener('click', checkFilter)