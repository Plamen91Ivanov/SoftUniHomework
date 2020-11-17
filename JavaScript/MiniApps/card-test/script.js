function myFunction() {

  var node = document.createElement("div"); 
  node.innerHTML = `
    
  <form id="comment-form">
  <div class="form-group">
  <label id="comment-label" for="exampleFormControlInput1">Doctor name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1">
  </div>
  <div class="form-group">
  <label id="comment-label" for="exampleFormControlInput1">City</label>
  <input type="email" class="form-control" id="exampleFormControlInput1">
  </div>
  <div class="form-group">
  <label id="comment-label" for="exampleFormControlInput1">Specialty</label>
  <input type="email" class="form-control" id="exampleFormControlInput1">
  </div>
  <div class="form-group">
  <label id="comment-label" for="exampleFormControlTextarea1">Tell your story</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </form>
  <hr />
  <button type="submit" class="btn btn-success btn-lg" value="search" >ADD Comment</button>
  `

  document.getElementById("myList").appendChild(node);
}
 
