class ProductManager {

    constructor(){
        this.products = []
    }

    getProducts(){
        console.log(this.products);
        return this.products;
    }
    #generateId(){
        let newID = 0
        newID = this.products.length;
        return (newID)
    }
    #verificationProducts(newProduct){
        const verificationNewProduct = Object.values(newProduct).some((values)=>values === null || values === undefined || values === '');
        return(verificationNewProduct);
    }
    #verificationCode(code){
        const searchCode = this.products.map((value)=> value.code !== code)
        return searchCode
    }
    getProductById(id){
        const searchProduct = this.products.find((value)=>{
            if(value.id == id){
                return value
            }
        });
        if(searchProduct == undefined){
            return console.log("not found");
        }
        else{
            console.log(searchProduct);
            return searchProduct
        }
    }
    addProduct(
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    ){
        let newProduct ={
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock,
        }
        const verification = this.#verificationProducts(newProduct);
        if(this.products.length == 0){
            verification ? '' : newProduct = {...newProduct,id:0};
            verification ? '' : this.products.push(newProduct);
            const rep = verification ? 'Please complete all the parameters' : 'Successful registration';
            console.log(rep);
            return rep
        }
        else{
            const verificationCode = this.#verificationCode(newProduct.code)
            let x = !verification && verificationCode
                x[0] ? newProduct = {...newProduct,id:this.#generateId()}: ''
                x[0] ? this.products.push(newProduct): ''
            const rep = x[0] ? 'Successful registration' : 'Product already registered with the same code and/or fill in all the parameters'
            console.log(rep);
            return rep
        }
    }
}