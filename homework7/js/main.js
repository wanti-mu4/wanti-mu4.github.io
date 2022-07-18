function hello (a) {
    let message1 = '';
    if  (a === 0) {
        message1 = '不正解';
    } else if (a === 1) {
        message1 = '正解';
    } else {
        message1 = '間違っています';
    }
    console.log(message1);
    const hello = document.querySelector('#hello');
    hello.textContent = message1;
}