import  Express  from "express"

const router = Express.Router()

router.get("/:id", (req, res) => {
    console.log(req.params) // mostrar parametros recebidos
   res.json({nome: "Teclado XYZ", preco: 90})
})

router.get("/", (req, res) => { // rota get siples
    res.json({ produtos: [] })
})


export default router