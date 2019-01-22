import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModels } from '../../redux/reducers';
import {ToDo as ToDoType} from '../../redux/store';
import {
    ActionInterface, addToDo
} from '../../redux/actions';

import {
    Container
,   Content
} from 'native-base';
import ToDoList from '../../components/ToDoList';
import { Navigation } from 'react-native-navigation';

interface Props {
    todos: Array<ToDoType>
,   addToDo: ActionInterface
}
class Home extends React.Component<Props> {

    componentDidMount() {
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        switch(buttonId) {
            case 'add_todo': {
                this.props.addToDo('add title', 'add body');
            }
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <ToDoList
                        todos={this.props.todos}
                    />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state: StateModels) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispach: Dispatch) => ({
    addToDo: (title: string, body: string) => dispach(addToDo(title, body))
});

export default connect(
    mapStateToProps
,   mapDispatchToProps
)(Home);