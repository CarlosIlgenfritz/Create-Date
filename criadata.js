var dias = [
    
        {mes:31},
        {mes:28},
        {mes:31},
        {mes:30},
        {mes:31},
        {mes:30},
        {mes:31},
        {mes:31},
        {mes:30},
        {mes:31},
        {mes:30},
        {mes:31}

]
var vetordias = []
var todosDias = dias.map((item, idx)=>{
    for(var i=1; i<=item.mes; i++){
        vetordias.push(`${i}/${idx + 1}/2019` ) 
    }
    return vetordias
})
  
module.exports = todosDias