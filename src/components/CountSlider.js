import React from 'react';
import {Col, InputNumber, Row, Slider} from "antd"
import _ from "lodash"
export class CountSlider extends React.Component{

    state ={
        value:this.props.defaultValue
    }

    onChange = (value) => {
        this.setState({value});
        this.props.onChange(value);
    }

    render(){
        const { value } = this.state;
        return(
            <Row>
                <Col offset={4} span={12}>
                    <Slider min={2} max={20}
                            onChange={_.debounce(this.onChange)}
                            value={value}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={value}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}