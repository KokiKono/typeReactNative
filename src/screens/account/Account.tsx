import React from 'react';

import {
    Container
,   Body
,   Content
,   Card
,   CardItem
,   Text
} from 'native-base';

interface Props {}
export default class Home extends React.Component<Props> {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>アカウント</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}