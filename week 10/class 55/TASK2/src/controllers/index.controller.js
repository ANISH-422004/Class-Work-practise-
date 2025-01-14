
let data = [
    { "text": "Learn Node.js", "completed": false },
    { "text": "Practice React", "completed": true }
  ]



module.exports.homecontroller = (req,res)=>{
    res.render("index")
}


module.exports.todocontroller = (req,res)=>{
    res.render("showtodo" ,{todos : data})

}
module.exports.createtodo = (req,res)=>{

    res.render("createtodo")
}

module.exports.creation = (req, res) => {
    console.log(req.body);
  
    let newTodo = {
      "text": req.body['todo-text'],
      "completed": req.body['todo-status'] === 'completed' ? true : false
    };
  
    console.log(newTodo);
    data.push(newTodo)
    
  
    res.render("showtodo",{todos:data});
  };
  