import { connect } from "react-redux";

const Video=({activeModule, activeLesson})=>(
            <div>
                <strong>Módulo {activeModule.title}</strong>
                <span>Aula {activeLesson.title}</span>
            </div> 
)

export default connect(state =>({
    activeModule: state.Course.activeModule,
    activeLesson: state.Course.activeLesson
}))(Video)