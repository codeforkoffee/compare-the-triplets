// a input is 5 6 7
//b input is 3 6 10

//'5 6 7'.split(' ') => ['5', '6', '7']
//'5 6 7'.split(' ').map(i => parseInt(i)); => [5, 6, 7]


var alice = 0
var bob = 0
var a='5 6 7'.split(' ').map(i => parseInt(i));
var b='3 6 10'.split(' ').map(i => parseInt(i));
function main(a, b){
  for (var i=0; i<=2; i++){
        if(a[i]>b[i]){
            alice++;
        }else if (a[i]<b[i]){
            bob++;
        }
    }
    console.log(alice+' '+bob);
}
}

//output 1 1
