import  Express  from "express"

const router = Express.Router()
router.get("/:de/:para", (req, res) => {
      const {de, para} = req.params
      
    res.json({
        voo: {
            de: de.toUpperCase(),
            para: para.toUpperCase(),
            preco: 50
        }
      })
})

export default router