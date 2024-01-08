let fun = []

for(let j = 0; j <10; j++){
    fun.push(function(){
        console.log(j)
    })
}

fun[3]()
fun[9]()