import React from 'react';
import { connect } from 'react-redux';

import {
    Container
,   Content
} from 'native-base';

import * as Screens from '../../navigation/Screens';
import ToDoList from '../../components/ToDoList';
import { ApplicationState } from '../../store';
import { ToDoListState } from '../../store/todos';
import { NavigationScreenConfigProps, NavigationScreenProps } from 'react-navigation';
import { Button } from 'react-native';



interface Props extends NavigationScreenConfigProps{
    todo_list: ToDoListState
}
class Home extends React.Component<Props> {

    static navigationOptions = ({navigation}: NavigationScreenProps) => {
        return {
            headerTitle: 'Home'
            ,   headerRight: (
                    <Button
                        title='Add ToDo'    
                        onPress={() => navigation.navigate(Screens.ADD_TODO)}
                    />
            )
        }
    };
    render() {
        return (
            <Container>
                <Content>
                    <ToDoList
                        todo_list={this.props.todo_list}
                    />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    todo_list: state.todo_list
});

export default connect(
    mapStateToProps
,   null
)(Home);