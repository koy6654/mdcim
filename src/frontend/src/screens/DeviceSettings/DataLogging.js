import React, { Component } from 'react';
import { Content, Row, Col, Box, Inputs } from 'adminlte-2-react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import Radio from '../../components/Radio';

const { Text } = Inputs;

const RadioOptions = [{
    checked: true,
    id: 'optionsRadio1',
    value: 'optionRadio1',
    label: 'User specified time',
},
{
    id: 'optionsRadios2',
    value: 'optionRadio2',
    label: 'Synchronize with NTP server'
},
]

export default class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const text = `
        if (1 == 1):
            print('1 is 1')
        else:
            print('1 is not 1')
        `
        return (
            <Content title='Date / Time'>
                <Box border solid>
                    <SyntaxHighlighter language="python" style={dark}>{text}
                        {/* <Text label="Textarea" inputType="textarea" rows={3} labelPosition="above" placeholder="Enter ..." /> */}
                    </SyntaxHighlighter>
                </Box>
            </Content>
        );
    }
}


