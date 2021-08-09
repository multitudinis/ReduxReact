const INNITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules:[
        {
        id: 1,
        title: 'iniciando com o redux',
        lessons: [
            {id: 1, title: 'primeira aula'},
            {id: 2, title: 'segunda aula'},                
        ]
        },
        {
        id: 2,
        title: 'aprendendo redux parte 2',
        lessons: [
            {id: 3, title: 'terceira aula'},
            {id: 4, title: 'quarta aula'},
            {id: 5, title: 'quinta aula'}
        ]
      }
    ]
}

export default function Course (state = INNITIAL_STATE, action) {
if (action.type === 'TOGGLE_LESSON'){
return {...state,
     activeLesson: action.lesson,
     activeModule: action.module}
}
return state
    
}