const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Aqui eu pego o que salvei no mongo. Volto pro app sem precisar fazer pesquisa usando um filtro
// Quando jogar o cep, itero sobre os dados já guardados no caso cep's no mongo
// Se tiver retorno do mongo e não da API

// Fiz rota pra salvar arquivos no mongo, top
// SUBMIT A POST
router.post("/", async (req, res) => {
  console.log(req);
  console.log(req.body);

  const { cep, logradouro, bairro, localidade, uf, ibge, gia, ddd, siafi } =
    req.body;

  const post = new Post({
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
    ibge,
    gia,
    ddd,
    siafi,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
    res.send("Olha a rota!");
    console.log("REQ", req.body);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
