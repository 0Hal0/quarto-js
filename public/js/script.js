async function getBoard(){
    pos = await fetch("http://localhost:3000/board");
    pos = await pos.json();
    console.log(pos)
}

async function resetBoard(){
    try{
        await fetch("http://localhost:3000/reset", {method:"POST"});
    }catch(error){
        console.log(error)
    }
}