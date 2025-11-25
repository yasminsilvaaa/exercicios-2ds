import  express, { Router }  from "express"
import produtosRouter from "./produtos"
import voosRouter from "./voos"
import pingRouter from "./ping"

const router = express.Router()// criar roteador
router.use("/ping", pingRouter)
router.use("/voss", voosRouter)
router.use("/produtos", produtosRouter)

router.get("/", (req, res) => {
let nome: string = "John"
let idade: number =  22
res.json({nome , idade})
})

export default router