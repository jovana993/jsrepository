/*let myFirstPromise = new Promise((resolve, reject) => {
    document.write('Promise')
    setTimeout(function(){
      resolve("Success!"); 
    }, 250);
  });
  
  myFirstPromise.then((successMessage) => {
    console.log("Yay! " + successMessage);
  });
  myFirstPromise.catch((err)=>{
      console.log('Error happened')
  });
*/
  var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    document.write('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    let p1 = new Promise(
       (resolve, reject) => {
        document.write('beforeend', thisPromiseCount + ') Promise started (<small>Async code started</small>)<br/>');
                window.setTimeout(
                    function() {
                        resolve(thisPromiseCount);
                    }, Math.random() * 2000 + 1000);
        }
    );
    p1.then(
        function(val) {
            document.write('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
    .catch(
        (reason) => {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    document.write('beforeend', thisPromiseCount +
    ') Promise made (<small>Sync code terminated</small>)<br/>');
}

testPromise();
  