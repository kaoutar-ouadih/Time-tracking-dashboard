import data from './data.json' assert { type: 'json' };



const dailyBtn = document.querySelector('#dailyBtn');
const weeklyBtn = document.querySelector('#weeklyBtn');
const monthlyBtn = document.querySelector('#monthlyBtn');
const container = document.querySelector('.container');
const content = document.querySelector('.content');

function removeItemsDaily(){
  content.innerHTML = '';
}


function appendItemDaily(item, index){
    const card = document.createElement('div');
    card.innerHTML = `
        <div class="section${index+2}">
            <div class="bgDiv bgdiv${index+1}">
            </div>
            <div class="card">
                <div class="category">
                    <h3 id="title">${item.title}</h3>
                    <span><svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></span>
                </div>
                <div class="calculatedTime">
                    <h1>${item.timeframes.daily.current}hrs</h1>
                    <p>Previous - ${item.timeframes.daily.previous}hrs</p>
                </div>
            </div>
        </div>
    `
    content.appendChild(card);
}

function appendItemWeekly(item, index){
    const card = document.createElement('div');
    card.innerHTML = `
        <div class="section${index+2}">
            <div class="bgDiv bgdiv${index+1}">
            </div>
            <div class="card">
                <div class="category">
                    <h3 id="title">${item.title}</h3>
                    <span><svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></span>
                </div>
                <div class="calculatedTime">
                    <h1>${item.timeframes.weekly.current}hrs</h1>
                    <p>Previous - ${item.timeframes.weekly.previous}hrs</p>
                </div>
            </div>
        </div>
    `
    content.appendChild(card);
}

function appendItemMonthly(item, index){
    const card = document.createElement('div');
    card.innerHTML = `
        <div class="section${index+2}">
            <div class="bgDiv bgdiv${index+1}">
            </div>
            <div class="card">
                <div class="category">
                    <h3 id="title">${item.title}</h3>
                    <span><svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></span>
                </div>
                <div class="calculatedTime">
                    <h1>${item.timeframes.monthly.current}hrs</h1>
                    <p>Previous - ${item.timeframes.monthly.previous}hrs</p>
                </div>
            </div>
        </div>
    `
    content.appendChild(card);
}

dailyBtn.addEventListener('click', ()=>{
    removeItemsDaily();
    data.forEach((item, index)=>{
        appendItemDaily(item, index);
    })
})

weeklyBtn.addEventListener('click', ()=>{
    removeItemsDaily();
    data.forEach((item, index)=>{
        appendItemWeekly(item, index);
    })
})

monthlyBtn.addEventListener('click', ()=>{
    removeItemsDaily();
    data.forEach((item, index)=>{
        appendItemMonthly(item, index);
    })
})

function displayDailyContent() {
    data.forEach((item, index) => {
      appendItemDaily(item, index);
    });
  }
  
  // Display daily content when the page loads
  displayDailyContent();



