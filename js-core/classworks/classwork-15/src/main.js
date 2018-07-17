
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
        //   let title = questionsList.children[1].children[0];
        //   let first = questionsList.children[1].children[1].firstChild.children[0];
        //   let last = questionsList.children[1].children[1].lastChild.children[0];
          
        //   first.checked = !first.checked;
        //   last.checked = !last.checked;
           

        //   if(title.textContent === 'Вопрос 999'){
        //     title.textContent = 'question 2';
        //   }else{
        //     title.textContent = 'Вопрос 999';
        //   }


        // let input1 = questionsList.children[0].children[1].children[1].children[0]
        // let input2 = questionsList.children[1].children[1].children[1].children[0]
        // let input3 = questionsList.children[2].children[1].children[1].children[0]
        // input1.checked = !input1.checked;
        // input2.checked = !input2.checked;
        // input3.checked = !input3.checked;

        let questions = main.querySelectorAll('ol>li>h3');

        [...questions].forEach((val,i) => {
                    
            val.className === 'active' ? 
            val.className = '' :
            val.className = 'active';             
        })
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
          answers.appendChild(this.renderAnswer(answer, answerIndex));
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
      const li = this.newEl('li');
      const label = this.newEl('label');
      const uniqId = `uniq_${Math.random()}_${answerIndex}`;
      label.setAttribute('for', uniqId);
      label.textContent = answer;
  
      const input = this.newEl('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', uniqId);
  
      li.appendChild(input);
      li.appendChild(label);
      return li;
    },
    newEl(elName) {
      return document.createElement(elName);
    }
  };
  
  app.render();