const products = [
    {id: 1, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/1.jpg"},
    {id: 2, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/2.jpg"},
    {id: 3, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/3.jpg"},
    {id: 4, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/4.jpg"},
    {id: 5, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/1.jpg"},
    {id: 6, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/2.jpg"},
    {id: 7, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/3.jpg"},
    {id: 8, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/4.jpg"},
    {id: 9, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/1.jpg"},
    {id: 10, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/2.jpg"},
    {id: 11, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/3.jpg"},
    {id: 12, Naming: "Женская укладка", description: "+ обработк кончинков волос", price: "50",image: "./img/4.jpg"}
];


function addProductToBlock(blockId, products) {
    const block = document.getElementById(blockId);
    block.innerHTML = "";
    
    products.forEach((product, index) => {
        if (index < 4) {
            const block_product = document.createElement("div");
            block_product.classList.add("block_product");

            const product_desc = document.createElement("div");
            product_desc.classList.add("product_desc");
            const title = document.createElement("h4");
            title.textContent = product.Naming;
            const descr = document.createElement("p");
            descr.textContent = product.description;

            const product_price = document.createElement("div");
            product_price.classList.add("product_price");
            const price = document.createElement("p");
            price.textContent = product.price;

            product_desc.appendChild(title);
            product_desc.appendChild(descr);

            product_price.appendChild(price);

            block_product.appendChild(product_desc);
            block_product.appendChild(product_price);
            
            block.appendChild(block_product);
        }
    });
}


addProductToBlock("block", products);

addProductToBlock("block_2", products.slice(4, 8));

addProductToBlock("block_3", products.slice(8, 12));

const blockProducts = document.querySelectorAll('.block_product');
const blockImage = document.querySelector('.block_image');

blockProducts.forEach((blockProduct, index) => {
  blockProduct.addEventListener('mouseover', () => {
    blockImage.src = products[index].image;
  });
  
});