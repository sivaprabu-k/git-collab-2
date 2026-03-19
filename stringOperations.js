function capitalize(str){
  return str.toUpperCase()
}

let reversed=''
function reverse(str){
    
    for(let i=str.length+1;i>=0;i--){
        reversed+=str[i]
    }
    console.log(reversed);
}

function trimmer(str){
    return str.trim()
}

console.log(capitalize('hello'));

reverse('world')

console.log(trimmer(' Javascript  '));