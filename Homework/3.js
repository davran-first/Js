// 3)  Реализовать аналог Promise.all.


// const arr1 = new Promise(resolve => setTimeout(() => resolve('first'), 5000))
// const arr2 = new Promise(resolve => setTimeout(() => resolve('second'), 4000))
// const arr3 = new Promise(resolve => setTimeout(() => resolve('third'), 3000))


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let text = 'text1'
        if(typeof text !== 'string') reject(text)
        else resolve(text)
    }, 5000)
})
.catch(err => console.error('You should write text!', err))


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let text = 'text2'
        if(typeof text !== 'string') reject(text)
        else resolve(text)
    }, 4000)
})
.catch(err => console.error('You should write text!', err))

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let text = 'text3'
        if(typeof text !== 'string') reject(text)
        else resolve(text)
    }, 4000)
})
.catch(err => console.error('You should write text!', err))



Promise.all([promise1, promise2, promise3])
    .then(([reply1, reply2, reply3]) => {
        console.log(reply1)
        console.log(reply2)
        console.log(reply3)
    })