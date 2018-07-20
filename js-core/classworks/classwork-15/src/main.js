
const questions = [
    {
      questionName: 'question 1',
      answers: ['answer 1', 'answer 2', 'answer 3'],
      correctAnswers: [1]
    },
    {
      questionName: 'question 2',
      answers: ['answer 1', 'answer 2', 'answer 3'],
      correctAnswers: [2]
    },
    {
      questionName: 'question 3',
      answers: ['answer 1', 'answer 2', 'answer 3'],
      correctAnswers: [1, 2]
    }
  ];

const app = {
    questions,
    testName: 'Тест по программированию',
    buttonValue: 'Проверить',

    render() {
      const main = this.newEl('main');
      const testName = this.newEl('h1');
      const submit = this.newEl('button');
      submit.setAttribute('type','submit');
      submit.textContent = this.buttonValue;
      testName.textContent = this.testName;
      const questionsList = this.newEl('ol');
      submit.onclick = function () {

      }
  
      /*
      *
      * this.renderQuestions()
      *
      * */
      this.questions.forEach(question => {
        const li = this.newEl('li');
        const questionHeader = this.newEl('h3');
        questionHeader.textContent = question.questionName;
        const answers = this.newEl('ul');

        question.answers.forEach((answer, answerIndex) => {
          answers.innerHTML += (this.renderAnswer(answer, answerIndex));
        });
  
        li.appendChild(questionHeader);
        li.appendChild(answers);
        questionsList.appendChild(li);
      });
  
      main.appendChild(testName);
      main.appendChild(questionsList);
      main.appendChild(submit);
      document.body.appendChild(main);
    },
    renderAnswer(answer, answerIndex) {
      const uniqId = `uniq_${Math.random()}_${answerIndex}`;
      // const li = this.newEl('li');
      // const label = this.newEl('label');
      // label.setAttribute('for', uniqId);
      // label.textContent = answer;
  
      // const input = this.newEl('input');
      // input.setAttribute('type', 'checkbox');
      // input.setAttribute('id', uniqId);
  
      // li.appendChild(input);
      // li.appendChild(label);

      return `<li>
                <input type="checkbox" id="${uniqId}">
                <label for="${uniqId}">${answer}</label>
              </li>`;

      // return li;
    },
    newEl(elName) {
      return document.createElement(elName);
    }
  };
  
  app.render();

//   let main = document.querySelector('.main');
//   let span = document.createElement('span');
//   span.textContent = 'SPAN';

//   let newButton = document.createElement('button');
//   newButton.textContent = 'ВЖУНЬ';
//   document.body.appendChild(newButton);

//   let answers = document.querySelectorAll('ul li label');

//   newButton.onclick = function(){
//     [...answers].forEach((val)=>{
//       let correct = document.createElement('span');
//       correct.textContent = 'CORRECT ';

//       val.parentElement.insertBefore(correct,val);
//     })
    
//   }

// main.parentElement.insertBefore(span,main);



// main.insertAdjacentHTML('beforeend', '<h1>QWERY</h1>');
// main.insertAdjacentElement('afterbegin', newButton)

// const javaScriptOneLove = [
//   'Arrow',
//   'Closures',
//   'Classes'
// ]
// let ul = document.createElement('ul');

// document.body.innerHTML += `<ul>${javaScriptOneLove.map(val => `<li>${val}</li>`).join('')}</ul>`