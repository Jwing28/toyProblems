//suppose we plant a tree in spring, it is one meter high.
//every spring, it will double in growth and every summer it increases by 1 meter.
//Therefore, there are two growth cycles per year for the tree.
//given multiple growth cycles, calculate the height of the tree afterwards.
//Found from Hackerrank.com

function main() {
    var t = parseInt(readLine()); //cycles to consider
    var height = 1; //starting height of plant
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine()); //number of cycles of growth

        for (var i = 0; i < n; i++){
            if(i === 0 || i % 2 === 0){
                height *= 2;
            }else if (i === 1 || i % 2 !== 0){
                height += 1;
            }
        }
        console.log(height);
        height = 1;
    }
}