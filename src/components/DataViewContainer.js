import React from 'react';
import {ShotChart} from "./ShotChart"
import { Slider, InputNumber, Row, Radio, Col } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component{
    state = {
        minCount: 2,
        chartType: 'hexbin'
    }

    onChange = (value) => { //callback function
        this.setState({
            minCount: value,
        });
    }

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value
        });
    }

    render(){
        const { minCount, chartType} = this.state;
        return(
            <div className='data-view'>
                <ShotChart
                    playerId={this.props.playerId}
                    minCount = {minCount}
                    dispalyToolTips={true}
                    chartType={chartType}
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

                <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>
            </div>
        );
    }
}