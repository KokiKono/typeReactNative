import React from 'react';

import {
    Container
,   Header
,   Left
,   Right
,   Body
,   Title
} from 'native-base';

interface Props {}
export default class Home extends React.Component<Props> {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>設定</Title>
                    </Body>
                    <Right />
                </Header>
            </Container>
        )
    }
}