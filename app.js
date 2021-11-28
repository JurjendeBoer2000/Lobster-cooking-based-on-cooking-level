const cookLobster = require('./library.js');

async function attempt(){
  try{
    let cookLobsterResolvedValue = await cookLobster()
    console.log(cookLobsterResolvedValue)
  } catch(error) {
    console.log(error)
  }
}

attempt()
