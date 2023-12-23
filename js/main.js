var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");
var searchInput = document.getElementById("searchInput");
var submitBtn = document.getElementById("submitBtn");
var updateBtn = document.getElementById("updateBtn");
var updateIndex=0;




var bookmarkerList = [];

if(localStorage.getItem("bookmarkers") != null){
    bookmarkerList =JSON.parse( localStorage.getItem("bookmarkers"));
    displayData()

}






function submitBookmarker() {
  var bookMarker = {
    name: siteNameInput.value,
    url:siteUrlInput.value,
  }
  bookmarkerList.push(bookMarker);
  localStorage.setItem("bookmarkers" ,JSON.stringify(bookmarkerList));
  displayData()
  clear()
  console.log(bookmarkerList);
}



function clear(){
    siteNameInput.value=" " ;
    siteUrlInput.value=" ";

}


function displayData(){
    var cartona ="";
    for(i=0 ; i<bookmarkerList.length; i++){
        cartona+=`
        <tr>
                    <td> ${i} </td>
                    <td> ${bookmarkerList[i].name} </td>
                    <td>
                    <a href=" ${bookmarkerList[i].url} "><button class="btn btn-danger "> 
                    <i class="fa-solid fa-eye"></i>
                    visite
                     </button> </a>
                    </td>
                    <td>
                    <button onclick="setData(${i} )" class="btn btn-danger ">update </button>
                    </td>
                    <td>
                    <button onclick="deleteItem( ${i})" class="btn btn-danger ">
                    <i class="fa-solid fa-trash"></i>
                    delete 
                    </button>
                    </td>
                </tr>
        `

    }
    document.getElementById("tableBady").innerHTML= cartona;
}



function deleteItem(index){
    bookmarkerList.splice(index,1);
    displayData()
    localStorage.setItem("bookmarkers" ,JSON.stringify(bookmarkerList));


}



function search(){
    var term = searchInput.value;

    var cartona ="";
    for(i=0 ; i<bookmarkerList.length; i++){
        if( bookmarkerList[i].name.toLowerCase().includes(term.toLowerCase())){
            cartona+=`
        <tr>
                    <td> ${i} </td>
                    <td> ${bookmarkerList[i].name} </td>
                    <td>
                    <button class="btn btn-danger ">visite </button>
                    </td>
                    <td>
                    <button class="btn btn-danger ">update </button>
                    </td>
                    <td>
                    <button onclick="deleteItem( ${i})" class="btn btn-danger ">delete </button>
                    </td>
                </tr>
        `

        }
    }
    document.getElementById("tableBady").innerHTML= cartona;
}




function setData(index ){
    var currentItem = bookmarkerList[index];
    updateIndex = index;
    siteUrlInput.value= currentItem.url;
    siteNameInput.value= currentItem.name;
    submitBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");

}




function updateData(){
    var bookMarker = {
        name: siteNameInput.value,
        url:siteUrlInput.value,
      };


bookmarkerList.splice(updateIndex,1,bookMarker);
    submitBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");



localStorage.setItem("bookmarkers" ,JSON.stringify(bookmarkerList));
displayData();
clear();

}




function visitLink(){

}





































{/* <td> ${bookmarkerList[i].url} </td> */}