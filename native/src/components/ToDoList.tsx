import React from 'react';
import {
    FlatList
} from 'react-native';
import {
    Text
,   ListItem
} from 'native-base';
import { ToDoListState } from '../store/todos';

interface Props {
    todo_list: ToDoListState
}

class ToDoList extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }
    renderToDo = ({ item }) => {
       return (
        <ListItem>
            <Text>{item.title}</Text>
        </ListItem>
       )
    };
    render() {
        const { todo_list } = this.props;
        console.log('todo_list', todo_list)
        return (
            <FlatList
                data={todo_list.data}
                extraData={this.props.todo_list.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderToDo}
            />
        )
    }
}

export default ToDoList