import  Express  from "express"

const router = Express.Router()

router.get("/", (req, res) => { // rota get siples
    res.json({pong: true})
})

export default router