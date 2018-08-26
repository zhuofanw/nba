import React from 'react';
import {ShotChart} from "./ShotChart"
import { Slider, InputNumber, Row, Col } from 'antd';

export class DataViewContainer extends React.Component{
    state = {
        minCount: 2,
    }

    onChange = (value) => { //callback function
        this.setState({
            minCount: value,
        });
    }

    render(){
        const { minCount } = this.state;
        return(
            <div className='data-view'>
                <ShotChart
                    playerId={this.props.playerId}
                    minCount = {minCount}
                    dispalyToolTips={true}
                    chartType={"hexbin"}
                />

                <Row>
                    <Col offset={4} span={12}>
                        <Slider min={2} max={20} onChange={this.onChange} value={minCount} />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={2}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={minCount}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}