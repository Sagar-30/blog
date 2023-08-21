//                  Dark mode

//const ModeChange = document.getElementById('dark-mode');
//ModeChange.addEventListener('click',()=>{
//  const Navbar = document.getElementById('top-navbar');
//  const modeText = document.getElementById('dark-mode-p');
// 
//  Navbar.style.backgroundColor='black';
//  Navbar.style.color='white';
//  modeText.innerHTML = 'Light Mode';
//  ModeChange.style.backgroundColor='white';
//  ModeChange.style.color='white';
// ModeChange.style.cursor='Pointer';
//});



//                         Fetch API          

const key = '15daf332ac3f47169afe4560092f2933';
const api = fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-07-21&sortBy=publishedAt&apiKey=${key}`);
console.log("Api is:- ",api);
   api.then((run) =>{
	    return run.json();
	
   }).then((data) =>{
    console.log('data is:',data);

      const heading = document.getElementById('main-section-div-h1');
	  heading.innerHTML ='Sagar Kaushik';
	})
   
   		 api.catch((error) =>{
   	 console.log('Not running',error)
   	 });




//async function response(apicall){
// try(apicall){
//    apicall.JSON(run);
//	              console.log('Running',apicall)
//
// }
// catch(error){
//         console.log('Not running',error)
// }
//};
//
//response(apicall);


