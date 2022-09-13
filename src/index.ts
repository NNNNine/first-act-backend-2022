import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.post("/echo-json", (req, res) => {
  //console.log(req.body.score)
  if (req.body.score > 100) {
    res.status(400).json({
      "status": 400,
      "error": "score out of range"
    })
  }
  else if (req.body.score >= 80) {
    res.status(200).json({
      "grade": "A"
    })
  }
  else if (req.body.score >= 70) {
    res.status(200).json({
      "grade": "B"
    })
  }
  else if (req.body.score >= 60) {
    res.status(200).json({
      "grade": "C"
    })
  }
  else if (req.body.score >= 50) {
    res.status(200).json({
      "grade": "D"
    })
  }
  else if (req.body.score >= 0) {
    res.status(200).json({
      "grade": "F"
    })
  }
  else {
    res.status(400).json({
      "status": 400,
      "error": "score out of range"
    })
  }
  //res.json(req.body);
});

app.get('/', (req, res) => {
  res.status(200).send("Hello World!")
})

app.get("/query", (req, res) => {
  res.json({
    query: req.query,
  });
});

app.get("/post/:id", (req, res) => {
  res.json({
    param: req.params,
  });
});

app.get("/grading", (req, res) => {
  res.json({
    param: req.params,
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
