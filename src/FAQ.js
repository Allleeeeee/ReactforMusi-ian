import React, { Component } from 'react';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestionId: null,
      windowWidth: window.innerWidth,
    };
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };
  toggleAnswer = (questionId) => {
    this.setState((prevState) => ({
      activeQuestionId: prevState.activeQuestionId === questionId ? null : questionId,
    }));
  };

  render() {
    const { windowWidth } = this.state;
    const mainBlockWidth = windowWidth >= 1000 ? '1000px' : '100%';
    const { activeQuestionId } = this.state;
    const questions = [
      {
        id: 1,
        question: 'Когда состоится ваш следующий концерт?',
        answer: 'Дата следующего концерта пока не определена. Следите за нашими официальными каналами связи, чтобы быть в курсе всех наших будущих концертов.',
      },
      {
        id: 2,
        question: 'Какие песни будут исполнены на концертах?',
        answer: 'Мы стараемся удовлетворить вкусы наших поклонников и создать незабываемую атмосферу. Конкретный список песен будет объявлен перед каждым концертом.',
      },
      {
        id: 3,
        question: 'Что делать если не пришел билет?',
        answer: 'Если у вас возникли проблемы с билетом, рекомендуется обратиться к организаторам концерта или к месту продажи билетов, где вы его приобрели. Они смогут предоставить вам информацию и помощь в решении возникших вопросов',
      },{
        id: 4,
        question: 'Когда выйдет новый альбом?',
        answer: 'Дата выхода нового альбома пока не объявлена. Мы активно работаем над созданием новой музыки и подготовкой альбома. Следите за нашими официальными каналами связи, чтобы быть в курсе всех новостей и анонсов о выходе нового альбома.',
      },{
        id: 5,
        question: 'Почему в туре нет моего города?',
        answer: 'Организация тура требует много времени, ресурсов и планирования. Мы стараемся охватить как можно больше городов и стран, чтобы наши поклонники могли насладиться нашими выступлениями. Однако, иногда ограничения по расписанию, логистике и другим факторам могут привести к тому, что не все города попадают в тур. Мы всегда стараемся учесть пожелания и предпочтения наших поклонников при планировании будущих гастролей.',
      },
     
    ];

    return (
      <div style={{ 
        margin: "auto",
        width: mainBlockWidth,
       backgroundColor: 'rgb(65, 28, 100)',
       padding: '20px', 
       color: 'white' , 
       opacity:.7}}>
        {questions.map((q) => (
          <div key={q.id} style={{  display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <p style={{ flex: 1, marginRight: '10px', fontSize: '18px' }}>{q.question}</p>
            <button  style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                marginRight: '10px',
                display: activeQuestionId === q.id ? 'none' : 'inline-block',
              }}
            onClick={() => this.toggleAnswer(q.id)}>{">"}</button>
            {activeQuestionId === q.id && <p style={{ fontSize: '16px', width:'450px'}}>{q.answer}</p>}
          </div>
        ))}
      </div>
    );
  }
}

export default FAQ;
