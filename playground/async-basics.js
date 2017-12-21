console.log('Starting app');

setTimeout(
    ()=>{
        console.log('Inside callback from timeout');
    }
    ,2000);

setTimeout(()=>{
    console.log('Second settimeout');
}, 0);

console.log('Finishing app');