import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
    Container
,   Content
,   ListItem
,   Text
} from 'native-base';
import {
    TextInput, Button
} from 'react-native';
import { addToDo } from '../../store/todos';
import { NavigationSceneRendererProps, NavigationScreenProps } from 'react-navigation';

interface Props extends NavigationSceneRendererProps{
    addToDo: typeof addToDo
}
interface State {
    title: string
,   body: string
}
class AddToDo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: ''
        ,   body: ''
        }
    }
    static navigationOptions = ({ navigation }: NavigationScreenProps) => {
        return {
            headerTitle: 'Home'
            ,   headerRight: (
                    <Button
                        title='Save'    
                        onPress={navigation.getParam('onClickSave')}
                    />
            )
        }
    };
    componentDidMount() {
        this.props.navigation.setParams({
            onClickSave: this._onClickSave
        });
    }

    _onClickSave = () => {
        const { title, body } = this.state;
        this.props.addToDo(title, body);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <Content>
                    <ListItem itemHeader><Text>タイトル</Text></ListItem>
                    <ListItem>
                        <TextInput
                            style={{
                                width: '100%'
                            ,   height: 20
                            }}
                            value={this.state.title}
                            onChangeText={(text) => {
                                this.setState({ title: text });
                            }}
                        />
                    </ListItem>
                    <ListItem itemHeader><Text>詳細</Text></ListItem>
                    <ListItem>
                        <TextInput
                            style={{
                                width: '100%'
                            ,   height: 20
                            }}
                            value={this.state.body}
                            onChangeText={(text) => {
                                this.setState({body: text});
                            }}
                        />
                    </ListItem>
                    <Button
                        title="test add"
                        onPress={this._onClickSave}
                    />
                </Content>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispach: Dispatch) => ({
    addToDo: (title: string, body: string) => dispach(addToDo(title, body))
});

export default connect(
    null
,   mapDispatchToProps
)(AddToDo)