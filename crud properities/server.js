const products =[
    {
        id:1,
        item:'laptop',
        price:50000
    },
    {
        id:2,
        item :'mouse',
        price :1000
    },
    {
        id:3,
        item:'keyboard',
        price:4500
    }

]
const express = require("express")
const app = express()
app.use(express.json())
app.get("/products/:id",(req,res)=>{
    const id =Number(req.params.id)

    const product = products.find((item)=>{
   return item.id ===id;
    });
    if(!product)
    {
        return res.status(404).json({
            message:"the product not found"
        });
    }
    res.json(product);
});

app.post("/products",(req,res)=>{
    const newproduct = {
        id:products.length+1,
        item :req.body.item,
        price:req.body.price
    }
    products.push(newproduct)
    res.status(201).json(newproduct)
});


app.put("/products/:id",(req,res)=>{
    const id = Number(req.params.id)

    const product = products.find((item)=>{
        return item.id === id
    });
    if(!product){
        return res.json({
            message:"product not found"
        })
    }

    product.item = req.body.item;
    product.price =req.body.price;

    res.json(product);
});

app.delete("/products/:id",(req,res)=>{
    const id = Number(req.params.id)

    const productIndex = products.findIndex((item)=>{
        return item.id ===id
    });

    if(productIndex ==-1)
    {
        return res.status(404).json({
            message:"the product is not found"
        })
    }

    const deletedProduct = products.splice(productIndex,1);
    res.json(deletedProduct[0])
})

app.listen(3000,()=>{
    console.log("server is running on")
})