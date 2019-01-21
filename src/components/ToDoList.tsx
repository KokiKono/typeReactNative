import React from 'react';

import {
    Card
,   CardItem
,   Body
,   Text,
Container,
Content
} from 'native-base';

import {ToDo as ToDoType} from '../redux/store';

interface Props {
    todos: Array<ToDoType>
}

const ToDoItem = (todo: ToDoType) => (
    <Card key={todo.id}>
        <CardItem>
            <Body>
                <Text>{todo.title}</Text>
            </Body>
        </CardItem>
    </Card>
)

class ToDoList extends React.Component<Props> {
    render() {
        const { todos } = this.props;
        return (
            <Container>
                <Content>
                    {todos.map(todo => ToDoItem(todo))}
                </Content>
            </Container>
        )
    }
}

export default ToDoList