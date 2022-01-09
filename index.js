/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const array=["prince",'gobah','faisal','pop']
//console.log(array[1])
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
 

//console.log(test)

function createEmployeeRecord(array){

    return{ 
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
        
        }
    }
    
    
    
//}}
//stuff.test()}
//onsole.log(stuff.test)

//return stuff
//}}
//console.log(createEmployeeRecord(array).test())
//stuff.call(test)}







//console.log(createEmployeeRecord(array))

function createEmployeeRecords(array){
   
    return array.map
    (item=>createEmployeeRecord(item))
    
}
function createTimeInEvent(date){ this.timeInEvents.push(
    {type:"TimeIn",
    hour:parseInt(date.slice(-4)),
    date:date.slice(0,10)});
    
    return this
};

function createTimeOutEvent(date){ this.timeOutEvents.push(
    {type:"TimeOut",
    hour:parseInt(date.slice(-4)),
    date:date.slice(0,10)});
    
    return this
};


function hoursWorkedOnDate(workHours) {
   
    const hoursWorked =
        (this.timeOutEvents.find(item => item.date === workHours).hour
            - this.timeInEvents.find(item => item.date === workHours).hour
        ) / 100;
    return hoursWorked;
}

function wagesEarnedOnDate(hours) {
    
    const hoursWorked = hoursWorkedOnDate.bind(this);
    return hoursWorked(hours) * this.payPerHour;
}
function calculatePayroll(employees) {
    return (
        employees.reduce((total, employee) => {
            const allWages = allWagesFor.bind(employee);
            total += allWages();
            return total;
        }, 0)
    )
}

function findEmployeeByFirstName(employees, firstName) {
    return employees.find(item => item.firstName === firstName);
}



