class habit {
    constructor(n,s,t,f,arr) {
        this.streak=s;
        this.total=t;
        this.failed=f;
        this.id=idCount;
        this.list;
        console.log(this.total)
        console.log(this.streak);
        idCount++;
        const defaults = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        const listItems = ["", "", "", "", "", "blank", "", "", "", "", "", "", "", "blank", "", "", "", "", "", "", "", "blank", "", "", "", "", "", "", "", "blank", "", "", "", "", ""];
        let temp = currentDay;
        let count = 0;

        const myList = document.createElement('ul');
        for (let i = 0; i < listItems.length; i++) {
            const listItem = document.createElement('li');
            if(listItems[i]=="blank"){
                temp++;
                count++;
            }
            if (typeof arr[0] !== 'undefined') {
                if(arr[0]+count==i&&listItems[i]!="blank"){
                    listItem.innerHTML="*";
                    arr.shift();
                }
            }
            if(temp==i){
                const but = document.createElement('button');
                const ico = document.createElement('ion-icon');
                ico.setAttribute("name","checkmark-outline");
                but.appendChild(ico);
                but.className="check"
                listItem.appendChild(but);
            }
            listItem.classList = listItems[i];
            myList.appendChild(listItem);
        }
        console.log(myList);

        const habitName = document.createElement('span');
        habitName.innerHTML = n+":";

        const myHabit = document.createElement('div');
        myHabit.className = "habit";
        myHabit.appendChild(habitName);
        this.list=myList;
        myHabit.appendChild(myList);
        myHabit.id = this.id;

        let habits = document.querySelector(".habits");
        habits.appendChild(myHabit);
        const spans = document.getElementsByTagName('span');

// Loop through each span and add a click event listener
for (let i = 0; i < spans.length; i++) {
const span = spans[i];
span.addEventListener('click', () => {
    for (let j = 0; j < spans.length; j++) {
        spans[j].classList.remove('selected');
    }
  
    // Add the "selected" class to the clicked span
    span.classList.add('selected');
    // get the value of the span's ID
    const streakDays = habits[span.parentNode.id].getStreak();
    const totalDays = habits[span.parentNode.id].getTotal();
    const missedDays = habits[span.parentNode.id].getMisses();

    // update the text of the streak element with the new streak days
    const streakEl = document.querySelector('.streak.mini h2');
    streakEl.innerHTML = `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92.27 122.88" style="enable-background:new 0 0 92.27 122.88" xml:space="preserve">
        <style type="text/css">
          .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#EC6F59;}
          .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FAD15C;}
        </style>
        <g>
          <path class="st0" d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"/>
          <path class="st1" d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"/>
        </g>
      </svg>
      Streak:
      <br>${streakDays} days
    `;
    const totalEl = document.querySelector('.total.mini h2');
    totalEl.innerHTML=`Total:<br>${totalDays} days`;

    const missedEl = document.querySelector('.fail.mini h2');
    missedEl.innerHTML=`Misses:<br>${missedDays}  days`

    console.log(habits[span.parentNode.id].getList());
  });
};
    }
    getStreak(){
        console.log(this.streak);
        return this.streak;
    }
    getTotal(){
        console.log(this.total);
        console.log("hi")
        return this.total;
    }
    getMisses(){
        return this.failed;
    }
    getList(){
        return this.list;
    }
    incTotal(total) {
        this.total++;
    }
      
    incStreak(streak) {
        this.streak++;
    }
      
    incFailed(failed) {
        this.failed++;
    }
}

let idCount=0;

let currentDay = 10;

let habits = [new habit("Drink 8 glasses of water", 5, 7, 3,[1,2,5,6,7,8,9]),new habit("Exercise for 30 minutes a day", 10, 10, 0,[0,1,2,3,4,5,6,7,8,9]),new habit("Walk the dog", 0, 0, 11,[])];

const spans = document.getElementsByTagName('span');

// Loop through each span and add a click event listener
for (let i = 0; i < spans.length; i++) {
const span = spans[i];
span.addEventListener('click', () => {
    for (let j = 0; j < spans.length; j++) {
        spans[j].classList.remove('selected');
    }
  
    // Add the "selected" class to the clicked span
    span.classList.add('selected');
    // get the value of the span's ID
    const streakDays = habits[span.parentNode.id].getStreak();
    const totalDays = habits[span.parentNode.id].getTotal();
    const missedDays = habits[span.parentNode.id].getMisses();

    // update the text of the streak element with the new streak days
    const streakEl = document.querySelector('.streak.mini h2');
    streakEl.innerHTML = `
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92.27 122.88" style="enable-background:new 0 0 92.27 122.88" xml:space="preserve">
        <style type="text/css">
          .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#EC6F59;}
          .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FAD15C;}
        </style>
        <g>
          <path class="st0" d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"/>
          <path class="st1" d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"/>
        </g>
      </svg>
      Streak:
      <br>${streakDays} days
    `;
    const totalEl = document.querySelector('.total.mini h2');
    totalEl.innerHTML=`Total:<br>${totalDays} days`;

    const missedEl = document.querySelector('.fail.mini h2');
    missedEl.innerHTML=`Misses:<br>${missedDays}  days`

    console.log(habits[span.parentNode.id].getList());
  });
};

const checkButtons = document.querySelectorAll('button.check');

checkButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const listItem = button.parentNode;
        listItem.textContent = '*';
        const topParent = listItem.parentNode.parentNode.id;
        habits[topParent].incStreak();
        habits[topParent].incTotal();

        let span=document.querySelector(".selected");
       
        const streakDays = habits[span.parentNode.id].getStreak();
        const totalDays = habits[span.parentNode.id].getTotal();
        const missedDays = habits[span.parentNode.id].getMisses();

        // update the text of the streak element with the new streak days
        const streakEl = document.querySelector('.streak.mini h2');
        streakEl.innerHTML = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92.27 122.88" style="enable-background:new 0 0 92.27 122.88" xml:space="preserve">
            <style type="text/css">
            .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#EC6F59;}
            .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FAD15C;}
            </style>
            <g>
            <path class="st0" d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"/>
            <path class="st1" d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"/>
            </g>
        </svg>
        Streak:
        <br>${streakDays} days
        `;
        const totalEl = document.querySelector('.total.mini h2');
        totalEl.innerHTML=`Total:<br>${totalDays} days`;

        const missedEl = document.querySelector('.fail.mini h2');
        missedEl.innerHTML=`Misses:<br>${missedDays}  days`
    });
});

const newButton = document.querySelector('.new');

// Add event listener to the button
newButton.addEventListener('click', function() {
  // Create new habit object with given parameters
  if(document.querySelector("input").value==""){
    return;
  }
  const newHabit = new habit(document.querySelector("input").value, 0, 0, 0,[]);
  
  document.querySelector("input").value="";

  // Add new habit to the habits array
  habits.push(newHabit);
  
  // Do any additional updates or rendering here
  const checkButtons = document.querySelectorAll('button.check');

checkButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const listItem = button.parentNode;
        listItem.textContent = '*';
        const topParent = listItem.parentNode.parentNode.id;
        habits[topParent].incStreak();
        habits[topParent].incTotal();

        let span=document.querySelector(".selected");
       
        const streakDays = habits[span.parentNode.id].getStreak();
        const totalDays = habits[span.parentNode.id].getTotal();
        const missedDays = habits[span.parentNode.id].getMisses();

        // update the text of the streak element with the new streak days
        const streakEl = document.querySelector('.streak.mini h2');
        streakEl.innerHTML = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92.27 122.88" style="enable-background:new 0 0 92.27 122.88" xml:space="preserve">
            <style type="text/css">
            .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#EC6F59;}
            .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FAD15C;}
            </style>
            <g>
            <path class="st0" d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"/>
            <path class="st1" d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"/>
            </g>
        </svg>
        Streak:
        <br>${streakDays} days
        `;
        const totalEl = document.querySelector('.total.mini h2');
        totalEl.innerHTML=`Total:<br>${totalDays} days`;

        const missedEl = document.querySelector('.fail.mini h2');
        missedEl.innerHTML=`Misses:<br>${missedDays}  days`
    });
});
});