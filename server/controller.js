const Product = require('./models')
module.exports = {
    index: async(req, res) =>{
        const allProd = await Product.find({})
            .catch(err => console.error("error ->", err))
        res.json(allProd)
    },
    display: async (req, res) => {
        const singleProd = await Product.findById(req.params.id)
            .catch(err => console.error("error ->", err))
        res.json(singleProd)
    },
    create: async (req, res) => {
        const newProd = await Product.create(req.body)
            .catch(err => console.error('error-->', err));
        res.json(newProd)
    },
    update: async (req, res) => {
        const updateProd = await Product.findByIdAndUpdate(req.params.id ,req.body, {runValidators: true})
            .catch(err => console.error('error ->', err));
        res.json(updateProd);
    },
    delete: async (req, res) => {
        const deleteProd = await Product.findByIdAndDelete(req.params.id)
            .catch(err => console.error('error ->', err));
        res.json(deleteProd);
    }
    
}