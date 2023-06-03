//Promise

const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise');
        resolve('Promise1'); //will not emit
        resolve('Promise2'); //will not emit
    }, 1000
    )
})

promise.then(result => console.log(result));

//Observable

const observable = new Observable(sub => {
    setTimeout(() => {
        sub.next('Observable');
        sub.next('Observable1'); //will emit
        sub.next('Observable2'); //will emit
    }, 1000);
});

observable.subscribe(result => console.log(result));

//---------------------------------------------
//define the subject
const subject =  new Subject();
subject.next('passing data');

//Subscribe the subject
subject.subscribe(d => console.log(d));

//define the Behavior Subject
const bSubject =  new BehaviorSubject<number>(12);

//---------------------------------------------
//Subscribe the bsubject
bSubject.subscribe(d => console.log(d)); //Will emitshow default value 12

bSubject.next(200);

//Subscribe the bsubject
bSubject.subscribe(d => console.log(d)); //Will emitshow default value 200

//define the replay subject
const rSubject =  new ReplaySubject(2); //Hold old value in buffer

rSubject.next(200);
rSubject.next(300);
rSubject.next(400);

//Subscribe the subject
rSubject.subscribe(d => console.log(d)); 


//---------------------------------------------
//define the subject
const aSubject =  new AsyncSubject(); 

aSubject.next(200);
aSubject.next(400);
aSubject.next(500);
aSubject.complete();

//Subscribe the asubject
aSubject.subscribe(d => console.log(d)); 